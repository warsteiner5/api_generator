import path from 'node:path';
import { promises as fs } from 'node:fs';
import { MethodDeclaration, Project, SourceFile } from 'ts-morph';
import {
  buildIndexContent,
  EntitiesContext,
  LocalEntityMeta,
  analyzePropertyType,
  collectEntitiesContext,
  extractReferencedLocalEntities,
  getAdapterFileBase,
  getEnumFileBase,
  getModelFileBase,
  normalizeTypeText,
  splitTopLevel,
  toCamelCaseProperty,
  toKebabCase,
  writeManagedDirectory
} from './shared';

const SWAGGER_SERVICES_GLOB = 'src/app/api/swagger/services/*.ts';
const UI_REPOSITORIES_DIR = path.resolve('src/app/api/ui/repositories');
const UI_REPOSITORIES_PARAMS_DIR = path.join(UI_REPOSITORIES_DIR, 'params');

interface ParamUsage {
  swaggerTypeName: string;
  uiTypeName: string;
  sourceFilePath: string;
  fileBase: string;
  fileName: string;
  adapterConstName: string;
}

interface RepositoryMethodMeta {
  name: string;
  uiReturnType: string;
  paramsUsage?: ParamUsage;
  paramsOptional: boolean;
  callExpression: string;
  hasMap: boolean;
  mapExpression?: string;
  returnUiEntities: string[];
  toUiAdapterImports: Map<string, string>;
}

interface ReturnMappingPlan {
  uiType: string;
  expression: string;
  adapterImports: Map<string, string>;
}

function toRelativeImport(fromFilePath: string, toFilePath: string): string {
  const relativePath = path.relative(path.dirname(fromFilePath), toFilePath).replace(/\\/g, '/');
  const normalized = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
  return normalized.endsWith('.ts') ? normalized.slice(0, -3) : normalized;
}

function lowerFirst(value: string): string {
  return value ? value.charAt(0).toLowerCase() + value.slice(1) : value;
}

function getMatchingAngleIndex(text: string, openIndex: number): number {
  let depth = 0;
  for (let index = openIndex; index < text.length; index += 1) {
    const char = text[index];
    if (char === '<') {
      depth += 1;
    } else if (char === '>') {
      depth -= 1;
      if (depth === 0) {
        return index;
      }
    }
  }
  return -1;
}

function extractObservableInnerType(returnTypeText: string): string {
  const normalized = returnTypeText.replace(/\s+/g, ' ').trim();
  if (!normalized.startsWith('Observable<')) {
    return 'unknown';
  }
  const openIndex = normalized.indexOf('<');
  const closeIndex = getMatchingAngleIndex(normalized, openIndex);
  if (closeIndex < 0) {
    return 'unknown';
  }
  return normalized.slice(openIndex + 1, closeIndex).trim();
}

function getUiAdapterName(localName: string): string {
  return `adapt${localName}ToUI`;
}

function getDtoAdapterName(swaggerName: string): string {
  return `adapt${swaggerName}`;
}

function getEntityByTypeText(typeText: string, context: EntitiesContext): LocalEntityMeta | undefined {
  const unionParts = splitTopLevel(typeText.replace(/\s+/g, ' ').trim(), '|')
    .map((part) => part.trim())
    .filter(Boolean)
    .filter((part) => part !== 'null' && part !== 'undefined');

  if (unionParts.length !== 1) {
    return undefined;
  }

  const candidate = unionParts[0];
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(candidate)) {
    return undefined;
  }

  return context.bySwaggerName.get(candidate) ?? context.byLocalName.get(candidate);
}

function getPropertyTypeFromTypeAlias(typeText: string, propertyName: string): string | undefined {
  const escapedName = propertyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    new RegExp(`['"]${escapedName}['"]\\??\\s*:\\s*([^;]+);`),
    new RegExp(`\\b${escapedName}\\??\\s*:\\s*([^;]+);`)
  ];

  for (const pattern of patterns) {
    const match = typeText.match(pattern);
    if (match?.[1]) {
      return match[1].trim();
    }
  }

  return undefined;
}

function getPrimitiveDefaultExpression(typeText: string): string {
  if (typeText === 'string') {
    return "''";
  }
  if (typeText === 'number') {
    return '0';
  }
  if (typeText === 'boolean') {
    return 'false';
  }
  return 'null as any';
}

function addUiAdapterImport(
  adapterImports: Map<string, string>,
  entity: LocalEntityMeta
): string {
  const adapterName = getUiAdapterName(entity.localName);
  const adapterPath = `../adapters/toUI/${getAdapterFileBase(entity.localName)}.adapter`;
  adapterImports.set(adapterName, `import { ${adapterName} } from '${adapterPath}';`);
  return adapterName;
}

function buildReturnMappingPlan(
  swaggerTypeText: string,
  sourceExpression: string,
  context: EntitiesContext,
  adapterImports: Map<string, string>
): ReturnMappingPlan {
  const entity = getEntityByTypeText(swaggerTypeText, context);
  const isMarketJsonVoidResult =
    entity?.swaggerName === 'ApiMarketJsonVoidResultDto' ||
    entity?.swaggerName === 'ApiMarketJsonVoidResultAltDto' ||
    entity?.localName === 'MarketJsonVoidResult' ||
    entity?.localName === 'MarketJsonVoidResultAlt';

  if (entity?.kind === 'type') {
    if (isMarketJsonVoidResult) {
      return {
        uiType: 'void',
        expression: 'void 0',
        adapterImports
      };
    }

    if (entity.swaggerName.startsWith('ApiMarketJsonResultOf') || entity.localName.startsWith('MarketJsonResultOf')) {
      const dataType = getPropertyTypeFromTypeAlias(entity.typeText, 'data');
      if (!dataType) {
        return {
          uiType: 'void',
          expression: 'void 0',
          adapterImports
        };
      }
      return buildReturnMappingPlan(dataType, `${sourceExpression}?.data`, context, adapterImports);
    }
  }

  if (entity?.kind === 'interface') {
    if (isMarketJsonVoidResult) {
      return {
        uiType: 'void',
        expression: 'void 0',
        adapterImports
      };
    }

    if (
      entity.swaggerName.startsWith('ApiMarketPaginationResultOf') ||
      entity.localName.startsWith('MarketPaginationResultOf')
    ) {
      const itemsProperty = entity.properties.find((property) => property.name === 'items');
      if (itemsProperty) {
        return buildReturnMappingPlan(
          itemsProperty.typeText,
          `${sourceExpression}?.items`,
          context,
          adapterImports
        );
      }

      const invdataProperty = entity.properties.find((property) => property.name === 'invdata');
      if (invdataProperty) {
        return buildReturnMappingPlan(
          invdataProperty.typeText,
          `${sourceExpression}?.invdata`,
          context,
          adapterImports
        );
      }
    }
  }

  const analysis = analyzePropertyType(swaggerTypeText, context);
  if (analysis.kind === 'primitive') {
    const needsDefault = sourceExpression.includes('?.');
    return {
      uiType: analysis.uiType,
      expression: needsDefault
        ? `${sourceExpression} ?? ${getPrimitiveDefaultExpression(analysis.uiType)}`
        : sourceExpression,
      adapterImports
    };
  }

  if (analysis.kind === 'array-primitive') {
    return {
      uiType: analysis.uiType,
      expression: `${sourceExpression} ?? []`,
      adapterImports
    };
  }

  if (analysis.kind === 'entity' && analysis.entity) {
    const adapterName = addUiAdapterImport(adapterImports, analysis.entity);
    return {
      uiType: analysis.uiType,
      expression: `${adapterName}(${sourceExpression})`,
      adapterImports
    };
  }

  if (analysis.kind === 'array-entity' && analysis.entity) {
    const adapterName = addUiAdapterImport(adapterImports, analysis.entity);
    return {
      uiType: analysis.uiType,
      expression: `(${sourceExpression} ?? []).map((item) => ${adapterName}(item))`,
      adapterImports
    };
  }

  return {
    uiType: normalizeTypeText(swaggerTypeText, context.bySwaggerName),
    expression: sourceExpression,
    adapterImports
  };
}

function getRepositoryName(serviceClassName: string): string {
  return serviceClassName.endsWith('ApiService')
    ? `${serviceClassName.slice(0, -'ApiService'.length)}Repository`
    : `${serviceClassName}Repository`;
}

function getRepositoryFileBase(repositoryName: string): string {
  return toKebabCase(repositoryName.replace(/Repository$/, ''));
}

function getUiParamTypeName(swaggerTypeName: string): string {
  return swaggerTypeName.replace('$', '');
}

function getParamFileBase(uiParamTypeName: string): string {
  const bare = uiParamTypeName.endsWith('Params')
    ? uiParamTypeName.slice(0, -'Params'.length)
    : uiParamTypeName;
  return toKebabCase(bare);
}

function getObjectKey(name: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : JSON.stringify(name);
}

function getSourceAccessor(sourceName: string, propertyName: string): string {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(propertyName)) {
    return `${sourceName}.${propertyName}`;
  }
  return `${sourceName}[${JSON.stringify(propertyName)}]`;
}

function resolveParamUsage(
  method: MethodDeclaration,
  importMap: Map<string, string>,
  serviceFilePath: string,
  usagesMap: Map<string, ParamUsage>
): ParamUsage | undefined {
  const paramsDeclaration = method.getParameters().find((item) => item.getName() === 'params');
  if (!paramsDeclaration) {
    return undefined;
  }

  const typeText = paramsDeclaration.getTypeNode()?.getText() ?? '';
  const match = typeText.match(/\b([A-Za-z_][A-Za-z0-9_]*\$Params)\b/);
  if (!match) {
    return undefined;
  }

  const swaggerTypeName = match[1];
  const sourceModule = importMap.get(swaggerTypeName);
  if (!sourceModule || !sourceModule.startsWith('../fn/')) {
    return undefined;
  }

  const sourceFilePath = path.resolve(path.dirname(serviceFilePath), `${sourceModule}.ts`);
  const usageKey = `${swaggerTypeName}|${sourceFilePath}`;
  const existing = usagesMap.get(usageKey);
  if (existing) {
    return existing;
  }

  const uiTypeName = getUiParamTypeName(swaggerTypeName);
  const fileBase = getParamFileBase(uiTypeName);
  const usage: ParamUsage = {
    swaggerTypeName,
    uiTypeName,
    sourceFilePath,
    fileBase,
    fileName: `${fileBase}.params.ts`,
    adapterConstName: `${lowerFirst(uiTypeName)}Adapter`
  };
  usagesMap.set(usageKey, usage);
  return usage;
}

function buildMethodMeta(
  method: MethodDeclaration,
  paramsUsage: ParamUsage | undefined,
  context: EntitiesContext
): RepositoryMethodMeta | null {
  const methodName = method.getName();
  if (methodName.includes('$')) {
    return null;
  }

  const returnTypeText = method.getReturnTypeNode()?.getText() ?? 'Observable<unknown>';
  const swaggerInnerReturnType = extractObservableInnerType(returnTypeText);
  const toUiAdapterImports = new Map<string, string>();
  const returnPlan = buildReturnMappingPlan(swaggerInnerReturnType, 'res', context, toUiAdapterImports);
  const uiReturnType = returnPlan.uiType;
  const paramsOptional = method.getParameters().find((item) => item.getName() === 'params')?.hasQuestionToken() ?? false;
  const mapExpression = returnPlan.expression;
  const hasMap = mapExpression !== 'res';

  const returnUiEntities = extractReferencedLocalEntities(uiReturnType, context.byLocalName).map(
    (entity) => entity.localName
  );

  const callExpression = paramsUsage
    ? `this._api.${methodName}(${paramsUsage.adapterConstName}.adapt(params))`
    : `this._api.${methodName}()`;

  return {
    name: methodName,
    uiReturnType,
    paramsUsage,
    paramsOptional,
    callExpression,
    hasMap,
    mapExpression,
    returnUiEntities,
    toUiAdapterImports
  };
}

function addUiEntityImport(
  imports: Map<string, string>,
  entityLocalName: string,
  context: EntitiesContext,
  modelsBaseImportPath: string,
  enumsBaseImportPath: string
): void {
  const entity = context.byLocalName.get(entityLocalName);
  if (!entity) {
    return;
  }

  if (entity.kind === 'enum') {
    imports.set(
      entityLocalName,
      `import { ${entityLocalName} } from '${enumsBaseImportPath}/${getEnumFileBase(entityLocalName)}.enum';`
    );
  } else {
    imports.set(
      entityLocalName,
      `import { ${entityLocalName} } from '${modelsBaseImportPath}/${getModelFileBase(entityLocalName)}.interface';`
    );
  }
}

function buildParamFileContent(
  usage: ParamUsage,
  sourceFile: SourceFile | undefined,
  context: EntitiesContext
): string {
  const imports = new Map<string, string>();
  const swaggerParamImportPath = toRelativeImport(
    path.join(UI_REPOSITORIES_PARAMS_DIR, usage.fileName),
    usage.sourceFilePath
  );
  imports.set(
    usage.swaggerTypeName,
    `import { ${usage.swaggerTypeName} } from '${swaggerParamImportPath}';`
  );

  if (!sourceFile) {
    const lines = [
      ...imports.values(),
      '',
      `export type ${usage.uiTypeName} = unknown;`,
      '',
      `export const ${usage.adapterConstName} = {`,
      `  adapt(params?: ${usage.uiTypeName}): ${usage.swaggerTypeName} {`,
      '    if (!params) {',
      `      return {} as ${usage.swaggerTypeName};`,
      '    }',
      `    return params as unknown as ${usage.swaggerTypeName};`,
      '  }',
      '};'
    ];
    return `${lines.join('\n')}\n`;
  }

  const interfaceDeclaration = sourceFile.getInterface(usage.swaggerTypeName);
  const typeDeclaration = sourceFile.getTypeAlias(usage.swaggerTypeName);

  const bodyLines: string[] = [];
  const adapterPropertyLines: string[] = [];
  const adapterImports = new Map<string, string>();

  if (interfaceDeclaration) {
    for (const property of interfaceDeclaration.getProperties()) {
      const swaggerPropertyName = property.getName();
      const uiPropertyName = toCamelCaseProperty(swaggerPropertyName);
      const rawTypeText = property.getTypeNode()?.getText() ?? 'unknown';
      const uiTypeText = normalizeTypeText(rawTypeText, context.bySwaggerName);
      const optionalMark = property.hasQuestionToken() ? '?' : '';

      for (const referencedEntity of extractReferencedLocalEntities(uiTypeText, context.byLocalName)) {
        addUiEntityImport(imports, referencedEntity.localName, context, '../../models', '../../enums');
      }

      bodyLines.push(`  ${uiPropertyName}${optionalMark}: ${uiTypeText};`);

      const analysis = analyzePropertyType(rawTypeText, context);
      const sourceAccessor = getSourceAccessor('params', uiPropertyName);
      let mappedExpression = sourceAccessor;

      if (analysis.kind === 'entity' && analysis.entity) {
        const adapterName = getDtoAdapterName(analysis.entity.swaggerName);
        const adapterPath = `../../adapters/toDto/${analysis.entity.sourceFileBase}.adapter`;
        adapterImports.set(
          adapterName,
          `import { ${adapterName} } from '${adapterPath}';`
        );
        mappedExpression = `${adapterName}(${sourceAccessor})`;
      } else if (analysis.kind === 'array-entity' && analysis.entity) {
        const adapterName = getDtoAdapterName(analysis.entity.swaggerName);
        const adapterPath = `../../adapters/toDto/${analysis.entity.sourceFileBase}.adapter`;
        adapterImports.set(
          adapterName,
          `import { ${adapterName} } from '${adapterPath}';`
        );
        mappedExpression = `(${sourceAccessor} ?? []).map((item) => ${adapterName}(item))`;
      }

      adapterPropertyLines.push(`      ${getObjectKey(swaggerPropertyName)}: ${mappedExpression},`);
    }
  } else if (typeDeclaration) {
    const rawTypeText = typeDeclaration.getTypeNode()?.getText() ?? 'unknown';
    const uiTypeText = normalizeTypeText(rawTypeText, context.bySwaggerName);
    for (const referencedEntity of extractReferencedLocalEntities(uiTypeText, context.byLocalName)) {
      addUiEntityImport(imports, referencedEntity.localName, context, '../../models', '../../enums');
    }

    const typeLines = [
      ...[...imports.values()].sort((left, right) => left.localeCompare(right)),
      '',
      `export type ${usage.uiTypeName} = ${uiTypeText};`,
      '',
      `export const ${usage.adapterConstName} = {`,
      `  adapt(params?: ${usage.uiTypeName}): ${usage.swaggerTypeName} {`,
      '    if (!params) {',
      `      return {} as ${usage.swaggerTypeName};`,
      '    }',
      `    return params as unknown as ${usage.swaggerTypeName};`,
      '  }',
      '};'
    ];
    return `${typeLines.join('\n')}\n`;
  }

  const lines: string[] = [];
  lines.push(...[...imports.values()].sort((left, right) => left.localeCompare(right)));
  const sortedAdapterImports = [...adapterImports.values()].sort((left, right) => left.localeCompare(right));
  if (sortedAdapterImports.length) {
    lines.push(...sortedAdapterImports);
  }
  lines.push('');
  lines.push(`export interface ${usage.uiTypeName} {`);
  if (bodyLines.length) {
    lines.push(...bodyLines);
  }
  lines.push('}');
  lines.push('');
  lines.push(`export const ${usage.adapterConstName} = {`);
  lines.push(`  adapt(params?: ${usage.uiTypeName}): ${usage.swaggerTypeName} {`);
  lines.push('    if (!params) {');
  lines.push(`      return {} as ${usage.swaggerTypeName};`);
  lines.push('    }');
  lines.push('    return {');
  if (adapterPropertyLines.length) {
    lines.push(...adapterPropertyLines);
  }
  lines.push('    };');
  lines.push('  }');
  lines.push('};');
  return `${lines.join('\n')}\n`;
}

async function ensureDirectory(directoryPath: string): Promise<void> {
  await fs.mkdir(directoryPath, { recursive: true });
}

async function generateRepositories(): Promise<void> {
  const context = await collectEntitiesContext();
  const project = new Project({
    skipAddingFilesFromTsConfig: true
  });
  project.addSourceFilesAtPaths(SWAGGER_SERVICES_GLOB);
  project.addSourceFilesAtPaths('src/app/api/swagger/fn/**/*.ts');

  await ensureDirectory(UI_REPOSITORIES_DIR);
  await ensureDirectory(UI_REPOSITORIES_PARAMS_DIR);

  const repositoriesFiles = new Map<string, string>();
  const repositoriesExports: string[] = [];
  const paramsFiles = new Map<string, string>();
  const paramsExports: string[] = [];
  const allParamUsages = new Map<string, ParamUsage>();

  const serviceFiles = project.getSourceFiles(SWAGGER_SERVICES_GLOB);

  for (const serviceFile of serviceFiles) {
    const serviceClass = serviceFile.getClasses().find((item) => item.isExported());
    if (!serviceClass) {
      continue;
    }

    const serviceClassName = serviceClass.getName() ?? '';
    if (!serviceClassName.endsWith('ApiService')) {
      continue;
    }

    const repositoryName = getRepositoryName(serviceClassName);
    const repositoryFileBase = getRepositoryFileBase(repositoryName);
    const repositoryFileName = `${repositoryFileBase}.repository.ts`;
    const repositoryFilePath = path.join(UI_REPOSITORIES_DIR, repositoryFileName);

    const importMap = new Map<string, string>();
    for (const importDeclaration of serviceFile.getImportDeclarations()) {
      const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
      for (const namedImport of importDeclaration.getNamedImports()) {
        importMap.set(namedImport.getName(), moduleSpecifier);
      }
    }

    const methodsMeta: RepositoryMethodMeta[] = [];
    for (const method of serviceClass.getMethods()) {
      const paramsUsage = resolveParamUsage(
        method,
        importMap,
        serviceFile.getFilePath(),
        allParamUsages
      );
      const methodMeta = buildMethodMeta(method, paramsUsage, context);
      if (methodMeta) {
        methodsMeta.push(methodMeta);
      }
    }

    methodsMeta.sort((left, right) => left.name.localeCompare(right.name));
    if (!methodsMeta.length) {
      continue;
    }

    const imports = new Map<string, string>();
    const serviceImportPath = `../../swagger/services/${path.basename(serviceFile.getFilePath(), '.ts')}`;
    imports.set(serviceClassName, `import { ${serviceClassName} } from '${serviceImportPath}';`);
    imports.set('Injectable', "import { Injectable, inject } from '@angular/core';");
    imports.set('Observable', "import { Observable } from 'rxjs';");

    if (methodsMeta.some((item) => item.hasMap)) {
      imports.set('map', "import { map } from 'rxjs/operators';");
    }

    for (const methodMeta of methodsMeta) {
      if (methodMeta.paramsUsage) {
        const paramImportPath = `./params/${methodMeta.paramsUsage.fileBase}.params`;
        imports.set(
          methodMeta.paramsUsage.uiTypeName,
          `import { ${methodMeta.paramsUsage.uiTypeName}, ${methodMeta.paramsUsage.adapterConstName} } from '${paramImportPath}';`
        );
      }

      for (const localName of methodMeta.returnUiEntities) {
        addUiEntityImport(imports, localName, context, '../models', '../enums');
      }

      for (const [key, importLine] of methodMeta.toUiAdapterImports.entries()) {
        imports.set(key, importLine);
      }
    }

    const lines: string[] = [];
    lines.push(...[...imports.values()].sort((left, right) => left.localeCompare(right)));
    lines.push('');
    lines.push("@Injectable({ providedIn: 'root' })");
    lines.push(`export class ${repositoryName} {`);
    lines.push(`  private readonly _api = inject(${serviceClassName});`);
    lines.push('');

    for (const methodMeta of methodsMeta) {
      if (methodMeta.paramsUsage) {
        const optionalMark = methodMeta.paramsOptional ? '?' : '';
        lines.push(
          `  ${methodMeta.name}(params${optionalMark}: ${methodMeta.paramsUsage.uiTypeName}): Observable<${methodMeta.uiReturnType}> {`
        );
      } else {
        lines.push(`  ${methodMeta.name}(): Observable<${methodMeta.uiReturnType}> {`);
      }

      if (methodMeta.hasMap && methodMeta.mapExpression) {
        lines.push(`    return ${methodMeta.callExpression}.pipe(`);
        lines.push(`      map((res) => ${methodMeta.mapExpression})`);
        lines.push('    );');
      } else {
        lines.push(`    return ${methodMeta.callExpression};`);
      }
      lines.push('  }');
      lines.push('');
    }

    lines.push('}');
    repositoriesFiles.set(repositoryFileName, `${lines.join('\n')}\n`);
    repositoriesExports.push(`./${repositoryFileBase}.repository`);
  }

  const paramSourceFilesByPath = new Map<string, SourceFile>();
  for (const sourceFile of project.getSourceFiles('src/app/api/swagger/fn/**/*.ts')) {
    paramSourceFilesByPath.set(path.resolve(sourceFile.getFilePath()), sourceFile);
  }

  for (const usage of [...allParamUsages.values()].sort((left, right) => left.uiTypeName.localeCompare(right.uiTypeName))) {
    const sourceFile = paramSourceFilesByPath.get(path.resolve(usage.sourceFilePath));
    const content = buildParamFileContent(usage, sourceFile, context);
    paramsFiles.set(usage.fileName, content);
    paramsExports.push(`./${usage.fileBase}.params`);
  }

  repositoriesExports.sort((left, right) => left.localeCompare(right));
  paramsExports.sort((left, right) => left.localeCompare(right));
  repositoriesFiles.set('index.ts', buildIndexContent(repositoriesExports));
  paramsFiles.set('index.ts', buildIndexContent(paramsExports));

  await writeManagedDirectory(
    UI_REPOSITORIES_DIR,
    repositoriesFiles,
    (fileName) => fileName.endsWith('.repository.ts') || fileName === 'index.ts'
  );

  await writeManagedDirectory(
    UI_REPOSITORIES_PARAMS_DIR,
    paramsFiles,
    (fileName) => fileName.endsWith('.params.ts') || fileName === 'index.ts'
  );

  console.log(`Repositories generated: ${repositoriesExports.length}`);
  console.log(`Output: ${path.relative(process.cwd(), UI_REPOSITORIES_DIR)}`);
  console.log(`Repository params generated: ${paramsExports.length}`);
  console.log(`Output: ${path.relative(process.cwd(), UI_REPOSITORIES_PARAMS_DIR)}`);
}

generateRepositories().catch((error) => {
  console.error(error);
  process.exit(1);
});

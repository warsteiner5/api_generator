import path from 'node:path';
import {
  analyzePropertyType,
  buildIndexContent,
  collectEntitiesContext,
  getAdapterFileBase,
  getEnumFileBase,
  getModelFileBase,
  isExcludedMarketJsonResult,
  toCamelCaseProperty,
  UI_ADAPTERS_DIR,
  UI_ADAPTERS_TO_DTO_DIR,
  UI_ADAPTERS_TO_UI_DIR,
  writeManagedDirectory
} from './shared';

function isIdentifier(value: string): boolean {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value);
}

function getSourceAccessor(propertyName: string): string {
  if (isIdentifier(propertyName)) {
    return `source?.${propertyName}`;
  }
  return `source?.[${JSON.stringify(propertyName)}]`;
}

function getAdapterToUIName(localName: string): string {
  return `adapt${localName}ToUI`;
}

function getAdapterToDtoName(swaggerName: string): string {
  return `adapt${swaggerName}`;
}

function getToDtoAdapterFileBase(sourceFileBase: string): string {
  return sourceFileBase;
}

function getPrimitiveUiExpression(sourceAccessor: string, uiType: string): string {
  if (uiType === 'string') {
    return `${sourceAccessor} ?? ''`;
  }
  if (uiType === 'number') {
    return `${sourceAccessor} ?? 0`;
  }
  if (uiType === 'boolean') {
    return `${sourceAccessor} ?? false`;
  }
  if (uiType === 'any') {
    return sourceAccessor;
  }
  if (uiType === 'object') {
    return `${sourceAccessor} ?? {}`;
  }
  return `${sourceAccessor} as ${uiType}`;
}

function getTargetPropertyName(propertyName: string): string {
  if (isIdentifier(propertyName)) {
    return propertyName;
  }
  return JSON.stringify(propertyName);
}

async function generateAdapters(): Promise<void> {
  const context = await collectEntitiesContext();
  const toUiFiles = new Map<string, string>();
  const toDtoFiles = new Map<string, string>();
  const toUiExports: string[] = [];
  const toDtoExports: string[] = [];
  let generatedToUiCount = 0;
  let generatedToDtoCount = 0;

  for (const enumEntity of context.enums) {
    const fileBase = getAdapterFileBase(enumEntity.localName);
    const fileName = `${fileBase}.adapter.ts`;
    const dtoFileBase = getToDtoAdapterFileBase(enumEntity.sourceFileBase);
    const dtoFileName = `${dtoFileBase}.adapter.ts`;
    const firstMember = enumEntity.members[0]?.name;
    if (!firstMember) {
      continue;
    }

    const toUiFunction = getAdapterToUIName(enumEntity.localName);
    const toUiLines: string[] = [
      `import { ${enumEntity.swaggerName} } from '../../../swagger/models/${enumEntity.sourceFileBase}';`,
      `import { ${enumEntity.localName} } from '../../enums/${getEnumFileBase(enumEntity.localName)}.enum';`,
      '',
      `export function ${toUiFunction}(source?: ${enumEntity.swaggerName} | null): ${enumEntity.localName} {`,
      '  switch (source) {'
    ];
    for (const member of enumEntity.members) {
      toUiLines.push(
        `    case ${enumEntity.swaggerName}.${member.name}:`,
        `      return ${enumEntity.localName}.${member.name};`
      );
    }
    toUiLines.push(
      '    default:',
      `      throw new Error(\`Enum value is not defined: ${enumEntity.swaggerName}=\${String(source)}\`);`,
      '  }',
      '}'
    );
    toUiFiles.set(fileName, `${toUiLines.join('\n')}\n`);
    toUiExports.push(`./${fileBase}.adapter`);

    const toDtoFunction = getAdapterToDtoName(enumEntity.swaggerName);
    const toDtoLines: string[] = [
      `import { ${enumEntity.localName} } from '../../enums/${getEnumFileBase(enumEntity.localName)}.enum';`,
      `import { ${enumEntity.swaggerName} } from '../../../swagger/models/${enumEntity.sourceFileBase}';`,
      '',
      `export function ${toDtoFunction}(source?: ${enumEntity.localName} | null): ${enumEntity.swaggerName} {`,
      '  switch (source) {'
    ];
    for (const member of enumEntity.members) {
      toDtoLines.push(
        `    case ${enumEntity.localName}.${member.name}:`,
        `      return ${enumEntity.swaggerName}.${member.name};`
      );
    }
    toDtoLines.push(
      '    default:',
      `      throw new Error(\`Enum value is not defined: ${enumEntity.localName}=\${String(source)}\`);`,
      '  }',
      '}'
    );
    toDtoFiles.set(dtoFileName, `${toDtoLines.join('\n')}\n`);
    toDtoExports.push(`./${dtoFileBase}.adapter`);
  }

  for (const typeEntity of context.types) {
    if (isExcludedMarketJsonResult(typeEntity.swaggerName)) {
      continue;
    }

    const fileBase = getAdapterFileBase(typeEntity.localName);
    const fileName = `${fileBase}.adapter.ts`;
    const dtoFileBase = getToDtoAdapterFileBase(typeEntity.sourceFileBase);
    const dtoFileName = `${dtoFileBase}.adapter.ts`;

    const toUiFunction = getAdapterToUIName(typeEntity.localName);
    const toUiLines: string[] = [
      `import { ${typeEntity.swaggerName} } from '../../../swagger/models/${typeEntity.sourceFileBase}';`,
      `import { ${typeEntity.localName} } from '../../models/${getModelFileBase(typeEntity.localName)}.interface';`,
      '',
      `export function ${toUiFunction}(source?: ${typeEntity.swaggerName} | null): ${typeEntity.localName} {`,
      `  return (source ?? {}) as ${typeEntity.localName};`,
      '}'
    ];
    toUiFiles.set(fileName, `${toUiLines.join('\n')}\n`);
    toUiExports.push(`./${fileBase}.adapter`);
    generatedToUiCount += 1;

    const toDtoFunction = getAdapterToDtoName(typeEntity.swaggerName);
    const toDtoLines: string[] = [
      `import { ${typeEntity.localName} } from '../../models/${getModelFileBase(typeEntity.localName)}.interface';`,
      `import { ${typeEntity.swaggerName} } from '../../../swagger/models/${typeEntity.sourceFileBase}';`,
      '',
      `export function ${toDtoFunction}(source?: ${typeEntity.localName} | null): ${typeEntity.swaggerName} {`,
      `  return (source ?? {}) as ${typeEntity.swaggerName};`,
      '}'
    ];
    toDtoFiles.set(dtoFileName, `${toDtoLines.join('\n')}\n`);
    toDtoExports.push(`./${dtoFileBase}.adapter`);
    generatedToDtoCount += 1;
  }

  for (const interfaceEntity of context.interfaces) {
    if (isExcludedMarketJsonResult(interfaceEntity.swaggerName)) {
      continue;
    }

    const fileBase = getAdapterFileBase(interfaceEntity.localName);
    const fileName = `${fileBase}.adapter.ts`;
    const dtoFileBase = getToDtoAdapterFileBase(interfaceEntity.sourceFileBase);
    const dtoFileName = `${dtoFileBase}.adapter.ts`;
    const toUiFunction = getAdapterToUIName(interfaceEntity.localName);
    const toDtoFunction = getAdapterToDtoName(interfaceEntity.swaggerName);

    const toUiAdapterImports = new Map<string, string>();
    const toDtoAdapterImports = new Map<string, string>();
    const toUiPropertyLines: string[] = [];
    const toDtoPropertyLines: string[] = [];

    for (const property of interfaceEntity.properties) {
      const analysis = analyzePropertyType(property.typeText, context);
      const dtoSourceAccessor = getSourceAccessor(property.name);
      const uiPropertyName = toCamelCaseProperty(property.name);
      const uiSourceAccessor = getSourceAccessor(uiPropertyName);
      const dtoPropertyName = getTargetPropertyName(property.name);

      let toUiExpression: string;
      let toDtoExpression: string;

      if (
        analysis.kind === 'array-entity' &&
        analysis.entity &&
        !isExcludedMarketJsonResult(analysis.entity.swaggerName)
      ) {
        const nestedToUiFunction = getAdapterToUIName(analysis.entity.localName);
        const nestedToDtoFunction = getAdapterToDtoName(analysis.entity.swaggerName);
        if (analysis.entity.localName !== interfaceEntity.localName) {
          const nestedPath = `./${getAdapterFileBase(analysis.entity.localName)}.adapter`;
          const nestedDtoPath = `./${getToDtoAdapterFileBase(analysis.entity.sourceFileBase)}.adapter`;
          toUiAdapterImports.set(
            nestedToUiFunction,
            `import { ${nestedToUiFunction} } from '${nestedPath}';`
          );
          toDtoAdapterImports.set(
            nestedToDtoFunction,
            `import { ${nestedToDtoFunction} } from '${nestedDtoPath}';`
          );
        }
        toUiExpression = `(${dtoSourceAccessor} ?? []).map((item) => ${nestedToUiFunction}(item))`;
        toDtoExpression = `(${uiSourceAccessor} ?? []).map((item) => ${nestedToDtoFunction}(item))`;
      } else if (
        analysis.kind === 'entity' &&
        analysis.entity &&
        !isExcludedMarketJsonResult(analysis.entity.swaggerName)
      ) {
        const nestedToUiFunction = getAdapterToUIName(analysis.entity.localName);
        const nestedToDtoFunction = getAdapterToDtoName(analysis.entity.swaggerName);
        if (analysis.entity.localName !== interfaceEntity.localName) {
          const nestedPath = `./${getAdapterFileBase(analysis.entity.localName)}.adapter`;
          const nestedDtoPath = `./${getToDtoAdapterFileBase(analysis.entity.sourceFileBase)}.adapter`;
          toUiAdapterImports.set(
            nestedToUiFunction,
            `import { ${nestedToUiFunction} } from '${nestedPath}';`
          );
          toDtoAdapterImports.set(
            nestedToDtoFunction,
            `import { ${nestedToDtoFunction} } from '${nestedDtoPath}';`
          );
        }
        toUiExpression = `${nestedToUiFunction}(${dtoSourceAccessor})`;
        toDtoExpression = `${nestedToDtoFunction}(${uiSourceAccessor})`;
      } else if (analysis.kind === 'array-primitive') {
        toUiExpression = `${dtoSourceAccessor} ?? []`;
        toDtoExpression = `${uiSourceAccessor} ?? []`;
      } else if (analysis.kind === 'primitive') {
        toUiExpression = getPrimitiveUiExpression(dtoSourceAccessor, analysis.uiType);
        toDtoExpression = uiSourceAccessor;
      } else {
        toUiExpression = `(${dtoSourceAccessor} ?? null) as any`;
        toDtoExpression = `${uiSourceAccessor} as any`;
      }

      toUiPropertyLines.push(`    ${uiPropertyName}: ${toUiExpression},`);
      toDtoPropertyLines.push(`    ${dtoPropertyName}: ${toDtoExpression},`);
    }

    const toUiImportLines = [
      `import { ${interfaceEntity.swaggerName} } from '../../../swagger/models/${interfaceEntity.sourceFileBase}';`,
      `import { ${interfaceEntity.localName} } from '../../models/${getModelFileBase(interfaceEntity.localName)}.interface';`,
      ...[...toUiAdapterImports.values()].sort((left, right) => left.localeCompare(right))
    ];
    const toUiLines: string[] = [...toUiImportLines, ''];
    toUiLines.push(
      `export function ${toUiFunction}(source?: ${interfaceEntity.swaggerName} | null): ${interfaceEntity.localName} {`,
      '  return {',
      ...toUiPropertyLines,
      '  };',
      '}'
    );
    toUiFiles.set(fileName, `${toUiLines.join('\n')}\n`);
    toUiExports.push(`./${fileBase}.adapter`);
    generatedToUiCount += 1;

    const toDtoImportLines = [
      `import { ${interfaceEntity.localName} } from '../../models/${getModelFileBase(interfaceEntity.localName)}.interface';`,
      `import { ${interfaceEntity.swaggerName} } from '../../../swagger/models/${interfaceEntity.sourceFileBase}';`,
      ...[...toDtoAdapterImports.values()].sort((left, right) => left.localeCompare(right))
    ];
    const toDtoLines: string[] = [...toDtoImportLines, ''];
    toDtoLines.push(
      `export function ${toDtoFunction}(source?: ${interfaceEntity.localName} | null): ${interfaceEntity.swaggerName} {`,
      '  return {',
      ...toDtoPropertyLines,
      '  };',
      '}'
    );
    toDtoFiles.set(dtoFileName, `${toDtoLines.join('\n')}\n`);
    toDtoExports.push(`./${dtoFileBase}.adapter`);
    generatedToDtoCount += 1;
  }

  toUiExports.sort((left, right) => left.localeCompare(right));
  toDtoExports.sort((left, right) => left.localeCompare(right));
  toUiFiles.set('index.ts', buildIndexContent(toUiExports));
  toDtoFiles.set('index.ts', buildIndexContent(toDtoExports));

  await writeManagedDirectory(
    UI_ADAPTERS_TO_UI_DIR,
    toUiFiles,
    (fileName) => fileName.endsWith('.adapter.ts') || fileName === 'index.ts'
  );

  await writeManagedDirectory(
    UI_ADAPTERS_TO_DTO_DIR,
    toDtoFiles,
    (fileName) => fileName.endsWith('.adapter.ts') || fileName === 'index.ts'
  );

  await writeManagedDirectory(
    UI_ADAPTERS_DIR,
    new Map([['index.ts', "export * from './toUI';\nexport * from './toDto';\n"]]),
    (fileName) => fileName.endsWith('.adapter.ts') || fileName === 'index.ts'
  );

  console.log(`Adapters toUI generated: ${generatedToUiCount + context.enums.length}`);
  console.log(`Output: ${path.relative(process.cwd(), UI_ADAPTERS_TO_UI_DIR)}`);
  console.log(`Adapters toDto generated: ${generatedToDtoCount + context.enums.length}`);
  console.log(`Output: ${path.relative(process.cwd(), UI_ADAPTERS_TO_DTO_DIR)}`);
}

generateAdapters().catch((error) => {
  console.error(error);
  process.exit(1);
});

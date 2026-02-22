import { promises as fs } from 'node:fs';
import path from 'node:path';
import {
  analyzePropertyType,
  buildIndexContent,
  collectEntitiesContext,
  getAdapterFileBase,
  getEnumFileBase,
  getModelFileBase,
  isExcludedMarketJsonResult,
  LocalEntityMeta,
  toCamelCaseProperty,
  UI_ADAPTERS_DIR,
  UI_ADAPTERS_ENUMS_DIR,
  UI_ADAPTERS_MODELS_DIR,
  writeManagedDirectory
} from './shared';

type AdapterDirection = 'ui' | 'dto';

function isIdentifier(value: string): boolean {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value);
}

function lowerFirst(value: string): string {
  return value ? value.charAt(0).toLowerCase() + value.slice(1) : value;
}

function getUiAdapterName(localName: string): string {
  return `${lowerFirst(localName)}Adapter`;
}

function getDtoAdapterName(swaggerName: string): string {
  return `${lowerFirst(swaggerName)}Adapter`;
}

function getSourceAccessor(propertyName: string): string {
  if (isIdentifier(propertyName)) {
    return `source?.${propertyName}`;
  }
  return `source?.[${JSON.stringify(propertyName)}]`;
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

function getEntityAdapterFileBase(entity: LocalEntityMeta, direction: AdapterDirection): string {
  return direction === 'ui' ? getAdapterFileBase(entity.localName) : entity.sourceFileBase;
}

function getNestedAdapterPath(entity: LocalEntityMeta, direction: AdapterDirection): string {
  const fileBase = getEntityAdapterFileBase(entity, direction);
  return entity.kind === 'enum' ? `../enums/${fileBase}.adapter` : `./${fileBase}.adapter`;
}

async function generateAdapters(): Promise<void> {
  const context = await collectEntitiesContext();
  const enumFiles = new Map<string, string>();
  const modelFiles = new Map<string, string>();
  const enumExports: string[] = [];
  const modelExports: string[] = [];
  let generatedEnumCount = 0;
  let generatedModelCount = 0;

  for (const enumEntity of context.enums) {
    const firstMember = enumEntity.members[0]?.name;
    if (!firstMember) {
      continue;
    }

    const uiFileBase = getAdapterFileBase(enumEntity.localName);
    const dtoFileBase = enumEntity.sourceFileBase;
    const uiFileName = `${uiFileBase}.adapter.ts`;
    const dtoFileName = `${dtoFileBase}.adapter.ts`;
    const uiAdapterName = getUiAdapterName(enumEntity.localName);
    const dtoAdapterName = getDtoAdapterName(enumEntity.swaggerName);

    const uiLines: string[] = [
      `import { ${enumEntity.swaggerName} } from '../../../swagger/models/${enumEntity.sourceFileBase}';`,
      `import { ${enumEntity.localName} } from '../../enums/${getEnumFileBase(enumEntity.localName)}.enum';`,
      '',
      `export const ${uiAdapterName} = (source?: ${enumEntity.swaggerName} | null): ${enumEntity.localName} => {`,
      '  switch (source) {'
    ];

    for (const member of enumEntity.members) {
      uiLines.push(
        `    case ${enumEntity.swaggerName}.${member.name}:`,
        `      return ${enumEntity.localName}.${member.name};`
      );
    }
    uiLines.push(
      '    default:',
      `      throw new Error(\`Enum value is not defined: ${enumEntity.swaggerName}=\${String(source)}\`);`,
      '  }',
      '}'
    );
    enumFiles.set(uiFileName, `${uiLines.join('\n')}\n`);
    enumExports.push(`./${uiFileBase}.adapter`);

    const dtoLines: string[] = [
      `import { ${enumEntity.localName} } from '../../enums/${getEnumFileBase(enumEntity.localName)}.enum';`,
      `import { ${enumEntity.swaggerName} } from '../../../swagger/models/${enumEntity.sourceFileBase}';`,
      '',
      `export const ${dtoAdapterName} = (source?: ${enumEntity.localName} | null): ${enumEntity.swaggerName} => {`,
      '  switch (source) {'
    ];
    for (const member of enumEntity.members) {
      dtoLines.push(
        `    case ${enumEntity.localName}.${member.name}:`,
        `      return ${enumEntity.swaggerName}.${member.name};`
      );
    }
    dtoLines.push(
      '    default:',
      `      throw new Error(\`Enum value is not defined: ${enumEntity.localName}=\${String(source)}\`);`,
      '  }',
      '}'
    );
    enumFiles.set(dtoFileName, `${dtoLines.join('\n')}\n`);
    enumExports.push(`./${dtoFileBase}.adapter`);

    generatedEnumCount += 2;
  }

  for (const typeEntity of context.types) {
    if (isExcludedMarketJsonResult(typeEntity.swaggerName)) {
      continue;
    }

    const uiFileBase = getAdapterFileBase(typeEntity.localName);
    const dtoFileBase = typeEntity.sourceFileBase;
    const uiFileName = `${uiFileBase}.adapter.ts`;
    const dtoFileName = `${dtoFileBase}.adapter.ts`;
    const uiAdapterName = getUiAdapterName(typeEntity.localName);
    const dtoAdapterName = getDtoAdapterName(typeEntity.swaggerName);

    const uiLines: string[] = [
      `import { ${typeEntity.swaggerName} } from '../../../swagger/models/${typeEntity.sourceFileBase}';`,
      `import { ${typeEntity.localName} } from '../../models/${getModelFileBase(typeEntity.localName)}.interface';`,
      '',
      `export const ${uiAdapterName} = (source?: ${typeEntity.swaggerName} | null): ${typeEntity.localName} => {`,
      `  return (source ?? {}) as ${typeEntity.localName};`,
      '}'
    ];
    modelFiles.set(uiFileName, `${uiLines.join('\n')}\n`);
    modelExports.push(`./${uiFileBase}.adapter`);

    const dtoLines: string[] = [
      `import { ${typeEntity.localName} } from '../../models/${getModelFileBase(typeEntity.localName)}.interface';`,
      `import { ${typeEntity.swaggerName} } from '../../../swagger/models/${typeEntity.sourceFileBase}';`,
      '',
      `export const ${dtoAdapterName} = (source?: ${typeEntity.localName} | null): ${typeEntity.swaggerName} => {`,
      `  return (source ?? {}) as ${typeEntity.swaggerName};`,
      '}'
    ];
    modelFiles.set(dtoFileName, `${dtoLines.join('\n')}\n`);
    modelExports.push(`./${dtoFileBase}.adapter`);

    generatedModelCount += 2;
  }

  for (const interfaceEntity of context.interfaces) {
    if (isExcludedMarketJsonResult(interfaceEntity.swaggerName)) {
      continue;
    }

    const uiFileBase = getAdapterFileBase(interfaceEntity.localName);
    const dtoFileBase = interfaceEntity.sourceFileBase;
    const uiFileName = `${uiFileBase}.adapter.ts`;
    const dtoFileName = `${dtoFileBase}.adapter.ts`;
    const uiAdapterName = getUiAdapterName(interfaceEntity.localName);
    const dtoAdapterName = getDtoAdapterName(interfaceEntity.swaggerName);

    const uiAdapterImports = new Map<string, string>();
    const dtoAdapterImports = new Map<string, string>();
    const uiPropertyLines: string[] = [];
    const dtoPropertyLines: string[] = [];

    for (const property of interfaceEntity.properties) {
      const analysis = analyzePropertyType(property.typeText, context);
      const dtoSourceAccessor = getSourceAccessor(property.name);
      const uiPropertyName = toCamelCaseProperty(property.name);
      const uiSourceAccessor = getSourceAccessor(uiPropertyName);
      const dtoPropertyName = getTargetPropertyName(property.name);
      const isOptionalProperty = property.optional;

      let toUiExpression: string;
      let toDtoExpression: string;

      if (
        analysis.kind === 'array-entity' &&
        analysis.entity &&
        !isExcludedMarketJsonResult(analysis.entity.swaggerName)
      ) {
        const nestedUiAdapterName = getUiAdapterName(analysis.entity.localName);
        const nestedDtoAdapterName = getDtoAdapterName(analysis.entity.swaggerName);
        if (analysis.entity.localName !== interfaceEntity.localName) {
          uiAdapterImports.set(
            nestedUiAdapterName,
            `import { ${nestedUiAdapterName} } from '${getNestedAdapterPath(analysis.entity, 'ui')}';`
          );
          dtoAdapterImports.set(
            nestedDtoAdapterName,
            `import { ${nestedDtoAdapterName} } from '${getNestedAdapterPath(analysis.entity, 'dto')}';`
          );
        }
        if (isOptionalProperty) {
          toUiExpression = `${dtoSourceAccessor}?.map((item) => ${nestedUiAdapterName}(item))`;
          toDtoExpression = `${uiSourceAccessor}?.map((item) => ${nestedDtoAdapterName}(item))`;
        } else {
          toUiExpression = `(${dtoSourceAccessor} ?? []).map((item) => ${nestedUiAdapterName}(item))`;
          toDtoExpression = `(${uiSourceAccessor} ?? []).map((item) => ${nestedDtoAdapterName}(item))`;
        }
      } else if (
        analysis.kind === 'entity' &&
        analysis.entity &&
        !isExcludedMarketJsonResult(analysis.entity.swaggerName)
      ) {
        const nestedUiAdapterName = getUiAdapterName(analysis.entity.localName);
        const nestedDtoAdapterName = getDtoAdapterName(analysis.entity.swaggerName);
        if (analysis.entity.localName !== interfaceEntity.localName) {
          uiAdapterImports.set(
            nestedUiAdapterName,
            `import { ${nestedUiAdapterName} } from '${getNestedAdapterPath(analysis.entity, 'ui')}';`
          );
          dtoAdapterImports.set(
            nestedDtoAdapterName,
            `import { ${nestedDtoAdapterName} } from '${getNestedAdapterPath(analysis.entity, 'dto')}';`
          );
        }
        if (isOptionalProperty) {
          toUiExpression = `${dtoSourceAccessor} === null ? undefined : ${nestedUiAdapterName}(${dtoSourceAccessor})`;
          toDtoExpression = `${uiSourceAccessor} === null ? undefined : ${nestedDtoAdapterName}(${uiSourceAccessor})`;
        } else {
          toUiExpression = `${nestedUiAdapterName}(${dtoSourceAccessor})`;
          toDtoExpression = `${nestedDtoAdapterName}(${uiSourceAccessor})`;
        }
      } else if (analysis.kind === 'array-primitive') {
        if (isOptionalProperty) {
          toUiExpression = dtoSourceAccessor;
          toDtoExpression = uiSourceAccessor;
        } else {
          toUiExpression = `${dtoSourceAccessor} ?? []`;
          toDtoExpression = `${uiSourceAccessor} ?? []`;
        }
      } else if (analysis.kind === 'primitive') {
        toUiExpression = isOptionalProperty
          ? dtoSourceAccessor
          : getPrimitiveUiExpression(dtoSourceAccessor, analysis.uiType);
        toDtoExpression = uiSourceAccessor;
      } else {
        toUiExpression = isOptionalProperty
          ? `${dtoSourceAccessor} as any`
          : `(${dtoSourceAccessor} ?? null) as any`;
        toDtoExpression = `${uiSourceAccessor} as any`;
      }

      uiPropertyLines.push(`    ${uiPropertyName}: ${toUiExpression},`);
      dtoPropertyLines.push(`    ${dtoPropertyName}: ${toDtoExpression},`);
    }

    const uiImportLines = [
      `import { ${interfaceEntity.swaggerName} } from '../../../swagger/models/${interfaceEntity.sourceFileBase}';`,
      `import { ${interfaceEntity.localName} } from '../../models/${getModelFileBase(interfaceEntity.localName)}.interface';`,
      ...[...uiAdapterImports.values()].sort((left, right) => left.localeCompare(right))
    ];
    const uiLines: string[] = [...uiImportLines, ''];
    uiLines.push(
      `export const ${uiAdapterName} = (source?: ${interfaceEntity.swaggerName} | null): ${interfaceEntity.localName} => {`,
      '  return {',
      ...uiPropertyLines,
      '  };',
      '}'
    );
    modelFiles.set(uiFileName, `${uiLines.join('\n')}\n`);
    modelExports.push(`./${uiFileBase}.adapter`);

    const dtoImportLines = [
      `import { ${interfaceEntity.localName} } from '../../models/${getModelFileBase(interfaceEntity.localName)}.interface';`,
      `import { ${interfaceEntity.swaggerName} } from '../../../swagger/models/${interfaceEntity.sourceFileBase}';`,
      ...[...dtoAdapterImports.values()].sort((left, right) => left.localeCompare(right))
    ];
    const dtoLines: string[] = [...dtoImportLines, ''];
    dtoLines.push(
      `export const ${dtoAdapterName} = (source?: ${interfaceEntity.localName} | null): ${interfaceEntity.swaggerName} => {`,
      '  return {',
      ...dtoPropertyLines,
      '  };',
      '}'
    );
    modelFiles.set(dtoFileName, `${dtoLines.join('\n')}\n`);
    modelExports.push(`./${dtoFileBase}.adapter`);

    generatedModelCount += 2;
  }

  enumExports.sort((left, right) => left.localeCompare(right));
  modelExports.sort((left, right) => left.localeCompare(right));
  enumFiles.set('index.ts', buildIndexContent(enumExports));
  modelFiles.set('index.ts', buildIndexContent(modelExports));

  await writeManagedDirectory(
    UI_ADAPTERS_ENUMS_DIR,
    enumFiles,
    (fileName) => fileName.endsWith('.adapter.ts') || fileName === 'index.ts'
  );

  await writeManagedDirectory(
    UI_ADAPTERS_MODELS_DIR,
    modelFiles,
    (fileName) => fileName.endsWith('.adapter.ts') || fileName === 'index.ts'
  );

  await fs.rm(path.join(UI_ADAPTERS_DIR, 'toUI'), { recursive: true, force: true });
  await fs.rm(path.join(UI_ADAPTERS_DIR, 'toDto'), { recursive: true, force: true });

  await writeManagedDirectory(
    UI_ADAPTERS_DIR,
    new Map([['index.ts', "export * from './enums';\nexport * from './models';\n"]]),
    (fileName) => fileName === 'index.ts'
  );

  console.log(`Enum adapters generated: ${generatedEnumCount}`);
  console.log(`Output: ${path.relative(process.cwd(), UI_ADAPTERS_ENUMS_DIR)}`);
  console.log(`Model adapters generated: ${generatedModelCount}`);
  console.log(`Output: ${path.relative(process.cwd(), UI_ADAPTERS_MODELS_DIR)}`);
}

generateAdapters().catch((error) => {
  console.error(error);
  process.exit(1);
});

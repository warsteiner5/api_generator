import path from 'node:path';
import {
  buildIndexContent,
  collectEntitiesContext,
  extractReferencedLocalEntities,
  LocalEntityMeta,
  getEnumFileBase,
  getModelFileBase,
  isExcludedMarketJsonResult,
  normalizeTypeText,
  toCamelCaseProperty,
  UI_MODELS_DIR,
  writeManagedDirectory
} from './shared';

function addEntityImport(
  imports: Map<string, string>,
  entity: LocalEntityMeta,
  selfLocalName: string
): void {
  if (isExcludedMarketJsonResult(entity.swaggerName)) {
    return;
  }

  if (entity.localName === selfLocalName) {
    return;
  }

  if (entity.kind === 'enum') {
    const importPath = `../enums/${getEnumFileBase(entity.localName)}.enum`;
    imports.set(entity.localName, `import { ${entity.localName} } from '${importPath}';`);
    return;
  }

  const importPath = `./${getModelFileBase(entity.localName)}.interface`;
  imports.set(entity.localName, `import { ${entity.localName} } from '${importPath}';`);
}

async function generateModels(): Promise<void> {
  const context = await collectEntitiesContext();
  const files = new Map<string, string>();
  const exportsForIndex: string[] = [];
  let generatedCount = 0;

  for (const interfaceEntity of context.interfaces) {
    if (isExcludedMarketJsonResult(interfaceEntity.swaggerName)) {
      continue;
    }

    const fileBase = getModelFileBase(interfaceEntity.localName);
    const fileName = `${fileBase}.interface.ts`;
    const imports = new Map<string, string>();
    const propertyLines: string[] = [];

    for (const property of interfaceEntity.properties) {
      const propertyType = normalizeTypeText(property.typeText, context.bySwaggerName);
      const propertyName = toCamelCaseProperty(property.name);
      const referencedEntities = extractReferencedLocalEntities(propertyType, context.byLocalName);

      for (const referencedEntity of referencedEntities) {
        addEntityImport(imports, referencedEntity, interfaceEntity.localName);
      }

      propertyLines.push(`  ${propertyName}: ${propertyType};`);
    }

    const importLines = [...imports.values()].sort((left, right) => left.localeCompare(right));
    const contentLines: string[] = [];

    if (importLines.length) {
      contentLines.push(...importLines, '');
    }

    contentLines.push(`export interface ${interfaceEntity.localName} {`);
    if (propertyLines.length) {
      contentLines.push(...propertyLines);
    }
    contentLines.push('}');

    files.set(fileName, `${contentLines.join('\n')}\n`);
    exportsForIndex.push(`./${fileBase}.interface`);
    generatedCount += 1;
  }

  for (const typeEntity of context.types) {
    if (isExcludedMarketJsonResult(typeEntity.swaggerName)) {
      continue;
    }

    const fileBase = getModelFileBase(typeEntity.localName);
    const fileName = `${fileBase}.interface.ts`;
    const imports = new Map<string, string>();
    const normalizedType = normalizeTypeText(typeEntity.typeText, context.bySwaggerName);
    const referencedEntities = extractReferencedLocalEntities(normalizedType, context.byLocalName);

    for (const referencedEntity of referencedEntities) {
      addEntityImport(imports, referencedEntity, typeEntity.localName);
    }

    const importLines = [...imports.values()].sort((left, right) => left.localeCompare(right));
    const contentLines: string[] = [];
    if (importLines.length) {
      contentLines.push(...importLines, '');
    }
    contentLines.push(`export type ${typeEntity.localName} = ${normalizedType};`);

    files.set(fileName, `${contentLines.join('\n')}\n`);
    exportsForIndex.push(`./${fileBase}.interface`);
    generatedCount += 1;
  }

  exportsForIndex.sort((left, right) => left.localeCompare(right));
  files.set('index.ts', buildIndexContent(exportsForIndex));

  await writeManagedDirectory(
    UI_MODELS_DIR,
    files,
    (fileName) => fileName.endsWith('.interface.ts') || fileName === 'index.ts'
  );

  console.log(`Models generated: ${generatedCount}`);
  console.log(`Output: ${path.relative(process.cwd(), UI_MODELS_DIR)}`);
}

generateModels().catch((error) => {
  console.error(error);
  process.exit(1);
});

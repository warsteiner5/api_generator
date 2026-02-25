import path from 'node:path';
import {
  buildIndexContent,
  collectEntitiesContext,
  extractReferencedLocalEntities,
  InterfaceEntityMeta,
  LocalEntityMeta,
  getEnumFileBase,
  getModelFileBase,
  isExcludedMarketJsonResult,
  normalizeTypeText,
  splitTopLevel,
  toCamelCaseProperty,
  UI_MODELS_DIR,
  writeManagedDirectory
} from './shared';

const MARKET_PAGINATION_RESULT_GENERIC_NAME = 'MarketPaginationResult';
const MARKET_PAGINATION_RESULT_GENERIC_FILE_BASE = 'market-pagination-result';

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

function getStandardMarketPaginationItemsType(interfaceEntity: InterfaceEntityMeta): string | undefined {
  if (!interfaceEntity.localName.startsWith('MarketPaginationResultOf')) {
    return undefined;
  }

  const itemsProperty = interfaceEntity.properties.find((property) => property.name === 'items');
  if (!itemsProperty) {
    return undefined;
  }

  const standardFieldNames = new Set(['currentPage', 'items', 'total', 'totalPages']);
  const entityFieldNames = new Set(interfaceEntity.properties.map((property) => property.name));

  for (const requiredFieldName of standardFieldNames) {
    if (!entityFieldNames.has(requiredFieldName)) {
      return undefined;
    }
  }

  if (interfaceEntity.properties.some((property) => !standardFieldNames.has(property.name))) {
    return undefined;
  }

  return itemsProperty.typeText;
}

async function generateModels(): Promise<void> {
  const context = await collectEntitiesContext();
  const files = new Map<string, string>();
  const exportsForIndex: string[] = [];
  let generatedCount = 0;

  files.set(
    `${MARKET_PAGINATION_RESULT_GENERIC_FILE_BASE}.interface.ts`,
    [
      '// @ts-ignore',
      `export interface ${MARKET_PAGINATION_RESULT_GENERIC_NAME}<TItems> {`,
      '  currentPage: number;',
      '  items: TItems;',
      '  total: number;',
      '  totalPages: number;',
      '}',
      ''
    ].join('\n')
  );
  exportsForIndex.push(`./${MARKET_PAGINATION_RESULT_GENERIC_FILE_BASE}.interface`);

  for (const interfaceEntity of context.interfaces) {
    if (isExcludedMarketJsonResult(interfaceEntity.swaggerName)) {
      continue;
    }

    const fileBase = getModelFileBase(interfaceEntity.localName);
    const fileName = `${fileBase}.interface.ts`;
    const imports = new Map<string, string>();
    const propertyLines: string[] = [];
    const standardMarketPaginationItemsType = getStandardMarketPaginationItemsType(interfaceEntity);

    if (standardMarketPaginationItemsType) {
      const normalizedItemsType = normalizeTypeText(standardMarketPaginationItemsType, context.bySwaggerName);
      imports.set(
        MARKET_PAGINATION_RESULT_GENERIC_NAME,
        `import { ${MARKET_PAGINATION_RESULT_GENERIC_NAME} } from './${MARKET_PAGINATION_RESULT_GENERIC_FILE_BASE}.interface';`
      );

      const referencedEntities = extractReferencedLocalEntities(normalizedItemsType, context.byLocalName);
      for (const referencedEntity of referencedEntities) {
        addEntityImport(imports, referencedEntity, interfaceEntity.localName);
      }

      const importLines = [...imports.values()].sort((left, right) => left.localeCompare(right));
      const contentLines: string[] = [];
      if (importLines.length) {
        contentLines.push(...importLines, '');
      }
      contentLines.push('// @ts-ignore');
      contentLines.push(
        `export type ${interfaceEntity.localName} = ${MARKET_PAGINATION_RESULT_GENERIC_NAME}<${normalizedItemsType}>;`
      );

      files.set(fileName, `${contentLines.join('\n')}\n`);
      exportsForIndex.push(`./${fileBase}.interface`);
      generatedCount += 1;
      continue;
    }

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

    contentLines.push('// @ts-ignore');
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
    const intersectionParts = splitTopLevel(normalizedType, '&')
      .map((part) => part.trim())
      .filter(Boolean);

    const isObjectLiteral = (value: string) => value.startsWith('{') && value.endsWith('}');
    const literalParts = intersectionParts.filter(isObjectLiteral);
    const extendsParts = intersectionParts.filter((part) => !isObjectLiteral(part));

    const propertyLines: string[] = [];
    for (const literalPart of literalParts) {
      const literalContent = literalPart.slice(1, -1).trim();
      if (!literalContent) {
        continue;
      }
      for (const fragment of splitTopLevel(literalContent, ';')) {
        const trimmed = fragment.trim();
        if (!trimmed) {
          continue;
        }

        const colonParts = splitTopLevel(trimmed, ':');
        if (colonParts.length < 2) {
          continue;
        }

        const rawName = colonParts[0].trim();
        const rawType = colonParts.slice(1).join(':').trim();
        const nameMatch = rawName.match(/^['"]?([^'"]+)['"]?\??$/);
        const propertyName = toCamelCaseProperty(nameMatch?.[1] ?? rawName);
        if (!propertyName) {
          continue;
        }

        const normalizedPropertyType = normalizeTypeText(rawType, context.bySwaggerName);
        propertyLines.push(`  ${propertyName}: ${normalizedPropertyType};`);
      }
    }

    const extendsClause = extendsParts.length ? ` extends ${extendsParts.join(', ')}` : '';
    contentLines.push('// @ts-ignore');
    contentLines.push(`export interface ${typeEntity.localName}${extendsClause} {`);
    if (propertyLines.length) {
      contentLines.push(...propertyLines);
    }
    contentLines.push('}');

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

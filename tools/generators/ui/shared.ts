import { promises as fs } from 'node:fs';
import path from 'node:path';
import { Project } from 'ts-morph';

export const SWAGGER_MODELS_GLOB = 'src/app/api/swagger/models/*.ts';
export const UI_BASE_DIR = path.resolve('src/app/api/ui');
export const UI_ENUMS_DIR = path.join(UI_BASE_DIR, 'enums');
export const UI_MODELS_DIR = path.join(UI_BASE_DIR, 'models');
export const UI_ADAPTERS_DIR = path.join(UI_BASE_DIR, 'adapters');
export const UI_ADAPTERS_TO_UI_DIR = path.join(UI_ADAPTERS_DIR, 'toUI');
export const UI_ADAPTERS_TO_DTO_DIR = path.join(UI_ADAPTERS_DIR, 'toDto');

export type EntityKind = 'enum' | 'interface' | 'type';

export interface EnumMemberMeta {
  name: string;
  initializer?: string;
}

export interface EnumEntityMeta {
  kind: 'enum';
  swaggerName: string;
  localName: string;
  sourceFileBase: string;
  members: EnumMemberMeta[];
}

export interface InterfacePropertyMeta {
  name: string;
  typeText: string;
}

export interface InterfaceEntityMeta {
  kind: 'interface';
  swaggerName: string;
  localName: string;
  sourceFileBase: string;
  properties: InterfacePropertyMeta[];
}

export interface TypeEntityMeta {
  kind: 'type';
  swaggerName: string;
  localName: string;
  sourceFileBase: string;
  typeText: string;
}

export type LocalEntityMeta = EnumEntityMeta | InterfaceEntityMeta | TypeEntityMeta;

export interface EntitiesContext {
  enums: EnumEntityMeta[];
  interfaces: InterfaceEntityMeta[];
  types: TypeEntityMeta[];
  all: LocalEntityMeta[];
  bySwaggerName: Map<string, LocalEntityMeta>;
  byLocalName: Map<string, LocalEntityMeta>;
}

const PRIMITIVE_TYPES = new Set([
  'string',
  'number',
  'boolean',
  'any',
  'unknown',
  'object',
  'void',
  'never',
  'null',
  'undefined',
  'Date',
  'File',
  'Blob',
  'Uint8Array',
  'bigint',
  'symbol'
]);

export function toLocalEntityName(swaggerName: string): string {
  let result = swaggerName;
  if (result.startsWith('Api') || result.startsWith('API')) {
    result = result.slice(3);
  }
  if (result.endsWith('Dto')) {
    result = result.slice(0, -3);
  }
  return result;
}

export function toKebabCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
    .replace(/([0-9])([a-zA-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
}

export function getEnumFileBase(localName: string): string {
  const baseName = localName.endsWith('Enum') ? localName.slice(0, -4) : localName;
  return toKebabCase(baseName);
}

export function getModelFileBase(localName: string): string {
  return toKebabCase(localName);
}

export function getAdapterFileBase(localName: string): string {
  return toKebabCase(localName);
}

export function toCamelCaseProperty(name: string): string {
  if (!name) {
    return name;
  }

  if (name.includes('_')) {
    const parts = name.split('_').filter(Boolean);
    if (!parts.length) {
      return name;
    }
    const [head, ...tail] = parts;
    return (
      head.toLowerCase() +
      tail.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join('')
    );
  }

  return name
    .replace(/^[A-Z]+(?=[A-Z][a-z0-9]|$)/, (match) => match.toLowerCase())
    .replace(/^[A-Z]/, (match) => match.toLowerCase());
}

export function splitTopLevel(text: string, separator: string): string[] {
  const parts: string[] = [];
  let start = 0;
  let angle = 0;
  let round = 0;
  let square = 0;
  let curly = 0;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === '<') {
      angle += 1;
    } else if (char === '>') {
      angle = Math.max(0, angle - 1);
    } else if (char === '(') {
      round += 1;
    } else if (char === ')') {
      round = Math.max(0, round - 1);
    } else if (char === '[') {
      square += 1;
    } else if (char === ']') {
      square = Math.max(0, square - 1);
    } else if (char === '{') {
      curly += 1;
    } else if (char === '}') {
      curly = Math.max(0, curly - 1);
    }

    if (
      char === separator &&
      angle === 0 &&
      round === 0 &&
      square === 0 &&
      curly === 0
    ) {
      parts.push(text.slice(start, index));
      start = index + 1;
    }
  }

  parts.push(text.slice(start));
  return parts;
}

function findMatchingAngleBracket(text: string, openIndex: number): number {
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

function stripOuterParentheses(text: string): string {
  let value = text.trim();
  while (value.startsWith('(') && value.endsWith(')')) {
    let depth = 0;
    let wrapsWhole = true;
    for (let index = 0; index < value.length; index += 1) {
      const char = value[index];
      if (char === '(') {
        depth += 1;
      } else if (char === ')') {
        depth -= 1;
        if (depth === 0 && index < value.length - 1) {
          wrapsWhole = false;
          break;
        }
      }
    }
    if (!wrapsWhole) {
      break;
    }
    value = value.slice(1, -1).trim();
  }
  return value;
}

function parseGeneric(text: string): { name: string; args: string } | null {
  const value = stripOuterParentheses(text);
  const openIndex = value.indexOf('<');
  if (openIndex <= 0) {
    return null;
  }
  const closeIndex = findMatchingAngleBracket(value, openIndex);
  if (closeIndex !== value.length - 1) {
    return null;
  }
  return {
    name: value.slice(0, openIndex).trim(),
    args: value.slice(openIndex + 1, closeIndex).trim()
  };
}

function parseArrayInner(text: string): string | null {
  const value = stripOuterParentheses(text);
  if (value.endsWith('[]')) {
    return value.slice(0, -2).trim();
  }

  const generic = parseGeneric(value);
  if (generic && (generic.name === 'Array' || generic.name === 'ReadonlyArray')) {
    return generic.args;
  }

  return null;
}

function mapSwaggerToken(token: string, bySwaggerName: Map<string, LocalEntityMeta>): string {
  const entity = bySwaggerName.get(token);
  return entity ? entity.localName : token;
}

function normalizeNonUnionType(
  typeText: string,
  bySwaggerName: Map<string, LocalEntityMeta>
): string {
  const value = stripOuterParentheses(typeText);
  const arrayInner = parseArrayInner(value);
  if (arrayInner !== null) {
    return `${normalizeTypeText(arrayInner, bySwaggerName)}[]`;
  }

  if (value.startsWith('[') && value.endsWith(']')) {
    const inner = value.slice(1, -1);
    const tupleItems = splitTopLevel(inner, ',')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => normalizeTypeText(part, bySwaggerName));
    return `[${tupleItems.join(', ')}]`;
  }

  const generic = parseGeneric(value);
  if (generic) {
    const normalizedName = mapSwaggerToken(generic.name, bySwaggerName);
    const normalizedArgs = splitTopLevel(generic.args, ',')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => normalizeTypeText(part, bySwaggerName));
    return `${normalizedName}<${normalizedArgs.join(', ')}>`;
  }

  return value.replace(/\b[A-Za-z_][A-Za-z0-9_]*\b/g, (token) =>
    mapSwaggerToken(token, bySwaggerName)
  );
}

export function normalizeTypeText(
  rawTypeText: string,
  bySwaggerName: Map<string, LocalEntityMeta>,
  options?: { stripNullish?: boolean }
): string {
  const stripNullish = options?.stripNullish ?? true;
  const collapsed = rawTypeText.replace(/\s+/g, ' ').trim();
  if (!collapsed) {
    return 'unknown';
  }

  const unionParts = splitTopLevel(collapsed, '|').map((part) => part.trim());
  if (unionParts.length > 1) {
    const candidateParts = stripNullish
      ? unionParts.filter((part) => part !== 'null' && part !== 'undefined')
      : unionParts;

    const normalizedParts = candidateParts
      .map((part) => normalizeNonUnionType(part, bySwaggerName))
      .filter(Boolean);
    const uniqueParts = [...new Set(normalizedParts)];
    if (!uniqueParts.length) {
      return 'never';
    }
    return uniqueParts.join(' | ');
  }

  return normalizeNonUnionType(collapsed, bySwaggerName);
}

export function extractReferencedLocalEntities(
  typeText: string,
  byLocalName: Map<string, LocalEntityMeta>
): LocalEntityMeta[] {
  const result = new Map<string, LocalEntityMeta>();
  const tokenRegex = /\b[A-Za-z_][A-Za-z0-9_]*\b/g;
  let match = tokenRegex.exec(typeText);
  while (match) {
    const token = match[0];
    const entity = byLocalName.get(token);
    if (entity) {
      result.set(entity.localName, entity);
    }
    match = tokenRegex.exec(typeText);
  }

  return [...result.values()].sort((left, right) =>
    left.localName.localeCompare(right.localName)
  );
}

export interface PropertyTypeAnalysis {
  kind: 'primitive' | 'entity' | 'array-primitive' | 'array-entity' | 'complex';
  uiType: string;
  entity?: LocalEntityMeta;
}

function isSimpleIdentifier(text: string): boolean {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(text);
}

function isPrimitiveType(text: string): boolean {
  return PRIMITIVE_TYPES.has(text);
}

export function analyzePropertyType(
  rawTypeText: string,
  context: Pick<EntitiesContext, 'bySwaggerName' | 'byLocalName'>
): PropertyTypeAnalysis {
  const uiType = normalizeTypeText(rawTypeText, context.bySwaggerName);
  const collapsed = rawTypeText.replace(/\s+/g, ' ').trim();
  const unionParts = splitTopLevel(collapsed, '|')
    .map((part) => stripOuterParentheses(part.trim()))
    .filter(Boolean)
    .filter((part) => part !== 'null' && part !== 'undefined');

  if (unionParts.length !== 1) {
    return { kind: 'complex', uiType };
  }

  const single = unionParts[0];
  const arrayInner = parseArrayInner(single);
  if (arrayInner !== null) {
    const inner = stripOuterParentheses(arrayInner);
    if (isSimpleIdentifier(inner)) {
      const entity = context.bySwaggerName.get(inner) ?? context.byLocalName.get(inner);
      if (entity) {
        return { kind: 'array-entity', uiType, entity };
      }
      if (isPrimitiveType(inner)) {
        return { kind: 'array-primitive', uiType };
      }
    }
    return { kind: 'complex', uiType };
  }

  if (isSimpleIdentifier(single)) {
    const entity = context.bySwaggerName.get(single) ?? context.byLocalName.get(single);
    if (entity) {
      return { kind: 'entity', uiType, entity };
    }
    if (isPrimitiveType(single)) {
      return { kind: 'primitive', uiType };
    }
  }

  return { kind: 'complex', uiType };
}

export async function collectEntitiesContext(): Promise<EntitiesContext> {
  const project = new Project({
    skipAddingFilesFromTsConfig: true
  });
  project.addSourceFilesAtPaths(SWAGGER_MODELS_GLOB);

  const sourceFiles = project.getSourceFiles(SWAGGER_MODELS_GLOB);
  const enums: EnumEntityMeta[] = [];
  const interfaces: InterfaceEntityMeta[] = [];
  const types: TypeEntityMeta[] = [];

  for (const sourceFile of sourceFiles) {
    const sourceFileBase = path.basename(sourceFile.getFilePath(), '.ts');

    for (const enumDeclaration of sourceFile.getEnums().filter((item) => item.isExported())) {
      const swaggerName = enumDeclaration.getName();
      const localName = toLocalEntityName(swaggerName);
      enums.push({
        kind: 'enum',
        swaggerName,
        localName,
        sourceFileBase,
        members: enumDeclaration.getMembers().map((member) => ({
          name: member.getName(),
          initializer: member.getInitializer()?.getText()
        }))
      });
    }

    for (const interfaceDeclaration of sourceFile
      .getInterfaces()
      .filter((item) => item.isExported())) {
      const swaggerName = interfaceDeclaration.getName();
      const localName = toLocalEntityName(swaggerName);
      interfaces.push({
        kind: 'interface',
        swaggerName,
        localName,
        sourceFileBase,
        properties: interfaceDeclaration.getProperties().map((property) => ({
          name: property.getName(),
          typeText: property.getTypeNode()?.getText() ?? 'unknown'
        }))
      });
    }

    for (const typeAliasDeclaration of sourceFile
      .getTypeAliases()
      .filter((item) => item.isExported())) {
      const swaggerName = typeAliasDeclaration.getName();
      const localName = toLocalEntityName(swaggerName);
      types.push({
        kind: 'type',
        swaggerName,
        localName,
        sourceFileBase,
        typeText: typeAliasDeclaration.getTypeNode()?.getText() ?? 'unknown'
      });
    }
  }

  enums.sort((left, right) => left.localName.localeCompare(right.localName));
  interfaces.sort((left, right) => left.localName.localeCompare(right.localName));
  types.sort((left, right) => left.localName.localeCompare(right.localName));

  const all: LocalEntityMeta[] = [...enums, ...interfaces, ...types];
  const bySwaggerName = new Map<string, LocalEntityMeta>();
  const byLocalName = new Map<string, LocalEntityMeta>();

  for (const entity of all) {
    bySwaggerName.set(entity.swaggerName, entity);
    byLocalName.set(entity.localName, entity);
  }

  return {
    enums,
    interfaces,
    types,
    all,
    bySwaggerName,
    byLocalName
  };
}

export async function writeManagedDirectory(
  directoryPath: string,
  files: Map<string, string>,
  isManagedFile: (fileName: string) => boolean
): Promise<void> {
  await fs.mkdir(directoryPath, { recursive: true });
  const existingEntries = await fs.readdir(directoryPath, { withFileTypes: true });
  const expectedNames = new Set(files.keys());

  for (const entry of existingEntries) {
    if (!entry.isFile()) {
      continue;
    }
    if (!isManagedFile(entry.name)) {
      continue;
    }
    if (expectedNames.has(entry.name)) {
      continue;
    }
    await fs.unlink(path.join(directoryPath, entry.name));
  }

  for (const [fileName, content] of files.entries()) {
    const filePath = path.join(directoryPath, fileName);
    const normalizedContent = content.endsWith('\n') ? content : `${content}\n`;
    await fs.writeFile(filePath, normalizedContent, 'utf8');
  }
}

export function buildIndexContent(exportPaths: string[]): string {
  if (!exportPaths.length) {
    return '';
  }
  return `${exportPaths.map((value) => `export * from '${value}';`).join('\n')}\n`;
}

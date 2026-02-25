import path from 'node:path';
import { EnumDeclaration, InterfaceDeclaration, Node, Project, TypeAliasDeclaration } from 'ts-morph';
import { SWAGGER_MODELS_GLOB } from './shared';

const SWAGGER_ALL_FILES_GLOB = 'src/app/api/swagger/**/*.ts';

type ModelDeclaration = InterfaceDeclaration | TypeAliasDeclaration;
type ManagedDeclaration = EnumDeclaration | ModelDeclaration;
type ManagedKind = 'enum' | 'model';

interface RenamePlanItem {
  kind: ManagedKind;
  declaration: ManagedDeclaration;
  currentName: string;
  nextName: string;
}

export interface PrepareSwaggerModelsResult {
  totalRenamed: number;
  renamedEnums: number;
  renamedModels: number;
}

function getManagedKind(declaration: ManagedDeclaration): ManagedKind {
  return Node.isEnumDeclaration(declaration) ? 'enum' : 'model';
}

function getExpectedSuffix(declaration: ManagedDeclaration): 'Enum' | 'Dto' {
  return Node.isEnumDeclaration(declaration) ? 'Enum' : 'Dto';
}

function hasExpectedMarker(name: string, declaration: ManagedDeclaration): boolean {
  return Node.isEnumDeclaration(declaration) ? name.includes('Enum') : name.includes('Dto');
}

function collectExportedDeclarations(project: Project): ManagedDeclaration[] {
  const sourceFiles = project.getSourceFiles(SWAGGER_MODELS_GLOB);
  const declarations: ManagedDeclaration[] = [];

  for (const sourceFile of sourceFiles) {
    declarations.push(...sourceFile.getEnums().filter((item) => item.isExported()));
    declarations.push(...sourceFile.getInterfaces().filter((item) => item.isExported()));
    declarations.push(...sourceFile.getTypeAliases().filter((item) => item.isExported()));
  }

  declarations.sort((left, right) => {
    const leftName = left.getName();
    const rightName = right.getName();
    if (leftName === rightName) {
      return left.getSourceFile().getFilePath().localeCompare(right.getSourceFile().getFilePath());
    }
    return leftName.localeCompare(rightName);
  });

  return declarations;
}

function buildUniqueName(baseName: string, suffix: 'Enum' | 'Dto', reservedNames: Set<string>): string {
  const altPrefix = `${baseName}Alt`;
  const firstAltCandidate = `${altPrefix}${suffix}`;
  if (!reservedNames.has(firstAltCandidate)) {
    return firstAltCandidate;
  }

  let index = 2;
  let numberedAltCandidate = `${altPrefix}${index}${suffix}`;
  while (reservedNames.has(numberedAltCandidate)) {
    index += 1;
    numberedAltCandidate = `${altPrefix}${index}${suffix}`;
  }

  return numberedAltCandidate;
}

function buildRenamePlan(declarations: ManagedDeclaration[]): RenamePlanItem[] {
  const reservedNames = new Set(declarations.map((item) => item.getName()));
  const plan: RenamePlanItem[] = [];

  for (const declaration of declarations) {
    const currentName = declaration.getName();
    if (!currentName.startsWith('Api')) {
      continue;
    }

    const suffix = getExpectedSuffix(declaration);
    const sourceFileBase = path.basename(declaration.getSourceFile().getFilePath(), '.ts').toLowerCase();
    const hasMarker = hasExpectedMarker(currentName, declaration);
    const markerInFileBase = sourceFileBase.includes(`-${suffix.toLowerCase()}`);
    const canMigrateLegacyDirectSuffix =
      hasMarker &&
      !currentName.includes('Alt') &&
      currentName.endsWith(suffix) &&
      !markerInFileBase;

    if (hasMarker && !canMigrateLegacyDirectSuffix) {
      continue;
    }

    const baseName = hasMarker ? currentName.slice(0, -suffix.length) : currentName;
    const nextName = buildUniqueName(baseName, suffix, reservedNames);
    if (nextName === currentName) {
      continue;
    }

    plan.push({
      kind: getManagedKind(declaration),
      declaration,
      currentName,
      nextName
    });
    reservedNames.add(nextName);
  }

  return plan;
}

function collectInterfaceConversionParts(typeAlias: TypeAliasDeclaration): { extendsTypes: string[]; memberTexts: string[] } | null {
  const typeNode = typeAlias.getTypeNode();
  if (!typeNode) {
    return null;
  }

  if (Node.isTypeLiteral(typeNode)) {
    return {
      extendsTypes: [],
      memberTexts: typeNode.getMembers().map((member) => member.getText())
    };
  }

  if (!Node.isIntersectionTypeNode(typeNode)) {
    return null;
  }

  const extendsTypes: string[] = [];
  const memberTexts: string[] = [];

  for (const part of typeNode.getTypeNodes()) {
    if (Node.isTypeLiteral(part)) {
      memberTexts.push(...part.getMembers().map((member) => member.getText()));
      continue;
    }

    if (!Node.isTypeReference(part)) {
      return null;
    }

    extendsTypes.push(part.getText());
  }

  if (!memberTexts.length) {
    return null;
  }

  return { extendsTypes, memberTexts };
}

function replaceTypeAliasWithInterface(typeAlias: TypeAliasDeclaration, extendsTypes: string[], memberTexts: string[]): void {
  const exportPrefix = typeAlias.isExported() ? 'export ' : '';
  const typeParams = typeAlias.getTypeParameters();
  const typeParamsText = typeParams.length ? `<${typeParams.map((param) => param.getText()).join(', ')}>` : '';
  const extendsText = extendsTypes.length ? ` extends ${extendsTypes.join(', ')}` : '';
  const membersText = memberTexts.map((member) => `${member}\n`).join('');
  const docsText = typeAlias.getJsDocs().map((doc) => `${doc.getText()}\n`).join('');

  typeAlias.replaceWithText(`${docsText}${exportPrefix}interface ${typeAlias.getName()}${typeParamsText}${extendsText} {\n${membersText}}`);
}

function convertEligibleTypeAliasesToInterfaces(project: Project): number {
  let converted = 0;

  for (const sourceFile of project.getSourceFiles(SWAGGER_MODELS_GLOB)) {
    for (const typeAlias of sourceFile.getTypeAliases().filter((item) => item.isExported())) {
      const conversionParts = collectInterfaceConversionParts(typeAlias);
      if (!conversionParts) {
        continue;
      }

      replaceTypeAliasWithInterface(typeAlias, conversionParts.extendsTypes, conversionParts.memberTexts);
      converted += 1;
    }
  }

  return converted;
}

export async function prepareSwaggerModels(): Promise<PrepareSwaggerModelsResult> {
  const project = new Project({
    skipAddingFilesFromTsConfig: true
  });
  project.addSourceFilesAtPaths(SWAGGER_ALL_FILES_GLOB);

  const declarations = collectExportedDeclarations(project);
  const renamePlan = buildRenamePlan(declarations);

  if (!renamePlan.length) {
    return {
      totalRenamed: 0,
      renamedEnums: 0,
      renamedModels: 0
    };
  }

  let renamedEnums = 0;
  let renamedModels = 0;

  for (const item of renamePlan) {
    item.declaration.rename(item.nextName, {
      renameInComments: false,
      renameInStrings: false
    });

    if (item.kind === 'enum') {
      renamedEnums += 1;
    } else {
      renamedModels += 1;
    }
  }

  convertEligibleTypeAliasesToInterfaces(project);
  await project.save();

  return {
    totalRenamed: renamePlan.length,
    renamedEnums,
    renamedModels
  };
}

async function run(): Promise<void> {
  const result = await prepareSwaggerModels();
  console.log(`Swagger models prepared: ${result.totalRenamed}`);
  console.log(`Enums renamed: ${result.renamedEnums}`);
  console.log(`Models renamed: ${result.renamedModels}`);
  console.log(`Scope: ${path.relative(process.cwd(), path.resolve('src/app/api/swagger'))}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

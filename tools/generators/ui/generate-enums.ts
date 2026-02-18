import path from 'node:path';
import {
  buildIndexContent,
  collectEntitiesContext,
  getEnumFileBase,
  UI_ENUMS_DIR,
  writeManagedDirectory
} from './shared';

async function generateEnums(): Promise<void> {
  const context = await collectEntitiesContext();
  const files = new Map<string, string>();
  const exportsForIndex: string[] = [];

  for (const enumEntity of context.enums) {
    const fileBase = getEnumFileBase(enumEntity.localName);
    const fileName = `${fileBase}.enum.ts`;
    exportsForIndex.push(`./${fileBase}.enum`);

    const members = enumEntity.members.map((member) => {
      if (member.initializer) {
        return `  ${member.name} = ${member.initializer},`;
      }
      return `  ${member.name},`;
    });

    const content = [
      `export enum ${enumEntity.localName} {`,
      ...members,
      '}'
    ].join('\n');

    files.set(fileName, content);
  }

  exportsForIndex.sort((left, right) => left.localeCompare(right));
  files.set('index.ts', buildIndexContent(exportsForIndex));

  await writeManagedDirectory(
    UI_ENUMS_DIR,
    files,
    (fileName) => fileName.endsWith('.enum.ts') || fileName === 'index.ts'
  );

  console.log(`Enums generated: ${context.enums.length}`);
  console.log(`Output: ${path.relative(process.cwd(), UI_ENUMS_DIR)}`);
}

generateEnums().catch((error) => {
  console.error(error);
  process.exit(1);
});

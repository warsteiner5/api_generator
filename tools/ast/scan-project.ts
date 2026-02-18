import { Project, SyntaxKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.app.json'
});

const sourceFiles = project.getSourceFiles('src/**/*.ts');
const classesCount = sourceFiles.reduce((count, file) => count + file.getClasses().length, 0);
const decoratedClasses = sourceFiles
  .flatMap((file) => file.getClasses())
  .filter((cls) => cls.getDecorators().some((dec) => dec.getKind() === SyntaxKind.Decorator));

console.log('AST scan complete');
console.log(`TypeScript files: ${sourceFiles.length}`);
console.log(`Classes: ${classesCount}`);
console.log(`Decorated classes: ${decoratedClasses.length}`);

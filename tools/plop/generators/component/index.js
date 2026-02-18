module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Generate a standalone Angular component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (kebab-case):'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/app/components/{{dashCase name}}',
        base: 'templates',
        templateFiles: 'templates/*'
      }
    ]
  });
};

module.exports = function (plop) {
  plop.setGenerator('feature', {
    description: 'Generate a feature folder with entry component and routing',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Feature name (kebab-case):'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/app/features/{{dashCase name}}',
        base: 'templates',
        templateFiles: 'templates/*'
      }
    ]
  });
};

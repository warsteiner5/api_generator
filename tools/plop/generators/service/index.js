module.exports = function (plop) {
  plop.setGenerator('service', {
    description: 'Generate an Angular service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Service name (kebab-case):'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/app/services/{{dashCase name}}',
        base: 'templates',
        templateFiles: 'templates/*'
      }
    ]
  });
};

const path = require('path');

module.exports = function (plop) {
  plop.load(path.resolve(__dirname, 'tools/plop/generators/component'));
  plop.load(path.resolve(__dirname, 'tools/plop/generators/service'));
  plop.load(path.resolve(__dirname, 'tools/plop/generators/feature'));
};

/* eslint-env node */

const path = require('path');

module.exports = {
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '/lib')
    ]
  }
};

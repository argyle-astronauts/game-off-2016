/* eslint-env node */

const path = require('path');

module.exports = {
  entry:  './lib/main.js',
  output: {
    filename: 'app.js',
    path:     path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '/lib')
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress:    true,
    https:       true,
    port:        3000
  }
};

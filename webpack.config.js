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
  module: {
    loaders: [
      {
        enforce: 'pre',
        test:    /\.js$/,
        loader:  'eslint-loader',
        exclude: /node_modules/
      },
      {
        test:   /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress:    true,
    port:        3000
  }
};

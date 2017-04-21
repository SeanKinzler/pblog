const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: __dirname,
    filename: './client/bundled/bundle.js'
  },
  module: {
    loaders: [
      // { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { 
        test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        } 
      }
    ]
  }
}
const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: __dirname,
    filename: './client/bundled/bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-2']
        } 
      }
    ]
  },

  node: {
    fs: "empty",
    net: 'empty',
    tls: 'empty',
  }
}
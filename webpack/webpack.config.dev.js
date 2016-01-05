var webpack = require('webpack')

module.exports = {
  entry: ['./demo/index.js'],
  output: {
    path: './demo',
    filename: 'js/bundle.js'
  },
  plugins: [
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  }, resolve: {
    alias: {
      'react-i': '../src/index.js'
    }
  }
}

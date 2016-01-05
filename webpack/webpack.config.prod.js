var webpack = require('webpack')

module.exports = {
  entry: ['./src'],
  output: {
    path: './lib',
    filename: 'index.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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

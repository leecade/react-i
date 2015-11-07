var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: ['./demo/index.js'],
  output: {
    path: './demo',
    filename: 'js/bundle.js'
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
      loader: 'babel?stage=0'
    }]
  }, resolve: {
    alias: {
      'react-i': '../src/index.js'
    }
  }
}

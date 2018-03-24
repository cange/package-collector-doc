const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const config = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map', // any 'source-map'-like devtool is possible
  devServer: {
    contentBase: config.dist,
    compress: false,
    hot: true,
    stats: 'errors-only',
    host: '192.168.178.29'
    // host: '127.0.0.1'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})

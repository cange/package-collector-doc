const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  // filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})
const config = {
  DIST_PATH: path.resolve(__dirname, 'dist')
}

module.exports = {
  entry: [
    './app/application.js'
  ],
  output: {
    path: config.DIST_PATH,
    filename: 'application.js', // string
  },
  devtool: 'source-map', // any 'source-map'-like devtool is possible
  devServer: {
    contentBase: config.DIST_PATH,
    compress: true
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        // use style-loader in development
        fallback: 'style-loader'
      })
    }]  },
    plugins: [
      extractSass
    ]
  }

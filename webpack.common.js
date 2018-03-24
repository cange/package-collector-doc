const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./webpack.config.js')

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  // filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  entry: {
    main: './app/main.js',
    vendors: [
      'react-dom',
      'react-redux',
      'react',
      'redux',
      'classnames'
    ]
  },
  output: {
    path: config.dist,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        include: [
          config.app
        ],
        exclude: /node_modules/
      },
      {
        loader: 'eslint-loader',
        test: /\.jsx?$/,
        options: {
          fix: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader'
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        main: false,
        vendors: false
      }
    }
  },
  plugins: [
    extractSass,
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      path: config.dist,
      filename: 'index.html',
      template: config.app + '/template.html',
      inject: true
    })
  ],
  stats: {
    children: false
  }
}

import { join, resolve } from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  // filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})
const config = {
  dist: resolve(__dirname, 'dist')
}

export default {
  entry: {
    application: './app/application.js',
    vendor: [
      'react',
      'react-dom',
      'classnames'
    ]
  },
  output: {
    path: config.dist,
    filename: '[name].js'
  },
  devtool: 'source-map', // any 'source-map'-like devtool is possible
  devServer: {
    contentBase: config.dist,
    compress: true
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        include: [
          resolve(__dirname, 'app')
        ],
        exclude: '/node_modules/',
      },
      {
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
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename:'vendor.js'
    }),
    extractSass
  ]
}

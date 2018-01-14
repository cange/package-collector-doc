import { join, resolve } from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  // filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})
const config = {
  dist: resolve(__dirname, 'dist'),
  app: resolve(__dirname, 'app')
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
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        include: [
          config.app
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        options: {
          fix: true
        },
        exclude: /node_modules/,
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
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename:'vendor.js'
    }),
    extractSass,
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      path: config.dist,
      filename: 'index.html',
      template: `${config.app}/template.html`,
      inject: true
    })
  ]
}

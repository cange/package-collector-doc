import { resolve } from 'path'
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
    compress: false,
    hot: true,
    host: '127.0.0.1'
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].js'
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

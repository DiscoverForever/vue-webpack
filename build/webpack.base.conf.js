const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  // 基本目录，一个绝对路径，用于从配置中解析entry points和loaders
  context: path.resolve(__dirname, '..'),
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-source-map',
  resolve: {
    // alia:
  },
  plugins: [
    // 解析*.vue文件必须引用VueLoaderPlugin
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      // favicon: resolve('favicon.ico'),
      title: 'webpack'
    }),
    // new UglifyJsPlugin({
    //   sourceMap: true
    // })
  ]
}
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
    // 如果多个文件共享相同的名称但具有不同的扩展名，则webpack将解析具有列表中第一个列出的扩展名的文件并跳过其余文件。
    extensions: ['.js', '.vue', '.less', '.css', '.scss', '.json'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src')
    }
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
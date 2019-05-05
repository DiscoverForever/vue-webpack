const config = require('./webpack.base.conf')
module.exports = {
  ...config,
  // 会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 3000
  }
  
}
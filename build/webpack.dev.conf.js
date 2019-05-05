const config = require('./webpack.base.conf')
module.exports = {
  ...config,
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 3000
  }
  
}
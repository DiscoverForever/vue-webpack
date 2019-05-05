const config = require('./webpack.base.conf')
module.exports = {
  ...config,
  mode: 'production',
  devServer: {
    contentBase: './dist',
    port: 3000
  }
  
}
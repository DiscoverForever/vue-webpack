const config = require('./webpack.base.conf')
console.log(config)
module.exports = {
  ...config,
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 3000
  }
  
}
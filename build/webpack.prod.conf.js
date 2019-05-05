const config = require('./webpack.base.conf')
module.exports = {
  ...config,
  // 会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
  mode: 'production',
  devServer: {
    contentBase: './dist',
    port: 3000
  }
  
}
// 配置开发时需要，而打包时不需要的 webpack 配置
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  // 配置 dev-server 服务器
  devServer: {
    contentBase: './dist',
    inline: true,
  }
})
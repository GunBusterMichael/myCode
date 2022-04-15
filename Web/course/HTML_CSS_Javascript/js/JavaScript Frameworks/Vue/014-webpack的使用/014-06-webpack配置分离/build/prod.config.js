// 配置打包时需要，而开发时不需要的配置
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    // 压缩 js 文件
    new UglifyjsWebpackPlugin()
  ]
})
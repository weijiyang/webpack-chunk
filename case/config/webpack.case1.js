/*
 * 验证 公共文件 静态单入口文件打包
 */
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    entry: {
        main1: path.resolve(__dirname, "../app/main1.js"),
    },
    output: {
        path: path.resolve(__dirname, "../build/case1"),
        filename: "[name].build.js"
    }
})
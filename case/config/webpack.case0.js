/*
 * 验证 静态单入口文件 打包
 */
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    entry: {
        main: path.resolve(__dirname, "../app/main.js")
    },
    output: {
        path: path.resolve(__dirname, "../build/case0"),
        filename: "[name].build.js"
    }
})
/*
 * 验证 多入口文件 打包过程
 */
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    entry: {
        main: path.resolve(__dirname, "../app/main.js"),
        main1: path.resolve(__dirname, "../app/main1.js"),
        main2: path.resolve(__dirname, "../app/main2.js")
    },
    output: {
        path: path.resolve(__dirname, "../build/case3"),
        filename: "[name].build.js"
    }
})
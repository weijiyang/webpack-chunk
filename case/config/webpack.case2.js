/*
 * 验证 异步加载 文件打包过程
 */
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    entry: {
        main2: path.resolve(__dirname, "../app/main2.js")
    },
    output: {
        path: path.resolve(__dirname, "../build/case2"),
        filename: "[name].build.js"
    }
})
// 一个最基本的`webpack`配置文件
const webpack = require('webpack')
const merge = require('webpack-merge')
const analyzer = require('./webpack.bundle.analyzer.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(process.env.NEV == 'ANALYZER' ? analyzer : null, {
    entry: {
        main: __dirname + "/app/main.js",
        main1: __dirname + "/app/main1.js",
        main2: __dirname + "/app/main2.js"
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].[hash].build.js"
    },
    plugins: [
        new CleanWebpackPlugin('build/*.*'),
        new htmlWebpackPlugin({
            title: '这里是标题',
            filename: 'main.html',
            template: 'index.html',
            inject: true
        })
    ]
});
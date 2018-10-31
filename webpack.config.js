// 一个最基本的`webpack`配置文件
const webpack = require('webpack');
const CleanWebpackPlugin  = require('clean-webpack-plugin')

module.exports = {
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },
    plugins: [
      new CleanWebpackPlugin('build/*.*')
    ]
};
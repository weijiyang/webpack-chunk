const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin('build/*.*'),
        new htmlWebpackPlugin({
            title: '这里是标题',
            filename: 'main.html',
            template: 'index.html',
            inject: true
        })
    ]
}
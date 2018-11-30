// 一个最基本的`webpack`配置文件
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        // main: __dirname + "/app/main.js",
        // main1: __dirname + "/app/main1.js",
        // main2: __dirname + "/app/main2.js"
        app: __dirname + "/app/app.js"
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].[hash].build.js",
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin('build/*.*'),
        new htmlWebpackPlugin({
            filename: 'main.html',
            template: 'index.html',
            inject: true
        })
    ]
}
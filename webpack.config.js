// 一个最基本的`webpack`配置文件
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: {
        main: __dirname + "/app/main.js",
        main1: __dirname + "/app/main1.js",
        main2:__dirname + "/app/main2.js"
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].[hash].build.js"
    },
    plugins: [
        new CleanWebpackPlugin('build/*.*'),
        new BundleAnalyzerPlugin(),
        new htmlWebpackPlugin({
            title: '这里是标题',
            filename: 'main.html',
            template: 'index.html',
            inject:true
        })
    ],
    optimization: {
        splitChunks: {
            minChunks: 1,
            maxInitialRequests: 5,
            automaticNameDelimiter:'##',
            cacheGroups: {
                test: {
                    name:'async',
                    chunks: "async",
                    minSize:1
                },
                common: {
                    chunks: "initial",
                    minSize: 1,
                    filename: "[name].[hash].bundle.js"
                },
                vender: {
                    name:'mokuai',
                    chunks: "initial",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    filename: '[name].[hash].bundle.js'
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
};
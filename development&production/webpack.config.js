// 一个最基本的`webpack`配置文件
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: {
        main: __dirname + "/app/main.js",
        main1: __dirname + "/app/main1.js",
        main2: __dirname + "/app/main2.js"
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].build.js"
    },
    plugins: [
        new CleanWebpackPlugin('build/*.*'),
        new BundleAnalyzerPlugin(),
        new htmlWebpackPlugin({
            filename: 'main.html',
            template: 'index.html',
            inject: true
        })
    ],
    optimization: {
        splitChunks: {
            minSize: 1,
            minChunks: 1,
            maxInitialRequests: 1,
            // maxAsyncRequests: 1,
            automaticNameDelimiter: '##',
            // cacheGroups: {
            //     test: {
            //         name: 'async',
            //         chunks: "async",
            //     },
            //     common: {
            //         chunks: "initial",
            //         filename: "[name].bundle.js"
            //     },
            //     vender: {
            //         name: 'vender',
            //         chunks: "initial",
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: 10,
            //         filename: '[name].bundle.js'
            //     }
            // }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
};
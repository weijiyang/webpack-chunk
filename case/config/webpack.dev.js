// 一个最基本的`webpack`配置文件
const webpack = require('webpack');
const merge = require('webpack-merge')
const case0 = require('./webpack.case0.js')
const case1 = require('./webpack.case1.js')
const case2 = require('./webpack.case2.js')
const case3 = require('./webpack.case3.js')

switch (process.env.CASE) {
    case 'case0':
        CASE = case0
        break;
    case 'case1':
        CASE = case1
        break;
    case 'case2':
        CASE = case2
        break;
    case 'case3':
        CASE = case3
        break;
    default:
        CASE = case0
}
module.exports = merge(
    CASE, {
        mode: 'development',
        // mode: 'production',
        optimization: {
            splitChunks: {
                automaticNameDelimiter: '##',
                cacheGroups: {
                    test: {
                        name: 'async',
                        chunks: "async",
                        minSize: 1
                    },
                    common: {
                        name:'common',
                        chunks: "initial",
                        minSize: 1,
                        filename: "[name].bundle.js"
                    },
                    vender: {
                        name: 'vender',
                        chunks: "all",
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        filename: 'vender.[chunkhash].bundle.js'
                    }
                }
            },
            runtimeChunk: {
                name: "manifest"
            }
        }
    });
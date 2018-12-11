const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            minChunks: 1,
            // maxInitialRequests: 10,
            maxAsyncRequests: 1,
            automaticNameDelimiter: '##',
            // cacheGroups: {
            //     test: {
            //         name: 'async',
            //         chunks: "async",
            //         minSize: 1
            //     },
            //     common: {
            //         chunks: "initial",
            //         minSize: 1,
            //         filename: "common.bundle.js"
            //     },
            //     vender: {
            //         name: 'vender',
            //         chunks: "initial",
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: 10,
            //         filename: 'vender.bundle.js'
            //     }
            // }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, "./dll"),
            manifest: require(path.resolve(__dirname,'./dll',"vender-manifest.json"))
        })
    ]
});
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const analyzer = require('./webpack.bundle.analyzer.js')
module.exports = merge(common, analyzer, {
    mode: 'production',
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '##',
            cacheGroups: {
                test: {
                    name: 'async',
                    chunks: "async"
                },
                common: {
                    chunks: "initial",
                    filename: "common.bundle.js"
                },
                vender: {
                    name: 'vender',
                    chunks: "initial",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    filename: 'vender.bundle.js'
                }
            }
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
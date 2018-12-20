const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const analyzer = require('./webpack.bundle.analyzer.js')
const speedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new speedMeasurePlugin()
module.exports = smp.wrap(merge(common, analyzer, {
    mode: 'production',
    optimization: {
        splitChunks: {
            minChunks: 1,
            maxInitialRequests: 5,
            automaticNameDelimiter: '##',
            cacheGroups: {
                test: {
                    name: 'async',
                    chunks: "async",
                    minSize: 1,
                },
                common: {
                    chunks: "initial",
                    minSize: 1,
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
    }
}))
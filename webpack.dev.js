const merge = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'development',
    optimization: {
        splitChunks: {
            minChunks: 1,
            maxInitialRequests: 5,
            automaticNameDelimiter: '##',
            cacheGroups: {
                test: {
                    name: 'async',
                    chunks: "async",
                    minSize: 1
                },
                common: {
                    chunks: "initial",
                    minSize: 1,
                    filename: "[name].[hash].bundle.js"
                },
                vender: {
                    name: 'mokuai',
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
});
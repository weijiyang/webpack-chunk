const merge = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'development',
    optimization: {
        splitChunks: {
            maxAsyncRequests: 2,
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
                    filename: "[name].bundle.js"
                },
                vender: {
                    name: 'mokuai',
                    chunks: "initial",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    filename: 'mokuai.[chunkhash].bundle.js'
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
});
const webpack = require('webpack')
const path = require("path")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const vendors = [
    'jquery',
    'element-ui',
    'vue'
];
module.exports = {
    mode: 'development',
    entry: {
        lib: vendors
    },
    output: {
        path: path.join(__dirname, 'dll'),
        filename: 'dll.[name].js',
        library: '[name]'
    },
    plugins: [
        new CleanWebpackPlugin('dll/*.*'),
        new webpack.DllPlugin({
            context: path.resolve(__dirname, "./dll"),
            path: path.resolve(__dirname, "./dll", "vender-manifest.json"),
            name: '[name]'
        })
    ]
};
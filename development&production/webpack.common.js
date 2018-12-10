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
        app: path.join(__dirname, "/app/views/app.js")
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: "[name].[hash].build.js",
        publicPath: '/build',
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': __dirname
        }
      },
    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },
            {
              test: /\.js$/,
              loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            },
            {
              test: /\.scss$/,
              loader: 'style-loader!css-loader!sass-loader'
            },
            {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              loader: 'url-loader'
            },
            {
              test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
              loader: 'url-loader'
            },
            {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              loader: 'url-loader'
            }
        ]
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
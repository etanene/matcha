'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/build',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    failOnError: true                }
            },
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        host: '0.0.0.0',
        port: '3000'
    }
}

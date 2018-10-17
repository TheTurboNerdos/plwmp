const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: "source-map",
    mode: "development",

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                        ],
                        plugins: []
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|jpeg)?$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: './resources/[name].[ext]'
                    }
                }
            }, {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: './resources/[name].[ext]'
                    }
                }
            }, {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ["index"]
        })
    ],
    watch: false,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000,
        ignored: /node_modules/
    }
};
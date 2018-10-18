const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const AntdScssThemePlugin = require("antd-scss-theme-plugin");

const css_loader = {
    loader: "css-loader",
    options: {
        modules: true,
        localIdentName: "[name]-[local]-[hash:base64:5]",
    }
};

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    devtool: "source-map",
    mode: "development",
    target: "electron-main",

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
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            // babel-plugin-import is badly named, but is an antd plugin for modular imports
                            ["import", {
                                libraryName: "antd", style: true
                            }],
                        ]
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|jpeg)?$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "./resources/[name].[ext]"
                    }
                }
            }, {
                test: /\.sass$/,
                use: ["style-loader", css_loader, AntdScssThemePlugin.themify("sass-loader")]
            },{
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                include: /node_modules/
            },{
                test: /\.css$/,
                use: ["style-loader", css_loader],
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                use: ["style-loader", "css-loader", AntdScssThemePlugin.themify("less-loader"),],
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "./resources/[name].[ext]"
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
        }),
        new AntdScssThemePlugin("src/styles/theme.sass")
    ],
    watch: false,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000,
        ignored: /node_modules/
    }
};
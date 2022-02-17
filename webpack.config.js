const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                "postcss-preset-env",
                              ],
                            ],
                          },
                        },
                    },
                    "sass-loader",
                ]
            }
        ]
    }
}
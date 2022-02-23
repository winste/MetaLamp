const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',
    entry: {
      main: './src/index.js',
      colorsAndType: './src/pages/UI-kit/colors-and-type/colors-and-type.js',
    },
    output: {
      filename: '[name].[contenthash].js',
      assetModuleFilename: "assets/[hash][ext][query]",
      clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
        template: "./src/index.pug"
    })],
    module: {
        rules: [
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
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
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.pug$/,
              loader: 'pug-loader',
              exclude: /(node_modules|bower_components)/,
            },
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    }
}
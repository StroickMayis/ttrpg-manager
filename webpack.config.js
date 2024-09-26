const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[name][ext][query]'
    },
    devtool: "eval-source-map",
    mode: `development`,
    plugins: [
        new HtmlWebpackPlugin({
            filename: `pages/index.html`,
            template: './src/pages/index.html',
            chunks: [`index`]
        }),
        new HtmlWebpackPlugin({
            filename: `pages/campaignList.html`,
            template: './src/pages/campaignList.html',
            // chunks: [`about`]
        }),
        new HtmlWebpackPlugin({
            filename: `pages/createAccount.html`,
            template: './src/pages/createAccount.html',
            // chunks: [`about`]
        }),
        new HtmlWebpackPlugin({
            filename: `pages/forgotPassword.html`,
            template: './src/pages/forgotPassword.html',
            // chunks: [`about`]
        }),
        new HtmlWebpackPlugin({
            filename: `pages/logIn.html`,
            template: './src/pages/logIn.html',
            // chunks: [`about`]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: __dirname + "/frontend/app.jsx",
    output: {
        path: path.resolve(__dirname, 'asset', 'javascript'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: [
                    /\.jsx?$/, /\.js?$/
                ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devtool: 'source-maps',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
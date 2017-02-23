const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, '..', 'core', 'static_src', 'js');
const distPath = path.join(__dirname, '..', 'core', 'static', 'js');

module.exports = {
    context: sourcePath,
    entry: {
        site: './site.js',
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'], // Specify the common bundle's name.
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                },
            }],
        }],
    },
};

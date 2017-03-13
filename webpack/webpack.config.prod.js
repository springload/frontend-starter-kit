const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devtool = 'source-map';
config.watch = false;

config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production'),
    },
}));

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        screw_ie8: true,
        warnings: false,
    },
    mangle: {
        screw_ie8: true,
    },
    output: {
        comments: false,
        screw_ie8: true,
    },
    sourceMap: true,
}));

module.exports = config;

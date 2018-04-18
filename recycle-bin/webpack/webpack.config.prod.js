const webpack = require('webpack');

const base = require('./webpack.config.base');

const config = base('production');

module.exports = Object.assign({}, config, {
    plugins: config.plugins.concat([
        new webpack.optimize.UglifyJsPlugin(),
    ]),
});

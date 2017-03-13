const webpack = require('webpack');
const base = require('./webpack.config.js');

/**
 * Production Webpack config, with performance optimisations.
 */
module.exports = Object.assign({}, base, {
    devtool: 'source-map',

    plugins: base.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
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
        }),
    ]),

    // Turn off performance hints during development because we don't do any
    // splitting or minification in interest of speed. These warnings become
    // cumbersome.
    performance: {
        hints: false,
    },
});

const webpack = require('webpack');
const base = require('./webpack.config.js');

/**
 * Development Webpack config, with dev-workflow optimisations.
 */
module.exports = Object.assign({}, base, {
    devtool: 'inline-source-map',

    plugins: base.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
    ]),

    // Turn off performance hints during development because we don't do any
    // splitting or minification in interest of speed. These warnings become
    // cumbersome.
    performance: {
        hints: false,
    },
});

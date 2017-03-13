const path = require('path');
const config = require('../gulpfile.js/config');

/**
 * Base Webpack config, defining how our code should compile.
 */
module.exports = {
    entry: {
        site: path.join(config.paths.source, 'js', 'site.js'),
    },

    output: {
        path: path.join(config.paths.dist, 'js'),
        filename: '[name].js',
    },

    plugins: [],

    module: {
        rules: [
            // Disable require.ensure as it's not a standard language feature.
            { parser: { requireEnsure: false } },

            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    },
                }],
            },
        ],
    },

    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
};

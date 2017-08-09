const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('../gulpfile.js/config');

// Some libraries import Node modules but don't use them in the browser.
// Tell Webpack to provide empty mocks for them so importing them works.
const node = {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
};

const stats = {
    // Add chunk information (setting this to `false` allows for a less verbose output)
    chunks: false,
    // Add the hash of the compilation
    hash: false,
    // `webpack --colors` equivalent
    colors: true,
    // Add information about the reasons why modules are included
    reasons: false,
    // Add webpack version information
    version: false,
};

/**
 * Base Webpack config, defining how our code should compile.
 */
const webpackConfig = (environment) => {
    const compiler = {
        entry: {
            site: [
                path.join(config.paths.source, 'js', 'utils', 'polyfills.js'),
                path.join(config.paths.source, 'js', 'site.entry.js'),
            ],
        },

        output: {
            path: path.join(config.paths.dist, 'js'),
            filename: '[name].js',
        },

        plugins: [
            new BundleAnalyzerPlugin({
                // Can be `server`, `static` or `disabled`.
                analyzerMode: 'static',
                // Path to bundle report file that will be generated in `static` mode.
                reportFilename: path.join(__dirname, 'webpack-stats.html'),
                // Automatically open report in default browser
                openAnalyzer: false,
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(environment),
                },
            }),
        ],

        module: {
            rules: [
                // Disable require.ensure as it's not a standard language feature.
                { parser: { requireEnsure: false } },

                // First, run the linter.
                // It's important to do this before Babel processes the JS.
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    use: ['eslint-loader'],
                    include: path.join(config.paths.source, 'js'),
                },
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: [/node_modules/],
                },
            ],
        },
        stats: stats,
        node: node,
    };

    return compiler;
};

module.exports = webpackConfig;

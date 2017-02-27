const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, '..', 'core', 'static_src', 'js');
const distPath = path.join(__dirname, '..', 'core', 'static', 'js');

module.exports = {
    context: sourcePath,
    devtool: 'source-map',
    entry: {
        site: './site.js',
        vendor: [require.resolve('./polyfills'), 'react', 'react-dom'],
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
        rules: [
            // Disable require.ensure as it's not a standard language feature.
            { parser: { requireEnsure: false } },
            // First, run the linter.
            // It's important to do this before Babel processes the JS.
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [{
                    // Point ESLint to our predefined config.
                    options: {
                        configFile: path.join(__dirname, '../.eslintrc.js'),
                        useEslintrc: false,
                    },
                    loader: 'eslint-loader',
                }],
                include: sourcePath,
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015'],
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
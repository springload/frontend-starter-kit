const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devtool = 'cheap-module-source-map';
config.watch = true;

const prod = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
});

config.plugins.push(prod);

// Some libraries import Node modules but don't use them in the browser.
// Tell Webpack to provide empty mocks for them so importing them works.
config.node = {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
};

// Turn off performance hints during development because we don't do any
// splitting or minification in interest of speed. These warnings become
// cumbersome.
config.performance = {
    hints: false,
};

module.exports = config;

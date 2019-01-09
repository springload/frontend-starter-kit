const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixPaths = require('./webpack.fixpaths');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (env, options) => ({
    entry: './core/static_src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'core/static/dist'),
    },
    mode: options.mode,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, 'core/templates_src/base.html'),
            filename: path.resolve(__dirname, 'core/templates/base.html'),
        }),
        new FixPaths(),
        new SpriteLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            browsers: [
                                                'last 2 versions',
                                                'safari >= 7',
                                            ],
                                        },
                                    },
                                ],
                                '@babel/preset-flow',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader:
                            options.mode === 'production'
                                ? MiniCssExtractPlugin.loader
                                : 'style-loader',
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            sourceMap: options.mode === 'development',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins() {
                                return [autoprefixer, cssnano];
                            },
                        },
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                        options: {
                            includePaths: ['node_modules/normalize.css'],
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            spriteFilename: 'sprite.svg',
                        },
                    },
                    'svgo-loader',
                ],
            },
            {
                test: /\.woff|woff2$/,
                loader: 'file-loader',
            },
        ],
    },
});

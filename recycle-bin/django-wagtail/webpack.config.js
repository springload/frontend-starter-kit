const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixPaths = require('./webpack.fixpaths');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (env, options) => ({
    mode: options.mode,
    devtool: options.mode !== 'production' ? 'inline-source-map' : undefined,
    entry: './core/static_src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'core/static/dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
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
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
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
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: options.mode === 'development',
                            ident: 'postcss',
                            plugins: () => [
                                postcssNormalize,
                                autoprefixer,
                                cssnano,
                            ],
                        },
                    },
                    'sass-loader', // compiles Sass to CSS
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

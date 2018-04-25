const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixPaths = require('./webpack.fixpaths');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (env, options) => {
    return {
        entry: './core/static_src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'core/static'),
        },
        mode: options.mode,
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Output Management',
                filename: path.resolve(__dirname, 'core/templates/base.html'),
                template: path.resolve(
                    __dirname,
                    'core/templates_src/base.html',
                ),
            }),
            new FixPaths(),
            new SpriteLoaderPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader', // creates style nodes from JS strings
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
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                    ],
                },
            ],
        },
    };
};

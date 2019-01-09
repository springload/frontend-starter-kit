const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (env, options) => ({
    entry: ['@babel/polyfill', './app/static_src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    mode: options.mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new SpriteLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
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
                            includePaths: ['./node_modules/normalize.css'],
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    options.mode === 'development'
                        ? { loader: 'url-loader' }
                        : {
                              loader: 'file-loader',
                              options: {
                                  name: '[name].[ext]',
                                  outputPath: './fonts',
                                  publicPath: './fonts',
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
        ],
    },
});

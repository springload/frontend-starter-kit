const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (env, options) => ({
    entry: ['@babel/polyfill', './app/static_src/index.js'],
    output: {
        filename: 'javascript/bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: options.mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
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
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './fonts',
                            publicPath: '../fonts',
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './images',
                            publicPath: '../images',
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
                            spriteFilename:
                                '../app/templates/Includes/InlineSvgs.ss',
                        },
                    },
                    'svgo-loader',
                ],
            },
        ],
    },
});

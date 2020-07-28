const packageJson = require('./package.json');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixPaths = require('./webpack.fix-django-paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const CMS_TYPE_SILVERSTRIPE = 'silverstripe';
const CMS_TYPE_DJANGO = 'django';
const CMS_TYPES = [CMS_TYPE_DJANGO, CMS_TYPE_SILVERSTRIPE];
const { cms } = packageJson;

if (!CMS_TYPES.includes(cms)) {
  throw `Valid CMS types are ${CMS_TYPES}. Received "${cms}" instead`;
}

module.exports = (env, options) => {
  const plugins =
    cms === CMS_TYPE_DJANGO
      ? [
          new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, 'core/templates_src/base.html'),
            filename: path.resolve(__dirname, 'core/templates/base.html'),
          }),
          new FixPaths(),
        ]
      : [];
  plugins.push(
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  );

  const outputPath =
    cms === CMS_TYPE_DJANGO ? 'core/static/dist' : 'public/dist';

  return {
    mode: options.mode,
    devtool: options.mode !== 'production' ? 'inline-source-map' : undefined,
    entry: './src/index.tsx',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, outputPath),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins,
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
              loader: MiniCssExtractPlugin.loader,
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
                plugins: () => [postcssNormalize, autoprefixer, cssnano],
              },
            },
            'sass-loader', // compiles Sass to CSS
          ],
        },
        {
          test: /\.svg$/,
          use: ['svgo-loader'],
        },
        {
          test: /\.woff|woff2$/,
          loader: 'file-loader',
        },
      ],
    },
  };
};

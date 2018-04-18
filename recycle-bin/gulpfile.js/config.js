const path = require('path');

const source = path.join(__dirname, '..', 'core', 'static_src');
const dist = path.join(__dirname, '..', 'core', 'static');
const docs = path.join(__dirname, '..', 'docs');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    prod: prod,

    paths: {
        source: source,
        dist: dist,

        sass: path.join(source, 'sass'),
        svg: path.join(source, 'svg'),
        views: path.join('.', 'core'),
        css: path.join(dist, 'css'),
        images: path.join(dist, 'images'),
        patterns: path.join(docs, 'pattern-library'),
    },

    PlzOptions: {
        minifier: prod,
        // See http://pleeease.io/docs/#mqpacker
        mqpacker: false,
        // See http://pleeease.io/docs/#filters
        filters: false,
        autoprefixer: {
            browsers: ['> 0.1%'],
        },
    },
};

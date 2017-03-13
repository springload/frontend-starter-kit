const path = require('path');

const source = path.join(__dirname, '..', 'core', 'static_src');
const dist = path.join(__dirname, '..', 'core', 'static');

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
    },

    PlzOptions: {
        minifier: prod,
        mqpacker: false,
        filters: false,
        rem: true,
        pseudoElements: true,
        opacity: true,
        autoprefixer: {
            browsers: ['ie 8', 'ie 9', '> 1%'],
        },
    },
};

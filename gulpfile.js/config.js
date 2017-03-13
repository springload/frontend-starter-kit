var path = require('path');

var sourcePath = path.join(__dirname, '..', 'core', 'static_src');
var distPath = path.join(__dirname, '..', 'core', 'static');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
    prod: prod,

    paths: {
        source: sourcePath,
        dist: distPath,

        sass: path.join(sourcePath, 'sass'),
        svg: path.join(sourcePath, 'svg'),
        views: path.join('.', 'core'),
        css: path.join(distPath, 'css'),
        images: path.join(distPath, 'images'),
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

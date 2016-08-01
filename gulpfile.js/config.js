var path = require('path');

var sourcePath = path.join('.', 'core', 'static_src');
var distPath = path.join('.', 'core', 'static');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
    prod: prod,

    paths: {
        appName: 'site.js',
        scss: path.join(sourcePath, 'scss'),
        css: path.join(distPath, 'css'),
        jsSrc: path.join(sourcePath, 'js'),
        js: path.join(distPath, 'js'),
        svg: path.join(sourcePath, 'svg'),
        images: path.join(distPath, 'images'),
        slug: 'my-site',
        views: path.join('.', 'core'),
    },

    PlzOptions: {
        minifier: prod,
        mqpacker: false,
        filters: false,
        rem: true,
        pseudoElements: true,
        opacity: true,
        autoprefixer: {
            browsers: ['ie 8', 'ie 9', '> 1%']
        }
    }
};

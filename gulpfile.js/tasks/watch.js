var gulp = require("gulp");
var config = require("../config");
var path = require("path");
var bs = require('browser-sync').create('main');

gulp.task('watch', ['js', 'css'], function() {
    bs.init({
        open: false,
        //server: config.paths.views
        proxy: 'example.com:1337'
    });

    var justReload = [
        path.join(config.paths.views, '**', '*.html'),
        path.join(config.paths.views, '**', '*.php'),
        path.join(config.paths.views, '**', '*.twig'),
        path.join(config.paths.views, '**', '*.j2')
    ];

    gulp.watch(justReload, bs.reload);
    gulp.watch(path.join(config.paths.sass, '**', '*.scss'), ['css']);
    gulp.watch(path.join(config.paths.jsSrc, '**', '*.js'), ['js']);
});

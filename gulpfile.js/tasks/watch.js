var gulp = require("gulp");
var path = require("path");
var bs = require('browser-sync').create('main');
var webpack = require('webpack');
var config = require("../config");
var webpackConfig = require('../../webpack/webpack.config.dev');
var bundler = webpack(webpackConfig);

function bundleWatch(err) {
    if (err) {
        throw new Error(err);
    }

    if (bs.active) {
        bs.reload(path.join(webpackConfig.output.path, '**', '*.js'));
    }
}

gulp.task('watch', ['build'], function() {
    bs.init({
        proxy: 'localhost:3000',
    }, function() {
        bundler.watch(200, bundleWatch);
    });

    gulp.watch(path.join(config.paths.views, '**', '*.html'), bs.reload);
    gulp.watch(path.join(config.paths.sass, '**', '*.scss'), ['css']);
    gulp.watch(path.join(config.paths.svg, '**', '*.svg'), ['svg']);
});
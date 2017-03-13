var gulp = require("gulp");
var path = require("path");
var bs = require('browser-sync').create('main');
var webpack = require('webpack');
var config = require("../config");
const webpackCallback = require('./js');
var webpackConfig = require('../../webpack/webpack.config.dev');

gulp.task('watch', ['build'], function() {
    webpackConfig.watch = true;

    bs.init({
        proxy: 'localhost:3000',
    }, function() {
        webpack(webpackConfig).watch({}, (err, stats) => {
            const hasErrors = err || stats.hasErrors();
            if (err) {
                console.error(err.stack || err);
                if (err.details) {
                    console.error(err.details);
                }

                bs.notify(err.message, 10000);
            } else {
                const info = stats.toJson();

                if (stats.hasErrors()) {
                    console.error(info.errors);
                    bs.notify(info.errors[0].split('\n\n')[0], 10000);
                }

                if (stats.hasWarnings()) {
                    console.warn(info.warnings);
                    bs.notify(info.warnings[0], 10000);
                }

                console.log(stats.toString(webpackConfig.stats));

                if (!hasErrors && bs.active) {
                    bs.reload(path.join(webpackConfig.output.path, '**', '*.js'));
                }
            }
        });
    });

    gulp.watch(path.join(config.paths.views, '**', '*.html'), bs.reload);
    gulp.watch(path.join(config.paths.sass, '**', '*.scss'), ['css']);
    gulp.watch(path.join(config.paths.svg, '**', '*.svg'), ['svg']);
});

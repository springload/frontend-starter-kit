const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gulp-util');

const config = require('../config');
const webpackConfig = require(`../../webpack/webpack.config.${config.prod ? 'prod' : 'dev' }`);

gulp.task('js', (done) => {
    webpack(webpackConfig).run((err, stats) => {
        if (err) {
            done(new gutil.PluginError('webpack', err));
        } else {
            const message = stats.toString(Object.assign({}, webpackConfig.stats, { timings: false }));

            if (stats.hasErrors()) {
                done(new gutil.PluginError('webpack', message));
            } else {
                console.log(message);
                done();
            }
        }
    });
});

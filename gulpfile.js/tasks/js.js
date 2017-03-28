const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gulp-util');

const config = require('../config');
const webpackConfig = require(`../../webpack/webpack.config.${config.prod ? 'prod' : 'dev' }`);

gulp.task('js', (done) => {
    webpack(webpackConfig).run((err, stats) => {
        const hasErrors = err || stats.hasErrors();
        const message = stats.toString(Object.assign({}, webpackConfig.stats, { timings: false }));

        if (hasErrors) {
            throw new gutil.PluginError('webpack', {
                message: err ? err.details : message,
            });
        } else {
            console.log(message);

            done();
        }
    });
});

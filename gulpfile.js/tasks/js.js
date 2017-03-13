const gulp = require('gulp');
const webpack = require('webpack');

const config = require('../config');
const webpackConfig = require(`../../webpack/webpack.config.${config.prod ? 'prod' : 'dev' }`);

gulp.task('js', (done) => {
    webpack(webpackConfig).run((err, stats) => {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
            console.error(info.errors);
        }

        if (stats.hasWarnings()) {
            console.warn(info.warnings)
        }

        console.log(stats.toString(Object.assign({}, webpackConfig.stats, {
            timings: false,
        })));

        done();
    });
});

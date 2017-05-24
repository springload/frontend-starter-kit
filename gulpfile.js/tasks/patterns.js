const path = require('path');
const gulp = require('gulp');
const shell = require('gulp-shell');
const config = require('../config');
const bs = require('browser-sync').create('patterns');

const options = {
    ignoreErrors: !config.prod,
};

gulp.task('patterns:build', ['svg', 'css'], shell.task([
    `styleguide`,
    // `sed -i.bak -e 's/UA-XXXXXXX-X/${config.values.GOOGLE_ANALYTICS}/g' ${config.paths.www}/*.html && rm ${config.paths.www}/*.bak`
], options));

gulp.task('patterns', ['patterns:build'], function() {
    bs.init({
        server: [config.paths.patterns, config.paths.dist],
    });

    gulp.watch([
        path.join(config.paths.patterns, 'template.html'),
        path.join(config.paths.sass, '**', '*.scss'),
        path.join(config.paths.svg, '**', '*.svg'),
    ], ['patterns:build']);
    gulp.watch(path.join(config.paths.patterns, 'index.html'), bs.reload);
});

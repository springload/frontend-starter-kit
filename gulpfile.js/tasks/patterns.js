const path = require('path');
const gulp = require('gulp');
const shell = require('gulp-shell');
const config = require('../config');
const bs = require('browser-sync').create('patterns');

const options = {
    ignoreErrors: !config.prod,
};

const values = {
    GOOGLE_ANALYTICS: config.prod ? 'UA-79835767-5' : 'UA-XXXXXXX-X',
};

gulp.task('patterns:build', ['svg', 'css'], shell.task([
    `styleguide`,
    `sed -i.bak -e 's/UA-XXXXXXX-X/${values.GOOGLE_ANALYTICS}/g' ${config.paths.patterns}/index.html && rm ${config.paths.patterns}/*.bak`
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

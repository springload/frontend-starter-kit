const config = require('../config');
const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');
const size = require('gulp-size');
const rename = require('gulp-rename');

gulp.task('svg', function() {
    return gulp
        .src(path.join(config.paths.svg, '**', '*.svg'))
        .pipe(rename({ prefix: 'i-' }))
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(rename('svg.html'))
        .pipe(size({ title: 'SVG', gzip: config.prod }))
        .pipe(gulp.dest(config.paths.views));
});

// ----------------------------------------------------------------------------
// CSS
// ----------------------------------------------------------------------------

var config = require("../config");
var gulp = require('gulp');
var path = require('path');

var sass = require('gulp-sass');
var gutil = require('gulp-util');
var plz = require("gulp-pleeease");
var parker = require('gulp-parker');
var size = require('gulp-size');
var bs = require('browser-sync').get('main');
var sourcemaps = require('gulp-sourcemaps');
var critical = require('critical');
var moduleImporter = require('sass-module-importer');

gulp.task('css', function() {
    return gulp.src(path.join( config.paths.sass, '**', "*.scss" ), {base: config.paths.sass})
        .pipe(config.prod ? gutil.noop() : sourcemaps.init())
            .pipe(sass({ importer: moduleImporter()}))
            .on('error', function handleError(err) {
                gutil.log(err.message);
                bs.notify(err.message, 10000);
                this.emit('end');
            })
            .pipe(plz( config.PlzOptions ))
        .pipe(config.prod ? gutil.noop() : sourcemaps.write())
        .pipe(size({ title: config.prod ? 'CSS' : 'CSS (unminified)', showFiles: true, gzip: config.prod }))
        .pipe(gulp.dest( config.paths.css ))
        .pipe(bs.stream());
});


// ----------------------------------------------------------------------------
// Critical CSS
// ----------------------------------------------------------------------------

gulp.task('critical:css', function (cb) {
    critical.generate({
        inline: true,
        base: 'core',
        src: 'templates/index.html',
        css: 'static/css/screen.css',
        dest: 'dist/index-critical.html',
        minify: true,
        ignore: ['@font-face', /url\(/, /djDebug/],
        dimensions: [{
            width: 375,
            height: 600
        }, {
            width: 1400,
            height: 1200
        }]
    });
});



// ----------------------------------------------------------------------------
// CSS Reporter
// ----------------------------------------------------------------------------

// Helpful link to decipher these results:
// http://csswizardry.com/2016/06/improving-your-css-with-parker/
gulp.task('report:css', function() {
    return gulp.src( path.join(config.paths.css, '**', '*.css') )
        .pipe(parker({
            file: path.join(config.paths.css, 'css-report.md'),
            title: 'Gulp test report',
            metrics: [
                'TotalStylesheets',
                'TotalStylesheetSize',
                'TotalRules',
                'TotalSelectors',
                'TotalIdentifiers',
                'TotalDeclarations',
                'SelectorsPerRule',
                'IdentifiersPerSelector',
                'SpecificityPerSelector',
                'TopSelectorSpecificity',
                'TopSelectorSpecificitySelector',
                'TotalIdSelectors',
                'TotalUniqueColours',
                'TotalImportantKeywords',
                'TotalMediaQueries'
            ]
        })
    );
});

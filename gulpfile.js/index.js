const gulp = require('gulp');

require('./tasks/watch');
require('./tasks/css');
require('./tasks/svg');

gulp.task('build', ['css', 'svg']);

gulp.task('default', ['build']);

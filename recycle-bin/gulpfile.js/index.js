const gulp = require('gulp');

require('./tasks/watch');
require('./tasks/css');
require('./tasks/svg');
require('./tasks/js');
require('./tasks/patterns');

gulp.task('build', ['css', 'svg', 'js']);

gulp.task('default', ['build']);

const gulp = require('gulp');

require('./tasks/watch');
require('./tasks/css');
require('./tasks/svg');
require('./tasks/js');

gulp.task('build', ['css', 'svg', 'js']);

gulp.task('default', ['build']);

import gulp from 'gulp';

import './gulp/watch';
import './gulp/js';
import './gulp/css';
import './gulp/svg';

gulp.task('build', ['js', 'css'], function(done) {
    done();
});

gulp.task('default', ['build']);

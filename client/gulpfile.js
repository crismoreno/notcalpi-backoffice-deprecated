// https://www.youtube.com/watch?v=QgMQeLymAdU
const gulp = require('gulp');
const less = require('gulp-less');
const notify = require('gulp-notify');

function cssfy() {
  return gulp
    .src('./src/assets/styles/importer.less')
    .pipe(less())
    .pipe(gulp.dest('./src/assets/styles/'))
    .pipe(
      notify({ message: '\n\n✅  ===> STYLE — completed!\n', onLast: true })
    );
}

function watch() {
  gulp.watch('./src/assets/styles/**/*.less', cssfy);
}

exports.cssfy = cssfy;
exports.watch = watch;

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
  // 1. Where is the SASS file?
  return gulp.src('./scss/**/*.scss')
  // 2. Process SASS file
  .pipe(sass().on('error', sass.logError))
  // 3. Where is the output folder?
  .pipe(gulp.dest('./css'))
  // 4. Stream changes to all browsers
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);;
}

exports.style = style;
exports.watch = watch;

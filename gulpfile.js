const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp
    .src('./sass/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./css'));
});

gulp.task('watch_scss', function () {
  gulp.watch('sass/**/*.scss', gulp.series('sass'));
});

gulp.task('watch', gulp.series('watch_scss'));

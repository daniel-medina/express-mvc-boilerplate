const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass-compile', () => {
  return gulp.src('./views/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('default', () => {
  gulp.watch('./views/sass/**/*.scss', ['sass-compile'])
})

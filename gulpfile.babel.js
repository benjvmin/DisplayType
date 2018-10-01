import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sass from 'gulp-sass';


gulp.task("sass", () => {
  return gulp.src('./src/**/*.scss')
  .pipe(sass())
  .pipe(postcss([ autoprefixer() ]))
  .pipe(gulp.dest('./dist/css'))
})
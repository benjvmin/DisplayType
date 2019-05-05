import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import cssnano from 'cssnano';

gulp.task('sass', () => {
  return (
    gulp
      .src('./src/**/*.scss')
      .pipe(sassGlob())
      // .pipe(sass())
      .pipe(sass().on('error', sass.logError))
      // .pipe(postcss([ cssnano() ]))
      .pipe(gulp.dest('./dist/css'))
      .pipe(gulp.dest('./docs/.vuepress/public'))
  );
});

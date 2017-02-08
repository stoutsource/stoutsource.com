var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static Server + watching sass/js/html files
gulp.task('watch', ['sass', 'html'], function () {
  browserSync.init({
    server: "./dist"
  });

  gulp.watch("src/sass/**/*.sass", ['sass']);
  gulp.watch("src/js/**/*.js", ['js']);
  gulp.watch("src/*.html", ['html'])
    .on('change', browserSync.reload);
});

// Compile Sass into CSS
gulp.task('sass', function () {
  return gulp.src("src/sass/**/*.sass")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Copy js to dist directory
gulp.task('js', function () {
  return gulp.src("src/js/**/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

// Copy html to dist directory
gulp.task('html', function () {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

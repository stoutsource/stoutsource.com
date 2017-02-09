var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

// Static Server + watching sass/js/pug files
gulp.task('watch', ['stylus', 'js', 'pug', 'fonts'], function () {
  browserSync.init({
    server: './dist',
    notify: false
  });

  gulp.watch('src/styles/**/*.styl', ['stylus'])
    .on('change', browserSync.reload);

  gulp.watch('src/js/**/*.js', ['js'])
    .on('change', browserSync.reload);

  gulp.watch('src/views/**/*.pug', ['pug']);
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});

// Compile Stylus into CSS
gulp.task('stylus', function () {
  return gulp.src('src/styles/*.styl')
    .pipe(plumber())
    .pipe(stylus({
      'include css': true,
      'compress': true
    }))
    .pipe(autoprefixer(["last 15 versions", "> 1%", "ie 9"], {
      'cascade': false
    }))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Copy js to dist directory
gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// Compile .pug to .html
gulp.task('pug', function () {
  return gulp.src('src/views/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// Copy fonts to dist directory
gulp.task('fonts', function () {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('default', ['watch']);

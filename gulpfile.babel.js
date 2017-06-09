//'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'gulp-browserify';
import rename from 'gulp-rename';
import watch from 'gulp-watch';
import webserver from 'gulp-webserver';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import pump from 'pump';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';


//babel --presets react,es2015 js\source -d js\build
// browserify js\build\app.js js\build\components\Page.js -o bundle.js
gulp.task('buildFiles', () => {
  return gulp.src('js\\source\\**')
    .pipe(babel({
        presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest('js\\build'))
});

gulp.task('browserify', () => {
  return gulp.src("js\\build\\*.js")
    .pipe(browserify())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(''))
});

gulp.task('default', ['sass','buildFiles', 'browserify', 'compress', 'minify-css', 'minify']);

gulp.task('sass', function () {
  return gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''));
});

//js\\source\**\\*.js
gulp.task('watch', () => {
  watch ("js\\source\\", function() {
    gulp.src('js\\source\\**')
      .pipe(babel({
        presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest('js\\build'))
    gulp.src("js\\build\\*.js")
      .pipe(browserify())
      .pipe(rename("bundle.js"))
      .pipe(gulp.dest(''))
  });
});

gulp.task('webserver', function() {
  //gulp.src('c:\\users\\chris\\documents\\webde\\leaderboard\\')
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      //path: 'http://my-server:8080/users/chris/documents/webdev/leaderboard/index.html',
      open: true,
      fallback: 'index.html',
    }));
});

//minify JS
gulp.task('compress', function (cb) {
  pump([
        gulp.src("bundle.js"),
        uglify(),
        rename("bundle.min.js"),
        gulp.dest('')

    ],
    cb
  );
});

gulp.task('minify-css', function() {
  return gulp.src('styles.css')
     .pipe(cleanCSS({compatibility: 'ie8'}))
     .pipe(gulp.dest(''));
});

//minify HTML
gulp.task('minify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(''));
});
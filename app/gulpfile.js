
var gulp = require('gulp');

// minify js
var uglify = require('gulp-uglify');
var pump = require('pump');

// minify css
var cleanCSS = require('gulp-clean-css');

// rename
var rename = require('gulp-rename');

// concat js
var concatjs = require('gulp-concat-js');

// concat css
var concatcss = require('gulp-concat-css');

// sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// js hint
var jshint = require('gulp-jshint');



gulp.task('default', function(){
  console.log('This is gulp default task.');
});

gulp.task('minify-js', function(cb){
  pump([
    gulp.src('js/*.js'),
    uglify(),
    rename({suffix:'.min'}),
    gulp.dest('dist/js')
  ],cb);
});

gulp.task('minify-css', function(){
  return gulp.src('css/*.css')
         .pipe(cleanCSS({debug:true}, function(details){
           console.log(details.name + ': ' + details.stats.originalSize);
           console.log(details.name + ': ' + details.stats.minifiedSize);
         }))
         .pipe(rename({suffix:'.min'}))
         .pipe(gulp.dest('dist/css'));
});

gulp.task('concat-js', function(){
  return gulp.src(['dist/**/*.{js,json}'])
             .pipe(sourcemaps.init())
             .pipe(concatjs({
               'target' : 'concatenated.js',
               'entry': './main.js'
             }))
             .pipe(sourcemaps.write())
             .pipe(gulp.dest('dist'));
});

gulp.task('concat-css', function(){
  return gulp.src(['dist/css/*.css'])
    .pipe(concatcss('bundle.css'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('lint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});




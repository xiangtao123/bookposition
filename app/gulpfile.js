
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

// concatreplace
var concatreplace = require('gulp-concat-replace');

// del
var del = require('del');



// package path
var target_path = 'target';

// minify concat
var dist_path = 'dist';

gulp.task('clean', function(){
  return del([dist_path+'/**/*', target_path+'/**/*']); 
});

gulp.task('package',function(){
  return gulp.src(['*.png','*.ico','*.txt','*.htm*','img/**/*','js/**/*','css/**/*'])
           .pipe(gulp.dest(target_path));
});

gulp.task('minify-js', function(cb){
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(dist_path+'/js'));
});

gulp.task('minify-css', function(){
  return gulp.src('css/*.css')
         .pipe(cleanCSS({debug:true}, function(details){
           console.log(details.name + ': ' + details.stats.originalSize);
           console.log(details.name + ': ' + details.stats.minifiedSize);
         }))
         .pipe(rename({suffix:'.min'}))
         .pipe(gulp.dest(dist_path+'/css'));
});

gulp.task('concat-js',['minify-js'], function(){
  return gulp.src([dist_path+'/**/*.{js,json}'])
             .pipe(sourcemaps.init())
             .pipe(concatjs({
               'target' : 'concatenated.js',
               'entry': './main.js'
             }))
             .pipe(sourcemaps.write())
             .pipe(gulp.dest(dist_path));
});

gulp.task('concat-css',['minify-css'], function(){
  return gulp.src([dist_path+'/css/*.css'])
    .pipe(concatcss('concatenated.css'))
    .pipe(gulp.dest(dist_path))
});


gulp.task('lint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify-replace',['concat-css','concat-js','package'], function(){
  return gulp.src('*.html')
    .pipe(concatreplace({
      prefix:'concat',
      base:'../',
      output:{
        css:dist_path+'/css',
        js:dist_path+'/js'
      }
    }))
    .pipe(gulp.dest(target_path));// html 替换后的目录
});

gulp.task('default', ['minify-replace']);



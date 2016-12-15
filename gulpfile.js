'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var gulp_sass = require('gulp-sass');



var imgsrc = './src/img/*';
var imgdist = './img/';

//image copy
gulp.task('image', function() {
    return gulp.src(imgsrc)
        .pipe(gulp.dest(imgdist));
});


//var inputSass = './sass/**/*.scss';
var inputSass = './src/sass/*.scss';

function task_sass() {
    gulp.src(inputSass)
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(gulp.dest('./css'));
}

gulp.task('task_sass', task_sass);


//jsLib copy
gulp.task('jsLib', function() {
    return gulp.src('./src/js/lib/*.js')
        .pipe(gulp.dest('./js/lib'));
});


gulp.task('default', function() {
    runSequence('task_sass','image','jsLib','watch');
});


function watch() {
    gulp.watch(inputSass, ['task_sass']);
}

gulp.task('watch', watch);

(function () {
    'use strict';
    var gulp = require('gulp'),
         jshint = require('gulp-jshint'),
         jscs = require('gulp-jscs'),
         jsFiles = ['*.js', 'src/**/*.js'];
    
    gulp.task('style', function () {
        return gulp.src(jsFiles).pipe(jshint()).pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }));
    });
    
    gulp.task('inject',function(){
        var wiredep = require('wiredep').stream,
            option ={
                bowerJson:require('./bower.json'),
                directory:'./public/lib'
            };
        return gulp.src('./src/views/*html')
                .pipe(wiredep(option))
                .pipe(gulp.dest('./src/views'));
         
    });
}());
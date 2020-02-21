'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('workflow', function () {
    gulp.src('./src/**/*.scss')
    .pipe(gulp.dest('./dist/css/'))
})
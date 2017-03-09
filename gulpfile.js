var gulp = require('gulp');
var pkg = require('./package.json');
var concat = require("gulp-concat");
var header = require("gulp-header");
var replace = require('gulp-replace');
var size = require("gulp-size");
var include = require("gulp-include");
var uglify = require("gulp-uglifyjs");

var comment = '\/*\r\n* CitronJS v' + pkg.version + '\r\n* Copyright 2017, Talon Bragg & Shreyas Lad\r\n* https:\/\/github.com\/CitronJS\/CitronJS\/\r\n* Free to use under the MIT license.\r\n* https:\/\/github.com\/CitronJS\/CitronJS\/blob\/master\/LICENSE.md\r\n*\/\r\n';

gulp.task('transpile', function () {
  return gulp.src(['./src/index.js'])
    .pipe(include())
    .pipe(concat('citron.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['transpile'], function () {
  return gulp.src(['./src/wrapper.js'])
    .pipe(include())
    .pipe(concat('citron.js'))
    .pipe(header(comment + '\n'))
    .pipe(replace('__VERSION__', pkg.version))
    .pipe(size())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', ['build'], function() {
  return gulp.src(['./dist/citron.js'])
    .pipe(uglify())
    .pipe(header(comment))
    .pipe(size())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat('citron.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build', 'minify']);

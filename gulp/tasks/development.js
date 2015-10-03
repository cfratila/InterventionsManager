'use strict';

var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('dev', function(callback) {

  callback = callback || function() {};

  global.isProd = false;

  //TODO add clean task

  // Run all tasks once
  return runSequence(['sass', 'imagemin', 'browserify', 'copyFonts', 'copyIndex', 'copyIcons'], 'watch', callback);

});
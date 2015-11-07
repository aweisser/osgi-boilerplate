'use strict';

var gulp = require('gulp'),
	print = require('gulp-print'),
	gutil = require('gulp-util'),
	shell = require('gulp-shell'),
	del = require("del"),
	fs = require('fs'),
	path = require('path'),
	_ = require('lodash'),
	template = require('string-template'),
	runSequence = require('run-sequence')
;

var params = gutil.env;
var GulpConfig = require('./gulpconfig');

// Call gulp --env=staging to load environment specific config
var Config = _.merge(GulpConfig, GulpConfig[params.env]);

gulp.task('default', function () {
	console.log('This is the GULP Config: ');
	console.log(Config);
	console.log(params);
});

gulp.task('make', function () {
	return gulp.src('')
		.pipe(shell('mvn package -DskipTests=true', {quiet: params.silent}));
});

gulp.task('felix:up', ['felix:clean-cache'], shell.task([template('java -jar bin/felix.jar')], {
	cwd: 'felix'
}));

gulp.task('felix:clean-cache',  function (cb) {
	del('felix/felix-cache/**/*', {force: true}, cb);
});
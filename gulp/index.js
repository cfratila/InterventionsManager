'use strict';

var fs = require('fs'),
	tasks = fs.readdirSync('./gulp/tasks/');

tasks.forEach(function(task) {
	// console.log("task", task, "is running");
  require('./tasks/' + task);
});
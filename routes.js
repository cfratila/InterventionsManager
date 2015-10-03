'use strict';

var JSX = require('node-jsx').install(),
 	React = require('react'),
	TweetsApp = require('./components/TweetsApp.react'),
 	IModel = require('./models/InterventionManager');

module.exports = {

  index: function(req, res) {
  	// Render home view
  	res.render('home');
  },

  page: function(req, res) {
    console.log('page');
  }

}

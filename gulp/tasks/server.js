  'use strict';

  // Require dependencies
  var config = require('../config'),
      http = require('http'),
      express = require('express'),
      exphbs = require('express-handlebars'),
      http = require('http'),
      // routes = require('./routes'),
      mongoose = require('mongoose'),
      gulp = require('gulp'),
      gutil = require('gulp-util'),
      morgan = require('morgan');

  gulp.task('server', function() {
    var app = express();

    // Disable etag headers on responses to avoid another http request
    app.disable('etag');

    // Set handlebars as the templating engine
    app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Connect to mongo database
    // mongoose.connect('mongodb://localhost/intervetion-manager');

    // Log all requests to the console
    app.use(morgan('dev'));
    app.use(express.static(config.buildDir));

    // Index Route
    // app.get('/', routes.index);

    // console.log("routes", routes);
    // Index route
    app.all('/*', function(req, res) {
      res.sendFile('index.html', { root: 'public' });
    });

    // Start webserver if not already running
    var s = http.createServer(app);
    s.on('error', function(err){
      if(err.code === 'EADDRINUSE'){
        gutil.log('Development server is already started at port ' + config.serverport);
      }
      else {
        throw err;
      }
    });

    s.listen(config.serverport);
  });
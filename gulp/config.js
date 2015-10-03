'use strict';

module.exports = {

  'serverport': 3000,

  'scripts': {
    'src': './app/components/*.js',
    'dest': './public/js/'
  },

  'images': {
    'src': './app/images/**/*.{jpeg,jpg,png}',
    'dest': './public/images/'
  },

  'styles': {
    'src': './app/styles/**/*.scss',
    'dest': './public/css/'
  },

  'sourceDir': './app/',

  'buildDir': './public/'
};
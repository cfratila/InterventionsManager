var mongoose = require('mongoose');

// Create a new schema for our tweet data
var schema = new mongoose.Schema({
    intid      : String
  , injured    : Boolean
  , author     : String
  , body       : String
  , date       : Date
});

// Return InterventionManager model based upon the defined schema
module.exports = Intervention = mongoose.model('Intervention', schema);
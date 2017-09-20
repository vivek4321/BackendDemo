// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RiskDetails = new Schema({
  payrate: {
    type: Number,
    required: true
  },
  mtm: {
    type: Number,
    required: true
  },
  cr01: {
    type: Number,
    required: true
  },
  ir01: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('riskDetails', RiskDetails);

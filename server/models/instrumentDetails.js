// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InstrumentDetails = new Schema({
  type: {
    type: String,
    required: true
  },
  referenceEntity: {
    type: String,
    required: true
  },
  creditTemplate: {
    type: String,
    required: true
  },
  restructuring: {
    type: String,
    required: true
  },
  seniority: {
    type: String,
    required: true
  },
  startDate: {
    type: {},
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  paymentFrequency: {
    type: String,
    required: true
  },
  maturityDate: {
    type: {},
    required: true
  },
  dateRoll: {
    type: String,
    required: true
  },
  coupon: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  dayCount: {
    type: String,
    required: true
  },
  recovery: {
    type: String,
    required: true
  },
  buySell: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('instrumentDetails', InstrumentDetails);

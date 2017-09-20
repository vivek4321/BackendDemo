var express = require('express');
var router = express.Router();
var InstrumentDetails = require('../models/instrumentDetails.js');
var RiskDetails = require('../models/riskDetails.js');

router.route('/instrumentDetails')
.post(function(req, res) {
  var instrumentDetails = new InstrumentDetails(req.body);
  instrumentDetails.save(function(err) {
      if (err){
        res.send(err);
      }else{
        res.json({ message: 'instrumentDetails saved' });
      }
    });
});

router.route('/riskDetails')
.post(function(req, res) {
  var riskDetails = new RiskDetails(req.body);
  riskDetails.save(function(err) {
      if (err){
        res.send(err);
      }else{
        res.json({ message: 'riskDetails saved' });
      }
    });
});

module.exports = router;

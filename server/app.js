// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var CONFIG = require('./config/config.js');

mongoose.Promise = global.Promise;
const options = {
  promiseLibrary: global.Promise,
  useMongoClient: true,
};
mongoose.connect(CONFIG.mongoUrl,options);

var app = express();
app.use(cors());

var routes = require('./routes/api.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

module.exports = app;

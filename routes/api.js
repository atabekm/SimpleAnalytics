var express = require('express');
var router = express.Router();

var request = require('request');

var Event = require('../models/Event.js');

var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({ extended: false });

var io = require('../io');

/* GET all events. */
router.get('/', function(req, res, next) {
  Event.find(function(err, events) {
    if (err) return next(err);
    res.json(events);
  })
});

/* POST an event */
router.post('/', parser, function(req, res, next) {
  var result = req.body;
  //console.log(result);

  request({
    method: 'GET',
    url: 'http://ipinfo.io/country'
  }, function(err, getResult, body) {
    if (err) return next(err);

    result['country'] = body.replace('\n', '');

    Event.create(result, function(err, _event) {
      if (err) return next(err);

      console.log(_event);

      io.emit('analytics', { data: _event });
      res.json(_event);
    });
  });
});

module.exports = router;
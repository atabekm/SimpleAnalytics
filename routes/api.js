var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/events');

var Event = require('../models/Event.js');

var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({ extended: false });

/* GET all events. */
router.get('/', function(req, res, next) {
  Event.find(function(err, events) {
    if (err) return next(err);
    res.json(events);
  })
});

/* POST an event */
router.post('/', parser, function(req, res, next) {
  console.log(req.body);
  Event.create(req.body, function(err, _event) {
    if (err) return next(err);
    res.json(_event)
  })
});

module.exports = router;
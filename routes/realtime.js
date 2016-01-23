var express = require('express');
var router = express.Router();

var Event = require('../models/Event.js');

var moment = require('moment');

/* GET realtime page. */
router.get('/', function(req, res, next) {
  Event.find({}).sort('-date').exec(function(err, events) {
    if (err) return next(err);
    res.render('realtime', { events: events, moment: moment });
  });
});

module.exports = router;
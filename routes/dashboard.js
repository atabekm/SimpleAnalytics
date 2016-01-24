var express = require('express');
var router = express.Router();

var Event = require('../models/Event.js');

router.get('/', function(req, res, next) {
  res.render('dashboard');
});

router.get('/daily', function(req, res, next) {
  Event.find({}).sort('date').exec(function(err, events) {
    if (err) return next(err);
    res.render('dashboard_daily', {events: events});
  })
});

router.get('/client', function(req, res, next) {
  Event.find({}).sort('date').exec(function(err, events) {
    if (err) return next(err);
    res.render('dashboard_client', {events: events});
  })
});

router.get('/time', function(req, res, next) {
  Event.find({}).sort('date').exec(function(err, events) {
    if (err) return next(err);
    res.render('dashboard_time', {events: events});
  })
});

router.get('/event', function(req, res, next) {
  Event.find(function(err, events) {
    if (err) return next(err);

    var items = {};
    for (var i = 0; i < events.length; i++) {
      var name = events[i].event_name;
      if (items[name] == undefined) {
        items[name] = 1;
      } else {
        items[name] += 1;
      }
    };

    var array = [];
    var entry = {};
    var keys = Object.keys(items);
    for (var i = 0; i < keys.length; i++) {
      entry['event'] = keys[i];
      entry['val'] = items[keys[i]];
      array.push(entry);
      entry = {};
    };
    array.sort(function(a, b) {
      return b.val - a.val;
    });

    res.render('dashboard_event', {events: array});
  });
});

router.get('/country', function(req, res, next) {
  Event.find(function(err, events) {
    if (err) return next(err);

    var items = {};
    for (var i = 0; i < events.length; i++) {
      var country = events[i].country;
      if (items[country] == undefined) {
        items[country] = 1;
      } else {
        items[country] += 1;
      }
    };

    var array = [];
    var entry = {};
    var keys = Object.keys(items);
    for (var i = 0; i < keys.length; i++) {
      entry['label'] = keys[i];
      entry['value'] = items[keys[i]];
      array.push(entry);
      entry = {};
    };
    array.sort(function(a, b) {
      return b.value - a.value;
    });

    res.render('dashboard_country', {events: array});
  });
});

module.exports = router;
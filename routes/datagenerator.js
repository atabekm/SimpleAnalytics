var express = require('express');
var router = express.Router();

var faker = require('faker');

var Event = require('../models/Event.js');

router.get('/', function(req, res, next) {
  var array = [];
  for (var i = 0; i < 100; i++) {
    var data = {
      event_name: faker.lorem.sentence(),
      client: faker.random.arrayElement(['Web', 'Mobile']),
      date: faker.date.between(new Date(2015,0,20), new Date(2015,0,27)),
      country: faker.address.countryCode()
    };
    array.push(data);
  };
  
  Event.create(array, function(err, _event) {
    if (err) return next(err);

    res.json(_event);
  });
});

module.exports = router;
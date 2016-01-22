var express = require('express');
var router = express.Router();

var sample_data = {number: 123, string: "This is string", bool: true};

/* GET home page. */
router.get('/', function(req, res) {
  res.json(sample_data);
});

module.exports = router;
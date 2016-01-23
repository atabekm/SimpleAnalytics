var express = require('express');
var path = require('path');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

// routes
app.use('/', index);
app.use('/api/event', api);

app.listen(3000);
console.log("Server started");
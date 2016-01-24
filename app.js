var express = require('express');
var path = require('path');

var index = require('./routes/index');
var api = require('./routes/api');
var realtime = require('./routes/realtime');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/events');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

// routes
app.use('/', index);
app.use('/api/event', api);
app.use('/realtime', realtime);

var server = app.listen(3000);
console.log("Server started");

var io = require('./io');
io.attach(server);
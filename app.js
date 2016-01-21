var express = require('express');
var path = require('path');

var index = require('./routes/index')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// routes
app.use('/', index);

app.listen(3000);
console.log("Server started");
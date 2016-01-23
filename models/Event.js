var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  event_name: String,
  client: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', EventSchema);
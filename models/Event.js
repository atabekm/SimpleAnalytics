var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  event_name: String,
  client: String,
  date: { type: Date, default: Date.now },
  country: String,
});

module.exports = mongoose.model('Event', EventSchema);
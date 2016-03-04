var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

mongoose.Promise = require('q').Promise;

db.on('error', function(err) {
	console.error('connection error:', err));
});

db.once('open', function (callback) {
	console.log('connected');
});
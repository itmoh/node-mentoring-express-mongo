var fs = require('fs');

module.exports = function(app) {

	app.engine('ntl', function (filePath, options, callback) { // define the template engine
		fs.readFile(filePath, function (err, content) {
			if (err) return callback(new Error(err));
			// this is an extremely simple template engine
			var rendered = content.toString()
				.replace('#message#', ''+ options.message +'');
			return callback(null, rendered);
		});
	});
}
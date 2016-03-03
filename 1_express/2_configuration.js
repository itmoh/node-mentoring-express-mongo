var express = require('express');
var app = express();

/******locals********************/
app.locals.title = 'My App';

/**********configuration*********************/
app.get('env');
app.set('token', 'express');
app.get('token');
app.enable('jsonp callback');

app.listen(3002, function () {
	console.log('Example app listening on port 3000!');
});

var express = require('express');
var app = express();
require('./ntl')(app);
//http://expressjs.com/en/4x/api.html#app.METHOD

//app.set('view engine', 'jade');
//app.set('view engine', 'ejs');
app.set('view engine', 'ntl');
app.locals.title = 'My App';

app.get('/', function (req, res) {
	res.locals.someText = 'test';
	res.render('test', { message: 'Hello there!'});;
});


app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

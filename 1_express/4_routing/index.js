var express = require('express');
var subItems = require('./sub-items')
var app = express();
//http://expressjs.com/en/4x/api.html#app.METHOD
app.get('/', function (req, res) {
	res.send('GET request to homepage');
});
app.post('/', function (req, res) {
	res.send('POST request to homepage');
});
app.put('/', function (req, res) {
	res.send('PUT request to homepage');
});
app.delete('/', function (req, res) {
	res.send('DELETE request to homepage');
});

app.use('/sub-item', subItems);

/******String************/
app.get('/string', function (req, res) {
	res.send('GET request to string router');
});

/************Path Pattern****************/

app.get('/1_strings?', function (req, res) { // 1_string || 1_strings
	res.send('GET request to path pattern router');
});

app.get('/2_st+ring', function (req, res) { // 2_string || 2_sttring || 2_stttring....
	res.send('GET request to path pattern router');
});

app.get('/3_st*ring', function (req, res) { // 3_string || 3_sttring || 3_sty333ring....
	res.send('GET request to path pattern router');
});

app.get('/4_string(11)+', function (req, res) { // 4_string || 4_string11 || 4_string1111....
	res.send('GET request to path pattern router');
});


/**********Regular Expression******************/

app.use(/\/abc|\/xyz/, function (req, res, next) {
	next();
});

/***********Array***********************************/

app.use(['/abcd', '/xyza', /\/lmn|\/pqr/], function (req, res, next) {
	next();
});

/*********Parameters**********************************/

app.param('id', function (req, res, next, value) {
	console.log('id = ', value);
	next();
});

app.get('/user/:id', function (req, res) {
	console.log(req.params.id);
	res.end();
});

app.get(/\/user\/regexp\/([0-9]*)$/, function (req, res) {
	console.log('regexp param: ' + req.params[0]);
	res.end();
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

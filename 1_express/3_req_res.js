var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.get('/user', function(req, res) {
	console.log(req.app.get("views"));//app - instance of app, which handles
	console.log(req.baseUrl);

	res.end();
});

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res) {
	console.log(req.body);
	//res.json(req.body);
	//res.send(new Buffer('whoop'));
	//res.send({ some: 'json' });
	//res.send('<p>some html</p>');
	//
	//res.status(404)
	//	.send('Sorry, we cannot find that!');
	//
	//res.status(500).send({
	//	error: 'something blew up'
	//});

	res.format({
		text: function(){
			res.send('hey');
		},
		html: function(){
			res.send('<p>hey</p>');
		},
		json: function(){
			res.send({ message: 'hey' });
		}
	});

	//res.redirect('/foo/bar');
	//
	//res.redirect('http://example.com');
	//
	//res.redirect(301, 'http://example.com');
	//
	//res.redirect('../login');
	//
	//res.redirect('back');

	/***************work with headers*********************************/
	//res.set('Content-Type', 'text/plain');
	//
	//res.set({
	//	'Content-Type': 'text/plain',
	//	'Content-Length': '123',
	//	'ETag': '12345'
	//});
	//
	//res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
	//res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	//res.append('Warning', '199 Miscellaneous warning');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

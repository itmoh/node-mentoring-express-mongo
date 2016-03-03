var express = require('express');
var app = express();

app.use(function (req, res, next) {
	console.log('Time:', Date.now());
	next();
});

app.use('/user', function (req, res, next) {
	console.log('Request Type:', req.method);
	next();
});

app.get('/user', function(req, res) {
	res.send('hello user');
});

app.get('/', function(req, res) {
	res.send('hello all');
});

/*****Router as middlewar********************/
var router = express.Router();
router.get('/', function(req, res) {
	res.send('Router: root');
});

router.get('/test', function(req, res) {
	res.send('Router: test');
});

app.use('/router', router);

/*****Application as middlewar********************/
var middlewareApp = express();
middlewareApp.get('/', function(req, res) {
	res.send('Application: root');
});

middlewareApp.get('/test', function(req, res) {
	res.send('Application: test');
});
app.use('/app', middlewareApp);

/**********Error-handling*********************************/

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});


/*********Build in middlewar*******************************/
//https://github.com/expressjs/serve-static
var options = {
	dotfiles: 'ignore',
	extensions: ['txt'],
	index: false,
	maxAge: '1d',
	setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now());
	}
}
app.use('/public', express.static('public', options));

/************usefull middleware*****************************/

//var bodyParser = require('body-parser'); //https://github.com/expressjs/body-parser
//var multer  = require('multer');// https://github.com/expressjs/multer
//var upload = multer({ dest: 'uploads/' })
//var morgan = require('morgan');//https://github.com/expressjs/morgan
//
//app.use(bodyParser.urlencoded({
//	extended: true
//	}));
//app.use(bodyParser.json());
//app.post('/profile', upload.single('avatar'));
//app.use(morgan('combined'));


/************Start application*****************************/
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

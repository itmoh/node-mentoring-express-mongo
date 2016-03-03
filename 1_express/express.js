var express = require('express');
var app = express();

app.get('/test', function (req, res, next) {
  res.write('Hello World!');
  setTimeout(next, 1000);
});

app.get('/test', function (req, res) {
  res.write('Hello World');
  res.end('test');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

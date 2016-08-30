var express = require('express');
var router = express.Router();

router.route('')
	.get(function (req, res) {
		res.send('GET to subItem');
	})
	.post(function (req, res) {
		res.send('POST to subItem');
	})
	.put(function (req, res) {
		res.send('PUT to subItem');
	})
	.delete(function (req, res) {
		res.send('DELETE to subItem');
	});

module.exports = router;
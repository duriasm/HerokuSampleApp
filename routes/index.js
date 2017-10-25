//Render home page
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('index.ejs');
	});

router.get('/button', function(req, res){
	res.render('button.ejs');
	});

module.exports = router;
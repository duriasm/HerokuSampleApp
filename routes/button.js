//Render page when button clicked
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('button.ejs');
	});

module.exports = router;
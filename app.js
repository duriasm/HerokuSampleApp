var express = require('express');
var route = require('./routes')
, index = require('./routes/index')
, button = require('./routes/button');

var app = express();
var port = process.env.PORT;

app.get('/', function (req, res) {
   res.redirect('/home');
})

app.use('/home', index);
app.use('/button', button);

var server = app.listen(port, function () {
   
   console.log("App running.")
})
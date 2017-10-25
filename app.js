var express = require('express');
var route = require('./routes')
, index = require('./routes/index')
, button = require('./routes/button');

var app = express();

app.get('/', function (req, res) {
   res.redirect('/home');
})

app.use('/home', index);
app.use('/button', button);

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("App running.")
})
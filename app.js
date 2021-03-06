var express = require('express');
var route = require('./routes')
, index = require('./routes/index')
, button = require('./routes/button');

var app = express();

app.set('port', (process.env.PORT || 5000))

app.get('/', function (req, res) {
   res.redirect('/home');
})

app.use('/home', index);
app.use('/button', button);

app.listen(app.get('port'), function() {
  console.log("App running");
})
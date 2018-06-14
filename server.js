//import the dependencies
var express = require('express');
var app = express();
var routes = require('./routes/index');
var port = 3000;

//Set the Views directory
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public/'));

//Set the routes
app.use('/', routes);

//Listen on port specified above
app.listen(port, function () {
    console.log('App running on port: ' + port);
});
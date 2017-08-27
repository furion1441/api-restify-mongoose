var express = require('express'),
app = express();
mongoose = require('mongoose');
Task = require('./api/models/bookModel'); //created model loading here
bodyParser = require('body-parser');
var config = require('./config');
// mongoose instance connection url connection 
mongoose.connect(config.dbPath);
var db = mongoose.connection;

//Error Handling
db.on('error', function () {
 console.log('error occured from db');
});

//On Success
db.once('open', function dbOpen() {
 console.log('successfully opened the db');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/bookRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found fellow'})
  });

app.listen(config.port);


console.log('Book RESTful API server started on: ' + config.port);
module.exports = app; // for testing

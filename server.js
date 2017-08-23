var restify = require('restify');
var config = require('./config');
var app = restify.createServer({name:'REST-api'});
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'), //created model loading here
bodyParser = require('body-parser');

mongoose.connect(config.dbPath);

var db = mongoose.connection;

db.on('error', function () {
 console.log('error occured from db');
});

db.once('open', function dbOpen() {
 console.log('successfully opened the db');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

//This works only with express
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found fellow'})
  });

app.listen(config.port, function() {
  console.log('server listening on port number', config.port);
    
});
var http = require('http');
var os   = require('os');
var jf   = require('jsonfile');
var express = require('express');
var serialNumber = require('serial-number');
var app  = express();

var conffile = './config/server.json';
var datafile = './data/db.json';

// Read in config file
var config = jf.readFileSync(conffile);
// Read Data file
//var db = jf.readFileSync(datafile);

// Write data to the db.json for inventory
//jf.writeFileSync('./data/db.json', db);

// Set views folder
app.set('views', __dirname + '/views');
// Set template engine
app.set('view engine', 'jade');
// Set directory to serve from.
// Used more for css, js, images
app.use(express.static(__dirname + '/public'));


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router


// END ROUTES FOR OUR API
// =============================================================================

// Basic route (accessed at GET http://localhost:3737/)
// Just shows the current inventory of the device
app.get('/', function(req, res) {
  res.render('index', { data : db })
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

var server = app.listen(config.port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});

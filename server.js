var http         = require('http');
var os           = require('os');
var jf           = require('jsonfile');
var fs           = require('fs');
var express      = require('express');
var serialNumber = require('serial-number');
var app          = express();
var conffile     = './config/server.json';
// var datafile     = './data/se.sqlite';
var models       = require('./models');
var mysql      = require('mysql');
var bodyparser   = require('body-parser');

// Read in config file
var config = jf.readFileSync(conffile);


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

router.post('/add', bodyparser.json(), function(req, res, next){
  models.Inv.create({
    tag: req.param('tag'),
    serial: req.param('serial'),
    location: req.param('location'),
    hostname: req.param('hostname'),
    laptop: req.param('laptop'),
    os_version: req.param('os_version'),
    memory: req.param('memory'),
    cpu: req.param('cpu'),
    po: req.param('po'),
    cost: req.param('cost')
  }).then(function(invs){
    res.sendStatus(200);
    console.log(invs);
  });
});

// END ROUTES FOR OUR API
// =============================================================================

// Basic route (accessed at GET http://localhost:3737/)
// Just shows the current inventory of the device
app.get('/', function(req, res) {
  models.Inv.findAll().then(function(inv){
    res.render('index', {
      title: 'Inventory',
      data: inv
    });
  });
  //res.render('index', { data : db })
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

models.sequelize.sync().then(function(){
  var server = app.listen(config.port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

  });
});

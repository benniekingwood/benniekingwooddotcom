/*!
 * Bennie Kingwood Dot Com Server
 *
 * Copyright 2014 Bennie Kingwood
 *  (@see package.json)
 */

// required modules
var express 						= require('express')
	, app 								= express();

// configuration
app.configure(function() {
	app.set('port', 5555);
  app.use("/assets", express.static(__dirname + '/assets'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

// root route
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

// start the application listener on the specified port
app.listen(app.get('port'), function() {
	console.log('[INFO] > Bennie Kingwood Dot Com server running on port ' + app.get('port'));
});

var http = require('http');
var request        = require("request");

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  app.get('/wiki/search/:id', function(req, res) {
    console.log("Wiki!");
    var query = req.params.id;
    console.log(query);

    request('https://sandbox-search-api.herokuapp.com/wikisearch?article='+query, 
	    function (error, response, body) {
	    if (!error && response.statusCode == 200) {
		res.send(body) // Show the HTML for the Google homepage. 
	    }
     });

  });

  app.get('/wolfram/search/:id', function(req, res) {
    console.log("Wolfram!");
    var query = req.params.id;
    console.log(query);

    request('https://sandbox-search-api.herokuapp.com/wolframsearch?query='+query,
            function (error, response, body) {
	    if (!error && response.statusCode == 200) {
		res.send(body) // Show the HTML for the Google homepage.                             
	    }
    });
  });

  app.get('/about', function(req, res) {
    res.sendfile('./public/views/about.html');
  });

  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

    // frontend routes =========================================================
    // route to handle all angular requests
};

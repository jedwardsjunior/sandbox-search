var http = require('http');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  app.get('/wiki/search/:id', function(req, res) {
    console.log("Wiki!");
    var query = req.params.id;
    console.log(query);
    url = "sandbox-search-api.herokuapp.com";
    var options = {
	host: url,
	path: '/wikisearch?article='+query,
	method: 'GET'
    };

    console.log(options.path);

    // Call the API
    http.request(options, function(response) {
	res.send(response);
    });
  });

  app.get('/wolfram/search/:id', function(req, res) {
    console.log("Wolfram!");
    var query = req.params.id;
    console.log(query);

    url= "sandbox-search-api.herokuapp.com";
    var options = {
        host: url,
        path: '/wolframsearch?query='+query,
        method: 'GET'
    };

    console.log(options.path);

    // Call the API
    http.request(options, function(response) {
	    res.send(response);
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

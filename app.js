var app, server,
    express = require('express'),
    path = require('path'),
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000,
    root = path.resolve(__dirname, '.');

var http = require('http');
    
app = express();
app.use(function(req, res, next) { console.log(req.url); next(); });
app.use(express.static(root + '/public'));

http.createServer(app).listen(port, function () {
  console.log(""); // for blank line for readability
  console.log("Express server listening on port " + port);
  console.log(""); // for blank line for readability
  console.log("Server running successfully");
  // only return message to register in Bot Framework if it is set to something other than your locally running instance
});
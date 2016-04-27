var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello world\n");

  console.log('request received');
})

server.listen(8000);

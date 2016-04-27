var http = require('http');
var url = require('url');

var routes = {
  '/api/parsetime': function (d) {
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    }
  },

  '/api/unixtime': function (d) {
    return {
      unixtime: d.getTime()
    }
  }
}

var server = http.createServer(function (request, response) {
  var params = url.parse(request.url, true);
  var date = new Date(params.query.iso);
  var result = routes[params.pathname](date);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(result));
});

server.listen(process.argv[2]);

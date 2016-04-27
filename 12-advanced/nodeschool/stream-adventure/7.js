var http = require('http');
var fs = require('fs');
var through = require('through2');

var upcase = function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

var end = function (done) {
  done();
}

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
      req.pipe(through(upcase, end)).pipe(res);
    }
});

server.listen(process.argv[2]);

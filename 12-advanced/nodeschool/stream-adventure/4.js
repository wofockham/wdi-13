var fs = require('fs');
var through = require('through2');

var upcase = function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

var tr = through(upcase);

process.stdin.pipe(tr).pipe(process.stdout);

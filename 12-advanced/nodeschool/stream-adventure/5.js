var through2 = require('through2');
var split = require('split');

var lineCount = 0;
process.stdin
  .pipe(split())
  .pipe(through2(function (line, _, next) {
    line = line.toString();
    if (lineCount++ % 2 === 0) {
      console.log(line.toLowerCase());
    } else {
      console.log(line.toUpperCase());
    }
    next();
  }));

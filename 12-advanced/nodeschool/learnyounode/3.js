var fs = require('fs');

var filename = process.argv[2];

var buffer = fs.readFileSync(filename);
var lines = buffer.toString().split('\n').length - 1;
console.log(lines);

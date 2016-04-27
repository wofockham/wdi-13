var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, function (err, data) {
  if (err) return err;

  var lines = data.toString().split('\n').length - 1;
  console.log(lines);
});

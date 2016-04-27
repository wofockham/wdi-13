var fs = require('fs');

var directory = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(directory, function (err, files) {
  if (err) return err;

  files.forEach(function (file) {
    if (file.endsWith(filter)) {
      console.log(file);
    }
  });
});

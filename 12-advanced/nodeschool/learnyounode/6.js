var extensionFilter = require('./extensionFilter');

var directory = process.argv[2];
var extension = process.argv[3];

extensionFilter(directory, extension, function (err, files) {
  if (err) return err;
  files.forEach(function (file) {
    console.log(file);
  })
});

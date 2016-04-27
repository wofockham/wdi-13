var fs = require('fs');

module.exports = function (directory, extension, callback) {
  var extension = '.' + extension;

  fs.readdir(directory, function (err, data) {
    if (err) return callback(err);

    data = data.filter(function (file) {
      return file.endsWith(extension);
    });

    callback(null, data);
  });
};

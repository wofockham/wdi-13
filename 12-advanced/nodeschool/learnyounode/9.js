var http = require('http');

var urls = process.argv.slice(2, 5);

var completed = 0;
var chunks = [];

urls.forEach(function (url, i) {
  chunks[i] = ''
  http.get(url, function (response) {
    response.on('data', function (data) {
      chunks[i] += data.toString();
    });
    response.on('end', function () {
      completed++;
      if (completed >= 3) {
        console.log(chunks.join('\n'));
      }
    });
  });
});

var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  var allData = '';
  response.on('data', function (data) {
    allData += data.toString();
  });
  response.on('end', function () {
    console.log(allData.length);
    console.log(allData);
  })
});

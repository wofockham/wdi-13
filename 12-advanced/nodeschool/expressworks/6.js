var express = require('express');
var crypto = require('crypto');

var app = express();

app.put('/message/:sha1', function (req, res) {
  var sha1 = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.sha1)
    .digest('hex');
  res.end(sha1);
});

app.listen(process.argv[2]);

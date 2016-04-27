var net = require('net');
var server = net.createServer(function (socket) {
  var pad = function (input) {
    input = input.toString();
    return input.length === 1 ? '0' + input : input;
  }
  var now = new Date();
  var nowStamp = [now.getFullYear(),
                  '-',
                  pad(now.getMonth() + 1),
                  '-',
                  pad(now.getDate()),
                  ' ',
                  pad(now.getHours()),
                  ':',
                  pad(now.getMinutes()),
                  '\n'
                  ].join('');
  socket.write(nowStamp);
  socket.end();
});
server.listen(process.argv[2]);

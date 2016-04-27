var concat = require('concat-stream');

process.stdin.pipe(concat(function (body) {
  var output = body.toString().split('').reverse().join('');
  console.log(output);
}));

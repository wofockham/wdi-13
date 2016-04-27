var fs = require('fs');

var filename = process.argv[2];
fs.createReadStream(filename).pipe(process.stdout);

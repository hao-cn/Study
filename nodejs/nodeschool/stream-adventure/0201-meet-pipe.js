var fs = require("fs")
var input = process.argv[2]
fs.createReadStream(input).pipe(process.stdout);
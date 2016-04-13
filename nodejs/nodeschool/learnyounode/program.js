var fs = require("fs"); // import file system module
var argv = process.argv; // get the arguments

var filePath = argv[2]; // get the file Path
var buf = fs.readFileSync(filePath); // read content from file
var tmp = buf.toString(); // turn Buffer to String
var lines = tmp.split("\n"); // split string by "\n"

//for(var i = 0 ; i < lines.length ; i ++){
//	console.log(lines[i]);
//}

console.log(lines.length-1);

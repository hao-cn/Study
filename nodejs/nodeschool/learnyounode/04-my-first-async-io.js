var fs = require("fs"); // import file system module
var argv = process.argv; // get the arguments

var filePath = argv[2]; // get the file Path

/* solution 1: return buffer */
fs.readFile(filePath,function countLine(err,data){
	if(err != null){
		console.log("Err in fs.readFile!");
	}else{
		var tmp = data.toString();
		var lines = tmp.split("\n");
		console.log(lines.length-1);
	}
});

/* solution 2: return string */
// fs.readFile(filePath,'utf8', function countLine(err,data){
// 	if(err != null){
// 		console.log("Err in fs.readFile!");
// 	}else{
// 		var lines = data.split("\n");
// 		console.log(lines.length-1);
// 	}
// });

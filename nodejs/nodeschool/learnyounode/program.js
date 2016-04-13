var fs = require("fs"); // load file system module
var path = require("path"); // load path module
var argv = process.argv; // get the arguments

var dir = argv[2]; // get the dir
var filtered = argv[3]; // get the filtered type name


fs.readdir(dir, (err,data) => {
	if(err != null){
		console.log("Err in fs.readdir!");
	}else{
		for(int i = 0 ; i < data.length ; i ++){
			var file = data[i];
			var extname = path.extname(file) 
		}
	}
});

var fs = require("fs"); // load file system module
var path = require("path"); // load path module
var argv = process.argv; // get the arguments

var dir = argv[2]; // get the dir
var filtered = argv[3]; // get the filtered type name


fs.readdir(dir, function (err,files) {
	if(err != null){
		console.log("Err in fs.readdir!");
	}else{
		for(var i = 0 ; i < files.length ; i ++){
			var file = files[i];
			// console.log(file);
			var extname = path.extname(file).split(".")[1];
			if(extname == filtered)
				console.log(file);
		}
	}
});

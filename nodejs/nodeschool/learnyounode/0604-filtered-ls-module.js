var fs = require("fs"); // load file system module
var path = require("path"); // load path module

function filteredls(dir, filtered, callback){
	if(dir != null){
		fs.readdir(dir, function (err,list) {
			if(err != null){
				callback(err);
			}else{
				
			 	list = list.filter(function (file){
			 		if(path.extname(file).split(".")[1] == filtered)
						return true;
					// return path.extname(file) === '.' + filtered  
				});
				
				callback(null,list)
			}
		});
	}else{
		callback("dir path is wrong！");
	}
}


exports.filteredls = filteredls;
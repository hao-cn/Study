var fs = require("fs"); // load file system module
var path = require("path"); // load path module

function filteredls(dir, filtered, callback){
	if(dir != null){
		fs.readdir(dir, function (err,files) {
			if(err != null){
				callback(err);
			}else{
				var data = []; // init arrays
				for(var i = 0 ; i < files.length ; i ++){
					var file = files[i];
					// console.log(file);
					var extname = path.extname(file).split(".")[1];
					if(extname == filtered)
						data[data.length] = file;
				}
				callback(null,data)
			}
		});
	}else{
		callback("dir path is wrong！");
	}
}


exports.filteredls = filteredls;
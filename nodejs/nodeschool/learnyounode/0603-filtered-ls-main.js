var mymodule = require("./0604-filtered-ls-module.js"); // load my module

mymodule.filteredls(process.argv[2],process.argv[3],function (err,list){
	if(err != null){
		console.log(err);
	}else{
		list.forEach(function (file){
			console.log(file);
		});
	}
});

var http = require("http");

http.get(process.argv[2],function (response){
		var str = "";
		response.on("data", function (data){
			str += data.toString();
		});

		response.on("end", function (){
			console.log(str.split("").length);
			console.log(str);
		});		
		
	} 
);
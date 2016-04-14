var http = require("http");

var array = [];
var count = 0;

function get(url, i, finish){
	http.get(url,function (response){
		var str = "";
		response.on("data", function (data){
			str += data.toString();
		});

		response.on("end", function (){
			array[i] = str;
			finish();
		});		
	} 
);
}

for(var i = 2 ; i < process.argv.length ; i ++){
	get(process.argv[i],i-2,function finish(){
		count --;
		if(count == 0){
			for(var i = 0 ; i < array.length ; i ++){
				console.log(array[i]);
			}
		}
	});
	count ++;
}
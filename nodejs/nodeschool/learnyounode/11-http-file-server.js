var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
	/** create src stream **/
	var src = fs.createReadStream(process.argv[3]);

	/** output the file thought pipe **/
	src.pipe(response);
}).listen(Number(process.argv[2]));	


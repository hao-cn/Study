var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
	if (request.method != 'POST') return request.end('send me a POST\n');

	/** receive data chunk **/
	var postData = "";
	request.addListener("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    /** respond when received all data by translate data to string and using toUpperCase function **/
	request.addListener("end", function (postDataChunk) {
		response.write(postData.toString().toUpperCase());
        response.end();
    });

}).listen(Number(process.argv[2]));	


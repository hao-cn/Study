var http = require("http");
var nowdate = require("./1001-nowdate.js");

http.createServer(function(req, res){
	res.writeHead(200, {'Content-type' : 'text/html'});
	res.write(nowdate.getNowFormatDate());
	res.end();
}).listen(Number(process.argv[2]));	


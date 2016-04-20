var http = require("http");
var through = require("through2");
http.createServer(function listener(request, respond) {
    if (request.method === 'POST') {
        request.pipe(through(function write(buffer, _, next) {
       		this.push(buffer.toString().toUpperCase());
        	next();
    	})).pipe(respond);
	}
}).listen(process.argv[2]);

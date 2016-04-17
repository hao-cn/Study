var http = require('http');
var url = require('url');

http.createServer(function(request, respond) {
	/** request method filter **/
    if (request.method == 'GET') {
        respond.writeHead(200, { 'Content-Type': 'application/json' })

        /** get parsed url **/
        var parsedUrl = url.parse(request.url, true);
        /** path filter **/
        if (parsedUrl.pathname == '/api/parsetime' || parsedUrl.pathname == '/api/unixtime') {
        	/** get result by parsedUrl **/
        	var result = handle(parsedUrl);
        	/** write result in JSON formate **/
            respond.end(JSON.stringify());
        } else {
            respond.end('\n')
        }
    }
}).listen(Number(process.argv[2]));

function handle(parsedUrl) {
    /** parse iso time formate **/
    var isodate = parsedUrl.query.iso;
    /** translate ISO formate into unixtime **/
    var unixtime = Date.parse(isodate);

    /** handle route by path **/
    if (parsedUrl.pathname == '/api/parsetime') {
    	/** get detail information about time **/
    	var date = new Date(unixtime);
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

        return {
            "hour": hours,
            "minute": minutes,
            "second": seconds
        }
    } else {
        /** get unix time **/
        return {
            "unixtime": unixtime
        }
    }
}

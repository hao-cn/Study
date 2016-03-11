function route(pathname,factory,response,postData) {
	if (typeof factory[pathname] === 'function') {
    	factory[pathname](response,postData);
  	} else {
	  	console.log("No request handler found for " + pathname);
	    response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();
  	}
}

exports.route = route;
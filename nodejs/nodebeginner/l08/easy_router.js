function route(pathname,factory,response) {
	if (typeof factory[pathname] === 'function') {
    	factory[pathname](response);
  	} else {
  		response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write("404 not found!");
	    response.end();
  	}
}

exports.route = route;
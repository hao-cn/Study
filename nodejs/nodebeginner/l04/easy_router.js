function route(pathname,factory) {
	console.log("About to route a request for " + pathname);
	if (typeof factory[pathname] === 'function') {
    	factory[pathname]();
  	} else {
    	console.log("No request handler found for " + pathname);
  	}
}

exports.route = route;
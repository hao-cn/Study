function route(pathname,factory) {
	if (typeof factory[pathname] === 'function') {
    	return factory[pathname]();
  	} else {
    	return "404 not found!";
  	}
}

exports.route = route;
var http = require("http");
var url = require("url");

function start(route,factory) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    var postData = "";

    request.setEncoding("utf8"); //setting the encoding 
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });// add listener, and this listener called when a new chunk of data was received
	request.addListener("end", function() {
	  route(pathname, factory, response, postData);
	});// add listener, and this listener called when all chunk of data have been received
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;    
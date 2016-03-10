var exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called.");
    sleep(10000);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("The respond for start");
    response.end();
}

function end(response){
    console.log("Request handler 'end' was called.");
    var content = "empty";
    exec("ls -lah", function (error, stdout, stderr) {
    	content = stdout;
  	});
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("The respond for end and content is: " + content);
    response.end();
}

function others(response){
    console.log("Request handler 'others' was called.");
    var content = "empty";
    exec("ls -lah", function (error, stdout, stderr) {
        content = stdout;
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("The respond for others and content is: " + content);
        response.end();
    });
}

function body(response){
    console.log("Request handler 'body' was called.");
    
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("A upload request");
    response.end();
}


function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

exports.start = start;
exports.end = end;
exports.others = others;
exports.body = body;





var exec = require("child_process").exec;

function start(){
    console.log("Request handler 'start' was called.");
    sleep(10000);
    return "The respond for start";
}

function end(){
    console.log("Request handler 'end' was called.");
    var content = "empty";
    exec("ls -lah", function (error, stdout, stderr) {
    	content = stdout;
  	});
    return "The respond for end and content is: " + content;
}

function others(){
    console.log("Request handler 'others' was called.");
    return "The respond for others";
}

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

exports.start = start;
exports.end = end;
exports.others = others;

var concat = require("concat-stream");
process.stdin.pipe(concat(function(body) {
	var content = body.toString();
    var array = content.split("");
    var rarray = array.reverse();
    process.stdout.write(rarray.join(""));
}));
var through = require("through2")
var split = require("split")
var count = 0;
var stream = through(
	function (buffer, encoding, next) {
		var lines = buffer.toString().split("\n");
		for(var i = 0 ; i < lines.length - 1 ; i ++){
			if(count % 2 == 0)
	        	this.push(lines[i].toLowerCase()+"\n");
	        else
	        	this.push(lines[i].toUpperCase()+"\n");
	        count ++
		}
        next();
    }
)

process.stdin.pipe(stream).pipe(process.stdout);
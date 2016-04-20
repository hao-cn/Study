var through = require("through2");
var trumpet = require("trumpet");
var tr = trumpet();
var loud = tr.selectAll(".loud").createStream();
loud.pipe(through(function (buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
})).pipe(loud);
process.stdin.pipe(tr).pipe(process.stdout);

// stream.pipe().pipe(stream);
// stream.pipe(process.stdout);
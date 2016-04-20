var through = require("through2")
var split = require("split")
var count = 0;
var stream = through(
    function(buffer, encoding, next) {
        if (count % 2 == 0)
            this.push(buffer.toString().toLowerCase() + "\n");
        else
            this.push(buffer.toString().toUpperCase() + "\n");
        count++
        next();
    }
)

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);

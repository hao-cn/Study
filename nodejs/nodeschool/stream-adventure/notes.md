# Stream Adventure

Learn to compose streaming interfaces with .pipe().

## 1 Beep Boop
Just to make sure everything is working, just write a `program.js` that outputs the string "beep boop" with a `console.log()`.

<b>My solution</b>

```
console.log('beep boop');
```

## 2 Meet pipe
You will get a file as the first argument to your program (process.argv[2]).

Use `fs.createReadStream()` to pipe the given file to `process.stdout`.

`fs.createReadStream()` takes a file as an argument and returns a readable stream that you can call `.pipe()` on. Here's a readable stream that pipes its
data to `process.stderr`:

    var fs = require('fs');
    fs.createReadStream('data.txt').pipe(process.stderr);

Your program is basically the same idea, but instead of `'data.txt'`, the filename comes from `process.argv[2]` and you should pipe to stdout, not stderr.

<b>My solution</b>

```
var fs = require("fs")
var input = process.argv[2]
fs.createReadStream(input).pipe(process.stdout);
```

<b>Point</b>

+ use `use.createReadStream` to create stream object from file
+ use `src.pipe(dst)` method to pipe content from src to dst
+ `process.stdout` the standard output, stream object
+ `process.stdout` the standard error output, stream object

## Input and output
Take data from `process.stdin` and pipe it to `process.stdout`.

With `.pipe()`. `process.stdin.pipe()` to be exact.

Don't overthink this.

<b>My solution</b>

```
process.stdin.pipe(process.stdout);
```

<b>Point</b>

+ `process.stdin` the standard input, stream object

## Transform
Convert data from `process.stdin` to upper-case data on `process.stdout` using the `through2` module.

To get the `through2` module you'll need to do:

    npm install through2

A transform stream takes input data and applies an operation to the data to produce the output data.

Create a through stream with a `write` and `end` function:

    var through = require('through2');
    var stream = through(write, end);

The `write` function is called for every buffer of available input:

    function write (buffer, encoding, next) {
        // ...
    }

and the `end` function is called when there is no more data:

    function end () {
        // ...
    }

Inside the write function, call `this.push()` to produce output data and call `next()` when you're ready to receive the next chunk:

    function write (buffer, encoding, next) {
        this.push('I got some data: ' + buffer + '\n');
        next();
    }

and call `done()` to finish the output:

    function end (done) {
        done();
    }

`write` and `end` are both optional.

If `write` is not specified, the default implementation passes the input data to
the output unmodified.

If `end` is not specified, the default implementation calls `this.push(null)` to close the output side when the input side ends.

Make sure to pipe `process.stdin` into your transform stream and pipe your transform stream into `process.stdout`, like this:

    process.stdin.pipe(tr).pipe(process.stdout);

To convert a buffer to a string, call `buffer.toString()`.

<b>My solution</b>

Pipe content from process.stdin input process.stdout, at the same time use through2 to transform lowercase into uppercase.

```
var through = require("through2")
var stream = through(
	function (buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase()a);
        next();
    }, 
    function end (done) {
        done();
    }
)

process.stdin.pipe(stream).pipe(process.stdout)
```

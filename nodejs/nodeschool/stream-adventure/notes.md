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
# Learnyounode

Learn the basics of node: asynchronous i/o, http.

## Hwllo World
Write a program that prints the text "HELLO WORLD" to the console (stdout).  
  
Use log function.

<b>Challenge:</b>

```
console.log("HELLO WORLD");
```

## Bady steps
Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

The value of argv in process.

Create a js file with following code.

```
// process-argv.js
console.log(process.argv);
```

Run it in terminal with some arguments.

```
node process-argv.js 1991 hyang WOW
```

The first element of the process.argv array is always 'node', and the second element is always the path to your js file, the left are the arguments you input.

```
[ 'node',
  '/Users/hyang/Documents/workspace/Study/nodejs/nodeschool/learnyounode/process-argv.js',
  '1991',
  'hyang',
  'WOW' ]
```

<b>Challenge:</b>
Calucalte the sum of arguments.

```
var sum = 0;
var argv = process.argv;
for(var i = 2 ; i < argv.length ; i ++){
	sum += Number(argv[i]); 
	// sum += argv[i]; // this method cannot get the right answer, the sum will be a string since every arguments are string.
}
console.log(sum);
```

## My firsr I/O
Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.  
   
The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]). You do not need to make your own test file.  


```
var fs = require("fs"); // import file system module
var argv = process.argv; // get the arguments

var filePath = argv[2]; // get the file Path
var buf = fs.readFileSync(filePath); // read content from file
var tmp = buf.toString(); // turn Buffer to String
var lines = tmp.split("\n"); // split string by "\n"

//for(var i = 0 ; i < lines.length ; i ++){
//	console.log(lines[i]);
//}

console.log(lines.length-1); // I do not know why need minius one!!!

```

## My first Aysn I/O
Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.  

The full path to the file to read will be provided as the first command-line argument.  

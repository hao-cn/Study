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

```
var fs = require("fs"); // import file system module
var argv = process.argv; // get the arguments

var filePath = argv[2]; // get the file Path

/* solution 1: return buffer */
fs.readFile(filePath,function countLine(err,data){
	if(err != null){
		console.log("Err in fs.readFile!");
	}else{
		var tmp = data.toString();
		var lines = tmp.split("\n");
		console.log(lines.length-1);
	}
});

/* solution 2: return string */
// fs.readFile(filePath,'utf8', function countLine(err,data){
// 	if(err != null){
// 		console.log("Err in fs.readFile!");
// 	}else{
// 		var lines = data.split("\n");
// 		console.log(lines.length-1);
// 	}
// });

```

## Filtered LS
Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.  
   
For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.  
   
The list of files should be printed to the console, one file per line. You must use asynchronous I/O.  

```
var fs = require("fs"); // load file system module
var path = require("path"); // load path module
var argv = process.argv; // get the arguments

var dir = argv[2]; // get the dir
var filtered = argv[3]; // get the filtered type name


fs.readdir(dir, function (err,files) {
	if(err != null){
		console.log("Err in fs.readdir!");
	}else{
		for(var i = 0 ; i < files.length ; i ++){
			var file = files[i];
			// console.log(file);
			var extname = path.extname(file).split(".")[1];
			if(extname == filtered)
				console.log(file);
		}
	}
});

```


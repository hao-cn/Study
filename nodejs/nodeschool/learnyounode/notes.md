# Learnyounode

Learn the basics of node: asynchronous i/o, http.

## Hwllo World
<b>Program</b>

Write a program that prints the text "HELLO WORLD" to the console (stdout).  

<b>Solution</b>

```
console.log("HELLO WORLD");
```

<b>Point</b>

+ Use
```
console.log("");
```
to print something into console


## Bady steps
<b>Program</b>

Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

<b>Solution</b>

```
var sum = 0;
var argv = process.argv;
for(var i = 2 ; i < argv.length ; i ++){
	sum += Number(argv[i]); 
	// sum += argv[i]; // this method cannot get the right answer, the sum will be a string since every arguments are string.
}
console.log(sum);
```

<b>Point</b>

+ Use
```
process.argv
```
to get the parameters from terminal

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


## My firsr I/O
<b>Program</b>

Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.  
   
The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]). You do not need to make your own test file.  

<b>Solution</b>

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

<b>Point</b>

+ The 
```
var module = require("moudlename")
``` is used to load module from node.js.
+ The "fs" module is used to deal with file system.
+ All method which name is end with "Sync" is the synchronize method.	Otherwise, they are asynchronous method.
+ Buffer object has a method 
```
toString()
```, which can be used to translate buffer into string object.
+ string object has split method and length method
```
var lines = tmp.split("\n");
```
```
var length = str.length;
```

## My first Aysn I/O
<b>Problem</b>

Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.  

The full path to the file to read will be provided as the first command-line argument.  

<b>Solution</b>

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

<b>Point</b>

+ use async method
+ write callback function
+ parameters of readFile method


## Filtered LS
<b>Problem</b>

Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.  
   
For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.  
   
The list of files should be printed to the console, one file per line. You must use asynchronous I/O.  

<b>Solution</b>

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

<b>Point</b>

+ use path module to parase the file path, get the extname for a path
+ use ```
fs.readdir
``` to get the files list of a specific dir

## Make it modular
<b>Problem</b>

This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.  

Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use  asynchronous I/O.  

You must write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to your program. Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to make your filter work.  

The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. In this exercise, the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to 
```
fs.readdir()
```, 
the callback must be called with the error, and only the error, as the first argument.  

You must not print directly to the console from your module file, only from your original program.  
   
In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.  

These four things are the contract that your module must follow.  

+ Export a single function that takes exactly the arguments described.      
+ Call the callback exactly once with an error or some data as described.     
+ Don't change anything else, like global variables or stdout.              
+ Handle all the errors that may occur and pass them to the callback.     

<b>Solution</b>

my solution:

module implemented most work for this problem

```
var fs = require("fs"); // load file system module
var path = require("path"); // load path module

function filteredls(dir, filtered, callback){ // use a callback function as a parameter
	if(dir != null){
		fs.readdir(dir, function (err,files) {
			if(err != null){
				callback(err);
			}else{
				var data = []; // init arrays
				for(var i = 0 ; i < files.length ; i ++){
					var file = files[i];
					// console.log(file);
					var extname = path.extname(file).split(".")[1];
					if(extname == filtered)
						data[data.length] = file;
				}
				callback(null,data)
			}
		});
	}else{
		callback("dir path is wrong！");
	}
}

exports.filteredls = filteredls; // export the method
```

The main file

```
var mymodule = require("./0602-filtered-ls-module.js"); // load my module

mymodule.filteredls(process.argv[2],process.argv[3],function (err,data){
	if(err != null){
		console.log(err);
	}else{
		for(var i = 0 ; i < data.length ; i ++){
			console.log(data[i]);
		}
	}
});
```

expect solution

module

```
var fs = require("fs"); // load file system module
var path = require("path"); // load path module

function filteredls(dir, filtered, callback){
	if(dir != null){
		fs.readdir(dir, function (err,list) {
			if(err != null){
				callback(err);
			}else{
				
			 	list = list.filter(function (file){
			 		if(path.extname(file).split(".")[1] == filtered)
						return true;
					// return path.extname(file) === '.' + filtered  
				});
				
				callback(null,list)
			}
		});
	}else{
		callback("dir path is wrong！");
	}
}


exports.filteredls = filteredls;
```

main file

```
var mymodule = require("./0604-filtered-ls-module.js"); // load my module

mymodule.filteredls(process.argv[2],process.argv[3],function (err,list){
	if(err != null){
		console.log(err);
	}else{
		list.forEach(function (file){
			console.log(file);
		});
	}
});

```

<b>Point</b>

+ how to export a module
+ how to load your module
+ use callback function as a parameter, and use it when the work has been done
+ use the ```
foreach
``` and ```
filter
``` methods for a list variable.

## 
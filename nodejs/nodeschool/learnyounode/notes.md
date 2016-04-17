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

+ how to export a module
+ how to load your module
+ use callback function as a parameter, and use it when the work has been done
+ use the ```
foreach
``` and ```
filter
``` methods for a list variable.


## Http client

<b>Problem</b>

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout). 

<b>Solution</b>

my solution

```
var http = require("http");

http.get(process.argv[2],function (response){
		response.on("data", function (data){
			console.log(data.toString());
		});
	} 
);
```

expect solution

```
var http = require('http');  
http.get(process.argv[2], function (response) {  
   response.setEncoding('utf8')  
   response.on('data', console.log)  
   response.on('error', console.error)       
}); 
```

<b>Point</b>

+ use http module
+ the ```
respone.on()
``` method

## Http collect

<b>Problem</b>

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console  (stdout).  
   
The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.  
   
<b>Solution</b>

my solution

```
var http = require("http");
http.get(process.argv[2],function (response){
		var str = "";
		
		// called when received data
		response.on("data", function (data){
			str += data.toString();
		});
		
		// called when the reach the end
		response.on("end", function (){
			console.log(str.split("").length);
			console.log(str);
		});		
		
	} 
);
```

expert solution

```
var http = require('http');  
var bl = require('bl');
       
http.get(process.argv[2], function (response) {  
   response.pipe(bl(function (err, data) {  
      if (err)  
         return console.error(err)  
      data = data.toString()  
      console.log(data.length)  
      console.log(data)  
    }))    
});
```

<b>Point</b>

+ how to know the translation end and use it
+ use ```
bl
``` module


## Juggling async 

<b>Problem</b>

This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.  
   
You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.  

<b>Solution</b>

my solution

```
var http = require("http");

var array = []; // store the got string
var count = 0; // count the arrived number of string

/** 
url: the url we want to get
i: the index of this url
finish: a callback function when this url is end
 **/
function get(url, i, finish){
	http.get(url,function (response){
		var str = "";
		response.on("data", function (data){
			str += data.toString();
		});

		response.on("end", function (){
			array[i] = str;
			finish();
		});		
	});
}

for(var i = 2 ; i < process.argv.length ; i ++){
	get(process.argv[i],i-2,function finish(){
		count --;
		if(count == 0){
			for(var i = 0 ; i < array.length ; i ++){
				console.log(array[i]);
			}
		}
	});
	count ++;
}

```

expect solution

```
var http = require('http')  
var bl = require('bl')  
var results = []  
var count = 0  
       
function printResults () {  
	for (var i = 0; i < 3; i++)  
    console.log(results[i])  
}  
       
function httpGet (index) {  
	http.get(process.argv[2 + index], function (response){  
		response.pipe(bl(function (err, data) {  
       	if (err)  
          	return console.error(err)  
       	
       	results[index] = data.toString()  
          count++  
       	
       	if (count == 3)  
          	printResults()  
      }))  
   })  
}  

for (var i = 0; i < 3; i++)  
	httpGet(i)  
```

<b>Point</b>

+ how to control the flow of program even with async method


## Time server

<b>Problem</b>

Write a TCP time server!  
   
Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
     
followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
After sending the string, close the connection.  
   

<b>Solution</b>

my solution 1:

main file, but did ont pass the verification,
since this code present the result by http rather than socket.

```
var http = require("http");
var nowdate = require("./1001-nowdate.js");

http.createServer(function(req, res){
	res.writeHead(200, {'Content-type' : 'text/html'});
	res.write(nowdate.getNowFormatDate());
	res.end();
}).listen(Number(process.argv[2]));	
```

method to get current date:

```
/** 1001-nowdate.js **/
function getNowFormatDate() {
	/** get value **/
    var date = new Date();
    var year = date.getFullYear(); 
    var month = date.getMonth() + 1; // start from 0
    var day = date.getDate(); 

    var hour = date.getHours();
    var minutes = date.getMinutes();

    var first = year + "-" + format(month) + "-" + format(day);
    var second = format(hour) + ":" + format(minutes);

    return first + " " + second;
}

function format(value){
    return (value < 10 ? "0" : "") + value;
}

exports.getNowFormatDate = getNowFormatDate;

```

my solution 2:

```
var net = require("net");
var nowdate = require("./1001-nowdate.js");

net.createServer(function(socket){
	/** method 1 **/
	// socket.write(nowdate.getNowFormatDate()+"\n");
	// socket.end();

	/** method 2 **/
	socket.end(nowdate.getNowFormatDate()+"\n");

}).listen(Number(process.argv[2]));	
```

expect solution:

```
var net = require('net')  
       
function zeroFill(i) {    
	return (i < 10 ? '0' : '') + i  
}  
       
function now () {  
	var d = new Date()  
   return d.getFullYear() + '-'  
   		+ zeroFill(d.getMonth() + 1) + '-'  
       + zeroFill(d.getDate()) + ' '  
       + zeroFill(d.getHours()) + ':'  
       + zeroFill(d.getMinutes())  
}  
       
var server = net.createServer(function (socket) {  
	socket.end(now() + '\n')  
})  
       
server.listen(Number(process.argv[2]))  
```

<b>Point</b>

+ net module and create sever
+ date module and get value


## Http file server

<b>Problem</b>

Write an HTTP server that serves the same text file for each request it receives.  
   
Your server should listen on the port provided by the first argument to your program.  
   
You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.

<b>Solution</b>

my solution

```
var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
	/** create src stream **/
	var src = fs.createReadStream(process.argv[3]);

	/** output the file thought pipe **/
	src.pipe(response);
}).listen(Number(process.argv[2]));	
```

<b>Point</b>

+ http module and create server
+ request, response and file stream all are stream object, and how to use pipe ```
src.pipe(dst); // pipe content from src stream into dst stream
```

## Http Uppercaser

<b>Problem</b>

Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.  
   
Your server should listen on the port provided by the first argument to your program

<b>Solution</b>

my solution

```
var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
	if (request.method != 'POST') return request.end('send me a POST\n');

	/** receive data chunk **/
	var postData = "";
	request.addListener("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    /** respond when received all data by translate data to string and using toUpperCase function **/
	request.addListener("end", function (postDataChunk) {
		response.write(postData.toString().toUpperCase());
        response.end();
    });

}).listen(Number(process.argv[2]));	
```

expect solution

```
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function(req, res) {
    if (req.method != 'POST')
        return res.end('send me a POST\n')

    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(Number(process.argv[2]))
```

<b>Point</b>

+ get the method of request, there are only two methods ```
POST
``` and ```
GET
```
+ a package named 
```
through2-map
```
+ add listener to request when two action are activated ```
data
``` and ```
end
```

## Http json api server

<b>Problem</b>

Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

    /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties.

For example:

    {
        "hour": 14,
        "minute": 23,
        "second": 15
    }

Add second endpoint for the path '/api/unixtime'
which accepts the same query string but returns UNIX epoch time in milliseconds(the number of milliseconds since 1 Jan 1970 00: 00: 00 UTC) under the property 'unixtime'.

For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.

<b>Solution</b>

my solution:

```
var http = require('http');
var url = require('url');

http.createServer(function(request, respond) {
	/** request method filter **/
    if (request.method == 'GET') {
        respond.writeHead(200, { 'Content-Type': 'application/json' })

        /** get parsed url **/
        var parsedUrl = url.parse(request.url, true);
        /** path filter **/
        if (parsedUrl.pathname == '/api/parsetime' || parsedUrl.pathname == '/api/unixtime') {
        	/** get result by parsedUrl **/
        	var result = handle(parsedUrl);
        	/** write result in JSON formate **/
            respond.end(JSON.stringify());
        } else {
            respond.end('\n')
        }
    }
}).listen(Number(process.argv[2]));

function handle(parsedUrl) {
    /** parse iso time formate **/
    var isodate = parsedUrl.query.iso;
    /** translate ISO formate into unixtime **/
    var unixtime = Date.parse(isodate);

    /** handle route by path **/
    if (parsedUrl.pathname == '/api/parsetime') {
    	/** get detail information about time **/
    	var date = new Date(unixtime);
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

        return {
            "hour": hours,
            "minute": minutes,
            "second": seconds
        }
    } else {
        /** get unix time **/
        return {
            "unixtime": unixtime
        }
    }
}
```

expect solution

```
var http = require('http')
var url = require('url')

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return { unixtime: time.getTime() }
}

var server = http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtaime(time)

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))
```

<b>Point</b>

+ how to return json data by respond
	1. construct json data by
	```
		{
			"key1" : value1,
			"key2" : value2,
			...,
			"keyn" : valuen
		}
   ```
	
	2. write json into respond with json formate by following code ```
	JSON.stringify(jsonData)
```

+ ISO formate time and Unix time
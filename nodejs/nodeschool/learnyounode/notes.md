# Learnyounode

Learn the basics of node: asynchronous i/o, http.

## Hwllo World
Use log function.

<b>Challenge:</b>

```
console.log("HELLO WORLD");
```

## Bady steps
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

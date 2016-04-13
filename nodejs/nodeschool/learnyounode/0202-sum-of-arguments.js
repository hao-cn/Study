var sum = 0;
var argv = process.argv;
for(var i = 2 ; i < argv.length ; i ++){
	sum += Number(argv[i]); // sum += argv[i]; // 
}
console.log(sum);
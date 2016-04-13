var sum1 = 0;
var sum2 = 0;
var argv = process.argv;
for(var i = 2 ; i < argv.length ; i ++){
	sum1 += Number(argv[i]); 
	sum2 += argv[i];
}
console.log(sum1);
console.log(sum2);
var net = require("net");
	

net.createServer(function(socket){
	/** method 1 **/
	// socket.write(nowdate.getNowFormatDate()+"\n");
	// socket.end();

	/** method 2 **/
	socket.end(nowdate.getNowFormatDate()+"\n");

}).listen(Number(process.argv[2]));	


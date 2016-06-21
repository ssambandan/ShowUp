var ht = require('http')
var fs = require('fs')
var EventEmitter = require('events')

const myEmitter = new EventEmitter();

myEmitter.on('event', (chunk) => {
	chunk.home = 38;
	console.log(chunk)
})

chunk = {};

var server = ht.createServer();

server.timeout = 10;



server.on('request', function (req, res) {
    // console.log ('Server Connected');
    req.setEncoding ('utf8');
	
	req.on ('close', function (){
	console.log ('connection closed');
	// server.close();
	});

	req.on('data', function (c) {
	chunk = JSON.parse(c);
	myEmitter.emit('event', chunk)})
	
	// res.on('finish', function() {server.close()});
	


})


server.listen (process.argv[2], function(){
	console.log('I am listening')
});
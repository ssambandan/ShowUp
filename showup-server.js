var ht = require('http')
var fs = require('fs')
var EventEmitter = require('events')
var meeting = require('./Event.js');
var user = require('./User.js');
var array_of_users = []
var array_of_events  = []

function code_gen () {
var d = new Date();
return d.getTime();
}

const myEmitter = new EventEmitter();

myEmitter.on('event', (chunk) => {

	if (chunk.action =='create_user') {
		var member = new user();
		member.name = chunk.name;
        member.geopermission = chunk.geopermission;
        member.latitude = chunk.latitude;
        member.longitude = chunk.longitude;
        array_of_users.push(member);
        console.log (array_of_users);
	}

	else if (chunk.action == 'create_event') {
			var party = new meeting();
			party.name = chunk.name;
			party.location = chunk.location;
			party.latitude = chunk.latitude;
			party.longitude = chunk.longitude;
			party.creator_code = chunk.creator_code;
			party.subscribers = chunk.subscribers;
			array_of_events.push(party);
			console.log (array_of_events);
}


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
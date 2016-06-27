var ht = require('http')
var fs = require('fs')
var EventEmitter = require('events')
// meeting is object for new events
var meeting = require('./Event.js');
// user is object for new users
var user = require('./User.js');
var array_of_users = [];
var array_of_events  = [];
// holdign array of names for fast search
var array_of_names = [];

function code_gen () {
var d = new Date();
return d.getTime();
};


const myEmitter = new EventEmitter();

myEmitter.on('event', (chunk) => {

	function return_name (element) {
	return (element == chunk.name);
};

	if (chunk.action == 'create_user') {

        var index = array_of_names.findIndex(return_name);
        // console.log ('Index =' + index);

        if (index == -1) {
        array_of_names.push(chunk.name);
		var member = new user();
		member.name = chunk.name;
        member.geopermission = chunk.geopermission;
        member.latitude = chunk.latitude;
        member.longitude = chunk.longitude;
        new_index = array_of_users.push(member);
        console.log (array_of_users, new_index);
	    };
	    }

	    else if (chunk.action == 'create_event') { 
			var party = new meeting();
			party.name = chunk.name;
			party.location = chunk.location;
			party.latitude = chunk.latitude;
			party.longitude = chunk.longitude;
			party.creator_code = chunk.creator_code;
			party.subscribers = chunk.subscribers;
			new_index = array_of_events.push(party);
			console.log (array_of_events, 'new_index' , new_index);
        }

});

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
	myEmitter.emit('event', chunk)});


	
	// res.on('finish', function() {server.close()});
	


});


server.listen (process.argv[2], function(){
	console.log('I am listening')
});



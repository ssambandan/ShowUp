ht = require('http')
fs = require('fs')
net = require('net')

function User (name, geopermission, latitude, longitude) {
var d = new Date();
this.name = name;
this.geopermission = geopermission;
this.latitude = latitude;
this.longitude = longitude;
this.code = d.getTime();
this.date = d;
this.action = 'create_user';
}

function Event (name, location, latitude, longitude, creator_code, subscribers) {
var d = new Date();
this.name = name;
this.location = location;
this.latitude = latitude;
this.longitude = longitude;
this.code = d.getTime();
this.creator_code = creator_code;
this.subscribers = subscribers;
this.date = d;
this.action = 'create_event';
}

var simul = new User ('sachi.sambandan@gmail.com', true, 23, 48);
var simul1 = new Event ('My Birthday', '13826 Moon Lane', 233, 180, 1345678, ['adnaan', 'parveen', 'ridhaa']);

var options = {host: 'localhost',
               family: 4,
               port: 8080,
               method: 'POST',
               agent: false }

req = ht.request (options, function(res) {
chunk = '';
res.setEncoding ('utf8');

res.on ('data', function (chunk) {
console.log (chunk);
});

res.on ('end', function(){
	// console.log(simul);
    // req.end();});
});
});

req.on('error', (e) => {
	   // console.log(e)
})


// req.write ('Hi, Sachi here');
req.write(JSON.stringify(simul));
req.write(JSON.stringify(simul1))

req.end();


// console.log (simul);
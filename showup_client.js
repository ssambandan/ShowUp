ht = require('http')
fs = require('fs')
net = require('net')
var simul = {
	name: 'Sachi',
	home: 42,
	number: 64};

var simul1 = {
	name: 'Parveen',
	home: 25,
	number: 37};

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

req.write(JSON.stringify(simul1));

req.end();


// console.log (simul);
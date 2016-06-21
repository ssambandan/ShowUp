ht = require('http')
fs = require('fs')
net = require('net')
var simul = {
	name: 'Sachi',
	home: 42,
	number: 64};
// soc = new net.Socket;

// var writepath = 'tmp/output.txt'
//var wrtstrm = fs.createWriteStream(writepath)
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
simul.name = chunk;
});

res.on ('end', function(){
	console.log(simul);
    req.end();});
});


//req.write ('Hi, Sachi here');
req.write('hi, this is Sachi from Work')

// console.log (simul);

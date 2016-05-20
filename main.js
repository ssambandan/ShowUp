var event = require('./Event.js');
var user = require('./User.js');

function code_gen () {
var d = new Date();
return d.getTime();
}


var Birthday = new event ("Sachi's Birthday", "13826 Moon Lane", "23 42 34", "Sachi", ["parveen", "adnaan", "ridhaa"]);

console.log (Birthday);

for (i = 0; i < 1000; ++i) {};

console.log ("Hello");
console.log (Birthday);

for (i = 0; i < 1000; ++i) {};

console.log ("Hello");
console.log (Birthday);

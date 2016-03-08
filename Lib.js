
function code_gen () {
var d = new Date();
return d.getTime();
}

function Event (name, location, geolocation, code, creator, subscribers[], date) {
var d = new Date();
this.name = name;
this.location = location;
this.geolocation = geolocation;
this.code = d.getTime();
this.creator = creator;
this.subscribers = subscribers;
this.date = d;
}

module.exports = event;




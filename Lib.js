
function code_gen () {
var d = new Date();
return d.getTime();
}

function Event (lastname, firstname, location, geolocation, creator, subscribers) {
var d = new Date();
this.lastname = lastname;
this.firstname = firstname;
this.location = location;
this.geolocation = geolocation;
this.code = d.getTime();
this.creator = creator;
this.subscribers = subscribers;
this.date = d;
}

module.exports = Event;




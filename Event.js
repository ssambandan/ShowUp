


function Event (name, location, geolocation, creator, subscribers) {
var d = new Date();
this.name = name;
this.location = location;
this.geolocation = geolocation;
this.code = d.getTime();
this.creator = creator;
this.subscribers = subscribers;
this.date = d;
}


module.exports = Event;



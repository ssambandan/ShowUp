


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
}


module.exports = Event;



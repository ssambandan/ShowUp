
function codegen () { 
    var don = new Date();
return don.getTime();
}

function Event (lastname, firstname, latitude, longitude, geolocation, creator, subscribers) {
var d = new Date();
this.lastname = lastname;
this.firstname = firstname;
this.latitude = latitude;
this.longitude = longitude;
this.geolocation = geolocation;
this.code = codegen();
this.creator = creator;
this.subscribers = subscribers;
this.date = d;
}

module.exports = Event;




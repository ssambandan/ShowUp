function User (lastname, firstname, location, geolocation ) {
var d = new Date();
this.lastname = lastname;
this.firstname = firstname;
this.location = location;
this.geolocation = geolocation;
this.code = d.getTime();
this.date = d;
}

exports.User = new User;
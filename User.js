function User (lastname, firstname, geopermission, latitude, longitude) {
var d = new Date();
this.lastname = lastname;
this.firstname = firstname;
this.geopermission = geopermission;
this.latitude = latitude;
this.longitude = longitude;
this.code = d.getTime();
this.date = d;
}

module.exports = User;
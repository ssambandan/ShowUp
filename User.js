function User (name, geopermission, latitude, longitude) {
var d = new Date();
this.name = name;
this.geopermission = geopermission;
this.latitude = latitude;
this.longitude = longitude;
this.code = d.getTime();
this.date = d;
}

module.exports = User;
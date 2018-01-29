document.getElementById("id_business_level_version").innerHTML = "Business level version: 2017.12.06.3"; 




navigator.geolocation.watchPosition(on_gps_success, on_gps_error);

//--------------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "lat = " + 
	p.coords.latitude + "<br>long = " + p.coords.longitude + 
	"<br>accuracy = " + p.coords.accuracy + "m" + 
	"<br>altitude = " + p.coords.altitude + "m"+
	"<br>speed = " + p.coords.speed + "m/s";
	
	
	var map_str = "https://maps.googleapis.com/maps/api/staticmap?"+
	"markers=color:blue|" + p.coords.latitude + "," + p.coords.longitude + "|Palatul+Apor&"+
	"path=color:0xff0000|" + p.coords.latitude + "," + p.coords.longitude + "|Palatul+Apor&"+
	"zoom=16&"+
	"size=320x240&"+
	"key=AIzaSyA1GsOCvClXYlsZBWA7UZ0CJ0XLaFrXroQ";
	
	document.getElementById("id_gps_img").setAttribute("src", map_str);
} 
//--------------------------------------
function on_gps_error(e)
{
	alert(e.code);
}
//--------------------------------------
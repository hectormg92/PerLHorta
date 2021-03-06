var options = {
	enableHighAccuracy: true,
	maximumAge: 30000,
	timeout: 27000
};

function getLocation() {
	if (window.navigator.geolocation) {
		navigator.geolocation.watchPosition(locationSuccess, locationError, options);
	} else {
		alert("Geolocation not supported in this browser.");
	}
}


function locationSuccess(position) {
	
	var lon = position.coords.longitude;
	var lat = position.coords.latitude;
	var acc = position.coords.accuracy;
	
	currentLat = lat;
	currentLon = lon;

	// Add marker at current position...
	var newMarker = new L.circleMarker([lat, lon], {radius: 8, color: "blue", fillColor: "#045FB4", fillOpacity: 1});
	newMarker.addTo(smap);

	newMarker.bindPopup('Tu posición');
	
	
};

function locationError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Denied request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location unavailable.");
            break;
        case error.TIMEOUT:
            alert("Geolocation request timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Unknown Geolocation error.");
            break;
    }
};

//getLocation();

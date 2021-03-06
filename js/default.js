var smap;

var lat = 39.4747;
var lon = -0.44;

smap = L.map('smapid');

var url    = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var attrib =' Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

var osmLayer = new L.TileLayer(url, {maxZoom: 18, attribution: attrib});


// View to current position and add layer...
smap.setView([lat, lon], 12);
smap.addLayer(osmLayer);

L.control.scale({ imperial: false, maxWidth:200 }).addTo(smap);



var wmsOptions = {
	layers: "perlhorta:plh_variables_poligons",
	format: "image/png",
	opacity: 0.5,
	transparent: true,
	weight: 5,
    	color: '#9c0000',
    	fillOpacity: 0.8,
};

var wmsLayer = L.tileLayer.wms('http://localhost:8080/geoserver/wms', wmsOptions);



wmsLayer.addTo(smap);

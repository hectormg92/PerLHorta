var layers = {
	Parceles: L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
		layers: "perlhorta:parcel_les",
		format: "image/png",
		opacity: 0.5,
		transparent: true,
		weight: 5,
    	color: '#9c0000',
		fillOpacity: 0.8
	}),
	var_pol: L.tileLayer.wms('http://localhost:8080/geoserver/wms',{
		layers: "perlhorta:plh_variables_poligons",
		format: "image/png",
		opacity: 0.5,
		transparent: true,
		weight: 5,
    	color: '#9c0000',
		fillOpacity: 0.8
	}),
	var_lin: L.tileLayer.wms('http://localhost:8080/geoserver/wms',{
		layers: "perlhorta:plh_variables_linies",
		format: "image/png",	
	}),
	var_pnt: L.tileLayer.wms('http://localhost:8080/geoserver/wms',{
		layers: "perlhorta:plh_variables_punts",
		format: "image/png",		
	}),
	
}
L.control.layers(null,layers).addTo(smap);

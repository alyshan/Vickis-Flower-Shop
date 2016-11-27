var mainMap;

function initMap(){

	var mapContainer = document.querySelector('#map-container');

	var options = {
		center:{
			lat: -41.285969,
			lng: 174.775249
		},
		zoom:17,
		draggable: false
	};



	mainMap = new google.maps.Map(mapContainer, options);

}
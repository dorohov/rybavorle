function initMap() {     
	var coordMapOfficeOne = {lat: 52.929218, lng: 36.076147},
		zoomMapOfficeOne = 17,
		styleMapOfficeOne = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"4"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c7dae2"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7bc3e4"}]}],
		optionsMapOfficeOne = {
			zoom: zoomMapOfficeOne,
			center: new google.maps.LatLng(coordMapOfficeOne.lat, coordMapOfficeOne.lng),
			//scrollwheel: false,	
			//styles: styleMapOfficeOne
		},
		idOfficeOne = document.getElementById('map-rybavorle'),
		mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),		
		//iconOfficeOne = '/img/default/icon-map.png',
		iconOfficeOne = {        
	        path: "M71.3,236.2C-11,236.2-78,303.2-78,385.5c0,34,11.1,66,32.2,92.5c27.3,34.4,106.6,116,109.9,119.5l7.2,7.4 l7.2-7.4c3.4-3.5,82.7-85.1,110-119.5c21-26.5,32.2-58.5,32.2-92.5C220.6,303.2,153.7,236.2,71.3,236.2z M172.8,465.6	c-22,27.7-80.9,89.3-101.5,110.6C50.8,554.9-8.1,493.3-30.1,465.6c-18.2-23-27.9-50.7-27.9-80.1c0-71.3,58-129.3,129.3-129.3 c71.3,0,129.3,58,129.3,129.3C200.6,414.9,191,442.6,172.8,465.6z M71.3,295.5c-48.7,0-88.4,39.6-88.4,88.4s39.6,88.4,88.4,88.4 s88.4-39.6,88.4-88.4S120.1,295.5,71.3,295.5z M71.3,452.2C33.6,452.2,3,421.6,3,383.9c0-37.7,30.7-68.4,68.4-68.4 s68.4,30.7,68.4,68.4C139.7,421.6,109,452.2,71.3,452.2z",
	        fillColor: '#1b9eea',
	        strokeColor: '#000000',
	        fillOpacity: 1,
	        //anchor: new google.maps.Point(200,350),
	        anchor: new google.maps.Point(100,450),
	        strokeWeight: 0,
	        scale: 0.2
	    },
	    iconCoordOfficeOne = {lat: 52.929218, lng: 36.076147}, 
	    OfficeOne = new google.maps.Marker({
			position: iconCoordOfficeOne,
			map: mapOfficeOne,
			icon: iconOfficeOne
		});

        /*$(window).on('resize', function() {
			google.maps.event.trigger(map, "resize");
			map.setCenter(coord);
        });*/
};
$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');      
	});  
});
function map_initialize() {
  var myLatlng = new google.maps.LatLng(-7.455882,112.717352)
  var mapOptions = {
	zoom: 18,
	center: myLatlng,
	mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  
  var marker = new google.maps.Marker({
	position: myLatlng,
	map: map,
	title: 'Ho Yoe'			
  });
}

google.maps.event.addDomListener(window, 'load', map_initialize);
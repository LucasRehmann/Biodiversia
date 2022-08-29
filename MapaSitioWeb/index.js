mapboxgl.accessToken = 'pk.eyJ1IjoibWp2YWxlbnp1ZWxhIiwiYSI6ImNrb2Fmdm9zZDBpM28ybnFtYTQ2Z2MwMnYifQ.ZY3jTw0-6tjUSOOJXJHsdw'

var map = new mapboxgl.Map({
	container: "map",
	style: 'mapbox://styles/mapbox/satellite-streets-v11',
	//mapbox://styles/mapbox/satellite-v9
	center: [-60,-40],
	zoom: 3.5
});
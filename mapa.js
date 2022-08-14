mapboxgl.accessToken = 'pk.eyJ1IjoibWp2YWxlbnp1ZWxhIiwiYSI6ImNrb2Fmdm9zZDBpM28ybnFtYTQ2Z2MwMnYifQ.ZY3jTw0-6tjUSOOJXJHsdw'

var map = new mapboxgl.Map({
	container: "map",
	style: 'mapbox://styles/mapbox/satellite-streets-v11',
	//mapbox://styles/mapbox/satellite-v9
	center: [-60,-40],
	zoom: 3.5
});

let element = document.createElement('div')
element.className = 'marker'

let marker = new mapboxgl.Marker(element)
.setLngLat({
	lng:-59,
	lat:-29
})
.addTo(map)

let elementb = document.createElement('div')
elementb.className = 'markerb'

let markerb = new mapboxgl.Marker(elementb)
.setLngLat({
	lng:-69,
	lat:-33
})
.addTo(map)

let elementc = document.createElement('div')
elementc.className = 'markerc'

let markerc = new mapboxgl.Marker(elementc)
.setLngLat({
	lng:-69,
	lat:-49
})
.addTo(map)
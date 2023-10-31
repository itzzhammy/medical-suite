mapboxgl.accessToken = 'pk.eyJ1IjoiaXR6emhhbW15IiwiYSI6ImNsb2R3d3g3azBjcXAya3A5NTJlNWRybDQifQ.atsfa2rmLGiJ6w0k2eifrw';

var map = new mapboxgl.Map({
    container: 'myMap',
    style: 'mapbox://styles/mapbox/streets-v11', // Base map style
    center: [-76.7802528, 39.4195499], // [longitude, latitude]
    zoom: 15,
    scrollZoom: false,
    dragPan: false
});

// Adding a marker
var marker = new mapboxgl.Marker()
    .setLngLat([-76.7802528, 39.4195499])
    .addTo(map);

// Apply basic styles
map.on('load', function () {
    map.setPaintProperty('water', 'fill-color', '#bde5f6');
});

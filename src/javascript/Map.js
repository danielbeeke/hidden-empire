export class Map {
  constructor (app) {
    this.app = app;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: '/style.json',
      hash: true,
      center: [5.3673, 52.1537],
      zoom: 11
    });
    this.app.map = this.map;
  }

  init () {
    this.geolocator = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });

    this.map.addControl(this.geolocator);

    // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
    this.map.on('click', (event) => {
      this.app.emit('map.click', event);
    });
  }
}
export class Map {
  constructor (app) {
    this.style = 'map/style.json';
    this.app = app;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      hash: true,
      center: [5.3673, 52.1537],
      attributionControl: false,
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

    this.map.on('load', () => {
      let validClasses = this.app.modules.actions.allValidClasses();

      this.map.setFilter('poi_z16', [
        "all",
        ["==", "$type", "Point"],
        [">=", "rank", 20],
        ["in", "class", ...validClasses]
      ]);

      this.map.setFilter('poi_z15', [
        "all",
        ["==", "$type", "Point"],
        [">=", "rank", 7],
        ["<", "rank", 20],
        ["in", "class", ...validClasses]
      ]);

      this.map.setFilter('poi_z14', [
        "all",
        ["==", "$type", "Point"],
        [">=", "rank", 1],
        ["<", "rank", 7],
        ["in", "class", ...validClasses]
      ]);
    });

    // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
    this.map.on('click', (event) => {
      this.app.emit('map.click', event);
    });
  }


}
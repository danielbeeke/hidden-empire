let map = new mapboxgl.Map({
  container: 'map',
  style: '/style.json',
  hash: true,
  center: [52.1537, 5.3673],
  zoom: 11
});

let mapPois = new Map();

map.on('render', () => {
  let pois = map.querySourceFeatures('openmaptiles', {
    sourceLayer: 'poi',
    filter: ['in', 'class', 'bakery']
  })
    .map(poi => {
      return {
        name: poi.properties.name,
        type: poi.properties.class,
        id: poi.id
      }
    });

  if (pois.length) {
    console.table(pois)
  }
  //
  // if (pois.length) {
  //   pois.forEach(poi => {
  //     if (!mapPois.has('poi-' + poi.id)) {
  //       mapPois.set('poi-' + poi.id, poi);
  //       console.log(mapPois)
  //     }
  //   });
  // }
});
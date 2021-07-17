mapboxgl.accessToken = "pk.eyJ1IjoieW9nYXRhbmF5YTk1IiwiYSI6ImNrYjN2eGJscTBwbGMydm10ZGZ0aDdyNjIifQ.5DHMRHJJRD8-zS1gEVEcrQ";

let geoJson = {
  'type' : 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.160484, -8.561732]
      },
      'properties': {
        'title': 'Pos Penyekatan I',
        'description': 'Terminal Mengwi, Badung Bali'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.174711, -8.519841]
      },
      'properties': {
        'title': 'Pos Penyekatan II',
        'description': 'Perempatan Wiros/Clandys'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.182787, -8.648176]
      },
      'properties': {
        'title': 'Pos Penyekatan III',
        'description': 'Polresta Denpasar'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.185051, -8.636615]
      },
      'properties': {
        'title': 'Pos Penyekatan IV',
        'description': 'Gatsu Barat MCD'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.181121, -8.673238]
      },
      'properties': {
        'title': 'Pos Penyekatan V',
        'description': 'Gunung Salak - Teuku Umar Barat'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.253927, -8.638821]
      },
      'properties': {
        'title': 'Pos Penyekatan VI',
        'description': 'Tohpati'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.343654, -8.589530]
      },
      'properties': {
        'title': 'Pos Penyekatan VII',
        'description': 'Pos Masceti Gianyar'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.260065, -8.631985]
      },
      'properties': {
        'title': 'Pos Penyekatan VIII',
        'description': 'Pos Batubulan Gianyar'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.243471, -8.454472]
      },
      'properties': {
        'title': 'Pos Penyekatan IX',
        'description': 'Pos Payangan Gianyar'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [115.309063, -8.448687]
      },
      'properties': {
        'title': 'Pos Penyekatan X',
        'description': 'Pos Tampak Siring Gianyar'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [ 115.278033, -8.457578]
      },
      'properties': {
        'title': 'Pos Penyekatan XI',
        'description': 'Pos Tegalalang Gianyar'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [ 115.261948, -8.506715]
      },
      'properties': {
        'title': 'Pos Penyekatan XII',
        'description': 'Pos Ubud Gianyar'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [ 115.110965, -8.536920]
      },
      'properties': {
        'title': 'Pos Penyekatan XIII',
        'description': 'Pos Adipura Tabanan'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [ 114.540158, -8.143890]
      },
      'properties': {
        'title': 'Pos Penyekatan XIV',
        'description': 'Pos Labuan Lalang Singaraja'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [ 115.159286, -8.255440]
      },
      'properties': {
        'title': 'Pos Penyekatan XV',
        'description': 'Pos Pancasari Singaraja'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
        'type' : 'Point',
        'coordinates': [ 115.131938, -8.539519]
      },
      'properties': {
        'title': 'Pos Penyekatan XVI',
        'description': 'Pos Jalan Pahlawan Tabanan'
      }
    },

  ]
}

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [115.160484, -8.561732],
  zoom: 12
});

geoJson.features.forEach(function(marker) {
  let el = document.createElement('div');
  el.className = 'marker';
  
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h5>
          ${marker.properties.title}
        </h5>
        <p>
          ${marker.properties.description}
        </p>
        `
      )
    )
    .addTo(map);
});

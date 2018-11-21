const mapLayers = [
  {
    id: "shoreline-profiles",
    type: "symbol",
    source: {
      type: "vector",
      url: "mapbox://camvdvries.a95za8o5"
    },
    "minzoom": 9,
    "source-layer": "ShorelineMonitorPoint-cpol2b",
    layout: {
      "text-field": [
        "step",
        ["get", "Value"],
        "――――――",
        -5,
        "―――――",
        -4,
        "――――",
        -3,
        "―――",
        -2,
        "――",
        -1,
        "-",
        0,
        "―",
        1,
        "――",
        2,
        "―――",
        3,
        "――――",
        4,
        "―――――",
        5,
        "――――――"
      ],
      "text-anchor": [
        "step",
        ["get", "Value"],
        "left",
        0,
        "right"
      ],
      "text-font": [
        "Overpass Mono Bold",
        "Arial Unicode MS Regular"
      ],
      "text-rotate": [
        "interpolate",
        ["linear"],
        ["get", "Angle"],
        -3.14143155771224,
        360,
        3.1413780228666,
        0
      ],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        5,
        22,
        40
      ],
      "text-allow-overlap": true,
      "text-rotation-alignment": "map"
    },
    paint: {
      "text-color": [
        "interpolate",
        ["linear"],
        ["get", "NormalizedValue"],
        -1,
        "hsl(359, 79%, 47%)",
        -0.5,
        "hsl(30, 98%, 69%)",
        0,
        "hsl(60, 100%, 87%)",
        0.5,
        "hsl(88, 59%, 63%)",
        1,
        "hsl(139, 70%, 35%)"
      ],
      "text-translate-anchor": "map"
    }
  },
  {
    id: "shoreline-profiles-hover",
    type: "symbol",
    source: {
      type: "vector",
      url: "mapbox://camvdvries.a95za8o5"
    },
    "minzoom": 9,
    "source-layer": "ShorelineMonitorPoint-cpol2b",
    layout: {
      "text-field": [
        "step",
        ["get", "Value"],
        "――――――",
        -5,
        "―――――",
        -4,
        "――――",
        -3,
        "―――",
        -2,
        "――",
        -1,
        "-",
        0,
        "―",
        1,
        "――",
        2,
        "―――",
        3,
        "――――",
        4,
        "―――――",
        5,
        "――――――"
      ],
      "text-anchor": [
        "step",
        ["get", "Value"],
        "left",
        0,
        "right"
      ],
      "text-font": [
        "Overpass Mono Bold",
        "Arial Unicode MS Regular"
      ],
      "text-rotate": [
        "interpolate",
        ["linear"],
        ["get", "Angle"],
        -3.14143155771224,
        360,
        3.1413780228666,
        0
      ],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        10,
        22,
        45
      ],
      "text-allow-overlap": true,
      "text-rotation-alignment": "map"
    },
    paint: {
      "text-color": "#4538ff",
      "text-translate-anchor": "map"
    },
    'filter': ['==', 'Transect_id', '']
  },
  {
    id: "shoreline-aggregated-glow",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://camvdvries.cjkjybd4"
    },
    "minzoom": 0,
    "maxzoom": 9,
    "source-layer": "Aggregatedpoints-d2xahs",
    paint: {
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        2,
        9,
        18
      ],
      "circle-blur": 2,
      "circle-color": "#ffffff"
    }
  },
  {
    id: "shoreline-aggregated",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://camvdvries.cjkjybd4"
    },
    "minzoom": 0,
    "maxzoom": 9,
    "source-layer": "Aggregatedpoints-d2xahs",
    paint: {
      "circle-radius" : [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        9,
        20
      ],
      "circle-color": [
        "step",
        ["get", "NormalizedValue"],
        "#D7191C",
        -0.6,
        "#FDAE61",
        -0.2,
        "#FFFFBF",
        0.2,
        "#A6D96A",
        0.6,
        "#1A9641"
      ],
      "circle-opacity": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        0.28,
        9,
        1
      ],
      "circle-blur": 1,
    }
  }
]

export {
  mapLayers
}

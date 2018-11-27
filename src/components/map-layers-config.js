import _ from 'lodash'

const dashArray = _.flatten(
  _.range(-10, 10).map(x => ["―".repeat(Math.abs(x)),x / 2]))
  dashArray.pop()


console.log([
  "step",
  ["get", "Value"]].concat(dashArray))
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
      "text-field":  [
        "step",
        ["get", "Value"]].concat(dashArray),
      "text-anchor": [
        "step",
        ["get", "Value"],
        "left",
        0,
        "right"
      ],
      "text-font": [
        "Ubuntu Mono Bold",
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
        ["get", "Value"]].concat(dashArray),
      "text-anchor": [
        "step",
        ["get", "Value"],
        "left",
        0,
        "right"
      ],
      "text-font": [
        "Ubuntu Mono Bold",
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
        6,
        22,
        42
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
    id: "shoreline-aggregated-glow-middle",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://gerbenha.6z18bebw"
    },
    "minzoom": 4,
    "maxzoom": 9,
    "source-layer": "Aggregatedpointsz5-bsf5g2",
    paint: {
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["get", "NormalizedValue"],
        -1,
        18,
        0,
        9,
        1,
        18
      ],
      "circle-blur": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        0,
        22,
        1
      ],
      "circle-color": "#ffffff"
    }
  },
  {
    id: "shoreline-aggregated-middle",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://gerbenha.6z18bebw"
    },
    "minzoom": 4,
    "maxzoom": 9,
    "source-layer": "Aggregatedpointsz5-bsf5g2",
    paint: {
      "circle-radius" :[
        "interpolate",
        ["linear"],
        ["get", "NormalizedValue"],
        -1,
        21,
        0,
        10,
        1,
        21
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
        0.68,
        22,
        1
      ],
      "circle-blur": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        22,
        2
      ],
    }
  },
  {
    id: "shoreline-aggregated-glow",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://gerbenha.0palcbmn"
    },
    "minzoom": 0,
    "maxzoom": 4,
    "source-layer": "Aggregatedpointsz0-0vqo71",
    paint: {
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["get", "NormalizedValue"],
        -1,
        8,
        0,
        4,
        1,
        8
      ],
      "circle-blur": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        0,
        22,
        1
      ],
      "circle-color": "#ffffff"
    }
  },
  {
    id: "shoreline-aggregated",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://gerbenha.0palcbmn"
    },
    "minzoom": 0,
    "maxzoom": 4,
    "source-layer": "Aggregatedpointsz0-0vqo71",
    paint: {
      "circle-radius" :[
        "interpolate",
        ["linear"],
        ["get", "NormalizedValue"],
        -1,
        9,
        0,
        5,
        1,
        9
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
        0.68,
        22,
        1
      ],
      "circle-blur": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        22,
        2
      ]
    }
  }
]

export {
  mapLayers
}

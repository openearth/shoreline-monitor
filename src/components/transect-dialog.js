import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
import moment from 'moment'

Exporting(Highcharts)

export default {
  props: {
    dialog: {
      type: Boolean
    },
    transect_id: {
      type: String
    }
  },
  data: () => ({
    active: null,
    lat: 0,
    lon: 0,
    table: {},
    timelapse_url: "",
    showoutliers: false,
    headers: [{
        text: "",
        sortable: false,
        value: 'name'
      },
      {
        text: 'Properties',
        value: 'data',
        align: 'right',
      }
    ],
    items: [{
        value: false,
        name: 'Country',
        data: "",
      },
      {
        value: false,
        name: 'Profile',
        data: ""
      },
      {
        value: false,
        name: 'Rate of Change',
        data: "",
      },
      {
        value: false,
        name: 'Sandy',
        data: "",
      }
    ]
  }),
  mounted () {
  },
  watch: {
    active: {
      handler: function(active) {
        return active
      },
      deep: true
    }
  },
  methods: {
    getProfileData(id) {
      var parts = id.split("_")
      var box = parts[1]
      var section = parts[2]

      var url = `https://storage.googleapis.com/shoreline-monitor/features/${box}/${section}/BOX_${box}_${section}.json`
      fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        var filteredFeatures = data.features.filter((feature) => {
          return feature.properties.transect_id === id
        })
        var feature = filteredFeatures[0]

        this.table = {}
        this.items.forEach(item => {
          if(item.name==="Country") {item.data = feature.properties.country_name}
          if(item.name==="Profile") {item.data = id}
          if(item.name==="Rate of Change") {item.data = feature.properties.change_rate.toFixed(2) + " +/- " + feature.properties.change_rate_unc.toFixed(2) + " m/year"}
          if(item.name==="Sandy") {item.data = feature.properties.flag_sandy}
        })
        this.lon = feature.geometry.coordinates[0][0]
        this.lat = feature.geometry.coordinates[0][1]
        var dt = feature.properties.dt
        var dates = dt.map(x =>{
          return moment("01-01-1984").add(x * 365, 'day').valueOf()
        })

        var points = feature.properties.distances.map((d, i) => {
          return [dates[i], d]
        })

        var outliers = feature.properties.outliers_1.map(i => {
          return [dates[i], dt[i]]
        })
        var outliers_2 = feature.properties.outliers_2.map(i => {
          i += feature.properties.outliers_2.length
          return [dates[i], dt[i]]
        })
        outliers = outliers.concat(outliers_2)

        // create two points of the regression line
        var b =  feature.properties.intercept
        var a =  feature.properties.change_rate
        var b_unc = feature.properties.b_unc
        var regrstartend = [[dates[0], b], [dates[dates.length - 1], b + dt[dt.length - 1] * a]]
        var regrstartendplusunc= [[dates[0], b + b_unc], [dates[dates.length - 1], (b + b_unc) + dt[dt.length - 1] * a]]
        var regrstartendminunc = [[dates[0], b - b_unc], [dates[dates.length - 1], (b - b_unc) + dt[dt.length - 1] * a]]

        this.chart = Highcharts.chart('container', {
            chart: {
              zoomType: 'xy',
              panning: true,
              panKey: 'shift'
            },
            xAxis: {
              tickAmount: 10,
              type: 'datetime',
              title: {
                text: 'Year'
              }
            },
            yAxis: {
              title: {
                text: 'Distance w.r.t. landward boundary [m]'
              }
            },
            title: {
              text: 'Shoreline profile'
            },
            subtitle: {
              text: 'Click and drag to zoom in. Hold down shift key to pan.'
            },
            legend: {
              enabled: false
            },
            tooltip: {
              formatter: function () {
                var s = `<b> ${id} </b><br>`
                s += `Date: ${moment(this.x).format("YYYY")} <br>`
                s += `Distance: ${this.y.toFixed(2)} [m]`
                return s
              }
            },
            series: [{
                type: 'line',
                name: 'Regression Line',
                data: regrstartend,
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false,
                color: '#000000'
            }, {
                type: 'line',
                name: 'Uncertainty',
                data: regrstartendplusunc,
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false,
                color: '#8c8c8c',
                dashStyle: "dash"
            }, {
                type: 'line',
                name: 'Unertainty min',
                data: regrstartendminunc,
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false,
                color: '#8c8c8c',
                dashStyle: "dash"
            }, {
                type: 'scatter',
                name: 'Observations',
                data: points,
                marker: {
                    radius: 4,
                    symbol: "circle"
                }
            },
            {
                type: 'scatter',
                name: 'Outliers',
                data: outliers,
                marker: {
                    radius: 5,
                    symbol: "circle"
                },
                color: "red"
            }]
        });
      })
    },
    changeChartData() {
      var outliers = this.chart.series.find(x => x.name === "Outliers")
      if(this.showoutliers) {
        outliers.hide()
      } else {
        outliers.show()
      }
    }
  },
  computed: {
    showdialog: {
      // getter
      get: function () {
        if(this.dialog) {
          this.timelapse_url = `https://earthengine.google.com/iframes/timelapse_player_embed.html#v=${this.lat},${this.lon},12,latLng&t=0,0`
          this.getProfileData(this.transect_id)
        }
        return this.dialog
      },
      // setter
      set: function (newValue) {
        this.$emit('changedialog', newValue)
      }
    }
  }
}

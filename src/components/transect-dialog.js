import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
Exporting(Highcharts)


import moment from 'moment'

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
    table: {},
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
  methods: {
    getProfileData(id) {
      var parts = _.split(id, "_");
      var box = parts[1];
      var section = parts[2];

      var url = _.template(
        'https://storage.googleapis.com/shoreline-monitor/features/<%- box %>/<%- section %>/BOX_<%- box %>_<%- section %>.json'
      )({
        box: box,
        section: section
      });

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

        console.log(feature)
        var dt = feature.properties.dt
        var dates = dt.map(x =>{
          return moment("1984").add(x * 365, 'day').valueOf()
        })

        var points = feature.properties.distances.map((d, i) => {
          return [dates[i], d]
        })
        var b =  feature.properties.intercept
        var a =  feature.properties.change_rate
        var startend = [[dates[0], b], [dates[dates.length - 1], b + dt[dt.length - 1] * a]]

        Highcharts.chart('container', {
            chart: {

            },
            xAxis: {
                min: dates[0],
                max: dates[dates.length - 1],
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                }
            },
            yAxis: {
                min: 0
            },
            title: {
                text: 'Shoreline profile'
            },
            legend: {
              enabled: false
            },
            series: [{
                type: 'line',
                name: 'Regression Line',
                data: startend,
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            }, {
                type: 'scatter',
                name: 'Observations',
                data: points,
                marker: {
                    radius: 4
                }
            }]
        });
      })
    }
  },
  computed: {
    showdialog: {
      // getter
      get: function () {
        this.getProfileData(this.transect_id)
        return this.dialog
      },
      // setter
      set: function (newValue) {
        this.$emit('changedialog', newValue)
      }
    }
  }
}

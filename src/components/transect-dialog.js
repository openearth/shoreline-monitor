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
    table: {}
  }),
  mounted () {
    // this.$on('dialog', (dialog) => {
    //   console.log('event', dialog)
    //
    // })
  },
  // watch: {
  //   dialog: {
  //     handler: function(dialog) {
  //       this.dialog = dialog
  //       console.log('dialog', this.dialog)
  //     }
  //   }
  // },
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

      fetch(url, {
        headers: {
          "Access-Control-Expose-Headers": "*"
        }
      })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)

        var filteredFeatures = data.features.filter((feature) => {
          console.log(feature.properties.transect_id, feature.properties.transect_id === id)
          return feature.properties.transect_id === id
        })
        console.log('hoi', filteredFeatures)
        this.table = {}
        this.table["Country"] = filteredFeatures[0].properties.country_name
        this.table["Profile"] = id
        this.table["Rate of Change"] = filteredFeatures[0].properties.change_rate.toFixed(2) + " +/- " + filteredFeatures[0].properties.change_rate_unc.toFixed(2) + " m/year"
        this.table["Sandy?"] = filteredFeatures[0].properties.flag_sandy
        console.log(this.table)
        // var feature = _.first(filteredFeatures);
        // console.log(feature)
        // // createShoreChart(feature);
        // var tableTemplate = _.template(document.getElementById('shoreline-chart-template').innerHTML);
        // var rendered = tableTemplate(feature.properties);
        // console.log(filteredFeatures, feature)
        // document.getElementById('chart-table').html(rendered);
        // document.getElementById('chart-modal')
        //   .show();
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

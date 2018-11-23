import mapboxgl from 'mapbox-gl';
import TransectDialog from './TransectDialog.vue'
import {mapLayers} from './map-layers-config.js'

export default {
  data: () => ({
    map: null,
    transect_id: "BOX_120_124_53",
    hover_id: "",
    dialog: false
  }),
  watch: {
    dialog: {
      handler: function(dialog) {
        this.dialog = dialog
        console.log('dialog', this.dialog)
      }
    }
  },
  mounted () {
    this.map = this.$refs.map.map
    this.map.on('load', () => {
      this.map.addControl(new mapboxgl.NavigationControl());

      mapLayers.forEach((layer) => {
        console.log(layer)
        this.map.addLayer(layer)
      })
      this.map.on('mousemove', 'shoreline-profiles', (e) => {
        this.map.getCanvas().style.cursor = 'pointer';
        if(this.hover_id !== e.features[0].properties.Transect_id) {
          this.hover_id = e.features[0].properties.Transect_id
          this.map.setFilter("shoreline-profiles-hover", ["==", "Transect_id", this.hover_id])
        }
      })

      this.map.on('mouseleave', 'shoreline-profiles', () => {
        this.map.getCanvas().style.cursor = '';
        this.map.setFilter("shoreline-profiles-hover", ["==", "Transect_id", ""])
        this.hover_id = ""
      })

      this.map.on('click', "shoreline-profiles", (e) => {
        console.log('shoreline click', e, e.features[0])
        this.transect_id = e.features[0].properties.Transect_id
        this.dialog = true
      })
    })
  },
  methods: {
    deferredMountedTo (map) {
      this.map = map
    }
  },
  components: {
    "v-transect-dialog": TransectDialog
  }
}

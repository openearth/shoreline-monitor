<template>
  <div id="map">
    <v-mapbox
      access-token="pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA"
      map-style="mapbox://styles/mapbox/satellite-v9"
      :center="[0, 0]"
      :zoom="1.2"
      :pitch="0"
      id="map"
      ref="map">
    </v-mapbox>
    <v-transect-dialog :transect_id="transect_id" :dialog="dialog" v-on:changedialog="dialog=false">
    </v-transect-dialog>
  </div>
</template>

<script src="./map-component.js">
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div id="app">
    <v-map-component></v-map-component>
    <v-info-card></v-info-card>
  </div>
</template>

<script src="./app.js">
</script>

<style lang="scss">
html, body{
  height: 100vh;
  width: 100vw;
  overflow: hidden !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>

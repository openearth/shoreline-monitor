import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Vue2MapboxGL from 'vue2mapbox-gl';
Vue.use(Vue2MapboxGL);

import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
Vue.use(Vuetify, {})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

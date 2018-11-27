import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Vue2MapboxGL from 'vue2mapbox-gl'
Vue.use(Vue2MapboxGL);

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify, {
  iconfont: 'fa4'
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


var styles = [
  'border: 1px solid #3E0E02'
  , 'display: block'
  , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
  , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
  , 'line-height: 40px'
  , 'text-align: center'
  , 'font-weight: bold'
].join(';');

console.log('%c Hi, welcome to the shoreline-monitor. Please see the LICENSE file in our github repository (openearth/shoreline-monitor) for details on the license of data (limited use) and our open source software. Let us know if you want to cooperate!', styles);

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/common.css'
import Echarts from "./plugin/echarts"
import '../node_modules/echarts/map/js/china'
// import Taps from './components/MyComponent/index'
// Vue.use(Taps)

import Taps from './components/TAPS/index'
Vue.use(Taps)
Vue.use(Echarts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

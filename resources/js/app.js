import './bootstrap'
import '@coreui/coreui'

import './plugins/toast'
import './plugins/v-validate'
import './plugins/vueScrollTo'
import './plugins/sweetAlert'
import './plugins/bootstrap-vue'
import './plugins/coreUI'

import Vue from 'vue'
import router from './router/index.js'
import store from './store'
import App from './App.vue'

import { iconsSet as icons } from '../assets/icons/icons.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.performance = true
Vue.prototype.$log = console.log.bind(console)
Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue();

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  render: h => h(App)
})
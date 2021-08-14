import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import util from './mixins/Utils'
import "./styles/style.css"
import Vue2Editor from "vue2-editor";

Vue.use(Vue2Editor);

Vue.mixin(util);

import Notifications from 'vue-notification'
Vue.use(Notifications)


import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)


import SimpleVueValidation from 'simple-vue-validator';
Vue.prototype.$Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

// CSS Assets
import '@/styles/init.scss'

// JS Core Plugins
import jQuery from 'jquery'
import axios from 'axios'
import _ from 'underscore'
import dt from 'datatables.net'
import Raphael from 'raphael'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

axios.defaults.baseURL = process.env.VUE_APP_HTTP

global.$ = global.jQuery = jQuery
global.Raphael = Raphael
global.axios = axios
global._ = _
global.dt = dt

// Js Plugins
require('bootstrap')

require('jquery-knob')
require('jquery-sparkline')
require('jquery-slimscroll')

require('admin-lte')
require('datatables.net')
require('datatables.net-bs')
require('select2')
require('icheck')
require('morris.js/morris.js')
require('inputmask/dist/jquery.inputmask.bundle.js')

require('admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js')
require('admin-lte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js')

// Local Script
require('./scripts/userSettings.js')
require('./scripts/notify.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
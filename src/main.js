// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import router from './router'
import '../static/css/reset.css'
import '../static/js/common.js'
Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

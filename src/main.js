/* 入口js */
import Vue from 'vue'
import App from './App'
/* eslint-disable no-new */
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})

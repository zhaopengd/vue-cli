import Vue from 'vue'
import App from './App'
import axios from 'axios'
/* eslint-disable no-new */
Vue.config.productionTip = false
// 创建事件总线 并保存在Vue的原型对象上
Vue.prototype.$bus = new Vue()
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

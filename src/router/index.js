//   路由器对象模块   路由器买好了 网线插好了
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  // 应用中所有的路由
  routes
})

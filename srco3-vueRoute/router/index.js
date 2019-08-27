//   路由器对象模块   路由器买好了 网线插好了
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// 声明使用插件
Vue.use(VueRouter)
// 创建路由器 并暴露出去 供 入口js 使用
export default new VueRouter({
  mode: 'history',
  // 应用中所有的路由
  routes
})

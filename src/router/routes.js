// 所有路由配置的模块
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
export default [
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    redirect: '/about'
  }
]

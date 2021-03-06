// 所有路由配置的模块
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'
export default [
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: 'message', // 自动添加 /home
        component: Message,
        children: [
          {
            path: '/home/message/detail/:id',
            component: MessageDetail
          }
        ]
      },
      {
        path: '/home',
        redirect: '/home/news'
      }
    ]
  },
  {
    path: '/',
    redirect: '/about'
  }
]

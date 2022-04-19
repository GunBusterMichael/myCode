// 在该文件中配置 router 信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// 2.1.1 导入组件
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 2.1.2 懒加载组件：用到组件时再加载相关 JS 代码
// 打包时，一个组件会被打包成一个 JS 文件。有几个组件，就会打包成几个 JS 文件。
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

// 1. 通过 Vue.use(插件) 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
// 2.1 将 routes 对象抽离出来
const routes = [
  {
    // 当路径为空时（打开网页时）
    path: '',
    // 将路径重定向为 /home
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // 路由嵌套
    children: [
      {
        path: '',
        // 子路由的 path 不用加 /
        redirect: 'news'
      },
      {
        // 子路由的 path 不用加 /
        path: 'news',
        component: HomeNews
      },
      {
        // 子路由的 path 不用加 /
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    // 动态路由
    path: '/user/:userId',
    component: User
  }
]
const router = new VueRouter({
  // 在 router 中配置路由与组件之间的映射关系
  routes,
  // 使用 H5 的 history 方法更改 url
  mode: 'history',
  // 将所有的类名 router-link-active 修改为 active
  linkActiveClass: 'active'
})

// 3.将 router 对象导出到 Vue 实例中
export default router
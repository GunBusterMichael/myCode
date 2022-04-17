// 在该文件中配置 router 信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// 2.1.1 导入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 1. 通过 Vue.use(插件) 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
// 2.1 将 routes 对象抽离出来
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
const router = new VueRouter({
  // 在 router 中配置路由与组件之间的映射关系
  routes
})

// 3.将 router 对象导出到 Vue 实例中
export default router
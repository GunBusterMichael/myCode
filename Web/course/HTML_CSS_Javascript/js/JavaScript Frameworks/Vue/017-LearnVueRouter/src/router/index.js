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
const Profile = () => import('../components/Profile.vue')

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
    meta: {
      title: '首页'
    },
    // 路由嵌套
    children: [
      // 用这个重定向的方法，没法记录在离开 /home/??? 时，浏览的是哪个子路由。无法实现页面切换回 /home 时，仍然呈现离开时浏览的路由。
      // {
      //   path: '',
      //   // 子路由的 path 不用加 /
      //   // 将路由跳转到 /home 时，将路径定向至 /home/news
      //   redirect: 'news'
      // },
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
    component: About,
    meta: {
      title: '关于'
    },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      console.log('已调用 about 的路由独享守卫 beforeEnter');
      next()
    }
  },
  {
    // 动态路由
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    // 路由加载到该路径时，将数据传送到该路径
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
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

/*
  全局导航守卫：
    1. 作用
      监听路由的跳转；
        在路由跳转时，执行一些指定操作。
*/
/*
  from、to：路由从 from 跳转到 to；
    from 和 to 都是 route。
  next函数：让路由进行跳转的函数，必须在 router.beforeEach 中手动调用。
*/
router.beforeEach((to, from, next) => {  // 这是一个前置守卫（guard）/ 回调 / 钩子（hook）函数，在路由跳转之前被调用。
  // 修改网页的 title
  /*
    1. matched：
      是一个数组，记录了当前 route 的所有路由记录，包括其上级 route。
        1.1 路由记录：
          routes 数组中的对象。
          举例：/home/news 的路由记录
          [
            // /home 的路由记录
            {
              path: '/home',
              component: Home,
              meta: {
              title: '首页'
              }
            },
            // /home/news 的路由记录
            {
              {
                // 子路由的 path 不用加 /
                path: 'news',
                component: HomeNews
              },
            }
          ]
        1.2 matched[0]
          当前路由外层的最顶级路由。
          /home/news 的 matched[0] 是 /home
    2. meta
      2.1 定义
        导航守卫会用到的，用于修改 HTML 中的 meta 标签的数据。
      2.2 包括
        包括网页的 title 等。
      2.3 meta 要被写到哪里
        写到 routes 数组中的，定义路由映射关系的对象中。
  */
  document.title = to.matched[0].meta.title
  // console.log(to)
  next()
})

// 后置守卫函数
router.afterEach((to, from) => {
  console.log('已执行后置守卫函数（router.afterEach）');
})

// 3.将 router 对象导出到 Vue 实例中
export default router
<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页的内容哦哦哦</p>

    <!-- 嵌套路由的 url 要写为完整形式 -->
    <router-link to="/home/news">首页新闻</router-link>
    <router-link to="/home/message">首页消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        /* 
          path 变量用于保存当前的 path，以实现页面再次回到 home 后，能跳转到离开 home 时浏览的子路由页面。
          先将其初始化为 news 路径，让路由第一次切换到 home 后，展示 news 页面。
        */
        path: '/home/news'
      }
    },

    // 组件路由
    // 1. 在渲染该组件的路由被调用前调用
    beforeRouteEnter (to, from, next) {
      // console.log('Home 组件被渲染')
      next()
    },

    // 2. 因为在动态路由间跳转，所以父组件（Home）被调用。在此时，该守卫函数被调用
    beforeRouteUpdate(to, from, next) {
      // console.log('Home 组件的子组件被渲染，Home 组件因此被重新渲染')
      next()
    },

    // 3. 离开该组件的对应路由时调用
    beforeRouteLeave(to, from, next) {
      // console.log('离开 Home 组件对应的路由')

      // 在离开该路由前，保存当前的路径。方便重新加载 /home 路由时，加载离开该路由前浏览的页面。
      this.path = this.$route.path
      next()
    },

    /*
      activated 函数：
        1. 分类
          生命周期函数。
        2. 调用时机
          在组件被 <keep-alive> 标签包裹时，
            如果该组件被挂载到 DOM，或其数据有更新时，会调用该函数。
    */
    activated () {
      // 在 home 组件被挂载到 DOM 时，将让路由跳转到已被保存的 path 上。
      this.$router.push(this.path)
      // console.log('home activated');/
    },
    /*
      deactivated 函数：
        1. 分类
          生命周期函数。
        2. 调用时机
          在组件被 <keep-alive> 标签包裹时，
            在该组件从 DOM 中被撤下后，会调用该函数。
    */
    deactivated() {
      // console.log('home deactivated')
    },
  }
</script>

<style scoped>
  
</style>
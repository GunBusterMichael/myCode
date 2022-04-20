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
    // 组件路由
    // 1. 在渲染该组件的路由被调用前调用
    beforeRouteEnter (to, from, next) {
      console.log('Home 组件被渲染')
      next()
    },

    // 2. 因为在动态路由间跳转，所以父组件（Home）被调用。在此时，该守卫函数被调用
    beforeRouteUpdate(to, from, next) {
      console.log('Home 组件的子组件被渲染，Home 组件因此被重新渲染')
      next()
    },

    // 3. 离开该组件的对应路由时调用
    beforeRouteLeave(to, from, next) {
      console.log('离开 Home 组件对应的路由')
      next()
    }
  }
</script>

<style scoped>
  
</style>
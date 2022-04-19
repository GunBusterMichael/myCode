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
    
  }
</script>

<style scoped>
  
</style>
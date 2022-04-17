<template>
  <div id="app">
    <!-- 将 url 对应的组件添加到 Vue 实例中 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- router-view 标签决定组件的显示位置-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

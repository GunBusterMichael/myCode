<template>
  <div id="app">
    <router-view/>
    <init-tab-bar/>
  </div>
</template>

<script>
/* 将 App.vue 中要显示的，和 tabbar 有关的 HTML 代码封装到 InitTabBar 组件中 */
import InitTabBar from 'components/app/InitTabBar.vue'

export default {
  name: "App",
  components: {
    InitTabBar
  }
};
</script>

<style>
/* 引入 css 文件 */
@import "assets/css/base.css";
</style>

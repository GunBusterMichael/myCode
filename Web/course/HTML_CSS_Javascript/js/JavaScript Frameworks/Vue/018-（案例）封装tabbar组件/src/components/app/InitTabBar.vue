/* 将 App.vue 中要显示的，和 tabbar 有关的 HTML 代码封装到 InitTabBar 组件中 */
<template>
  <!-- 用驼峰命名的组件，可以用 短横杠(hyphen) 命名法在 HTML 中使用 -->
  <tab-bar>
    <!-- 将 tab-bar-item 的路由 path 从父组件 App 传递到子组件 TabBarItem -->
    <!-- 将 tab-bar-item 活跃时的颜色 activeColor 从父组件 App 传递到子组件 TabBarItem -->
    <tab-bar-item path="/home" activeColor="#E799B0">
      <template v-slot:item-icon>
        <!-- 在 src 中使用别名，要在别名前加 ~ -->
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="#E799B0">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/shopcart" activeColor="#E799B0">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/shopcart.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="#E799B0">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// 导入 TabBar 组件
import TabBar from 'components/tabbar/TabBar.vue'
import TabBarItem from 'components/tabbar/TabBarItem.vue'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>
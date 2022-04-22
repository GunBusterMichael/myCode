<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 用行内样式设定 TabBarItem 活跃时要显示的颜色 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  computed: {
    isActive() {
      /*
        判断当前活跃的路由是否是本组件：
          this.$route.path：当前活跃的路由；
          this.path：本 TabBarItem 组件的 path（是/home或者/category或者...）；
          Array.prototype.indexOf()：查找数组是否含有小括号内的成员，
            如果有，返回其索引号；
            如果没有，返回 -1。
        判断当前活跃的路由的路径是否以当前组件所对应的 path 开头：
          举例：
          1.
            this.$route.path: '/profile/michael'
            this.path: '/profile'
            return true
          2.
            this.$route.path: '/home/news'
            this.path: '/categroy'
            return false
      */
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  /*
    子组件 TabBarItem 收集从父组件 App 中传来的数据：
      path：TabBarItem 所代表的路由 path；
      activeColor：TabBarItem 活跃时要显示的颜色。
  */
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f00'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  /* 让 tab-bar 中的每个按钮各占一份 */
  flex: 1;
  text-align: center;
  /* tab-bar 的常用高度为 49px */
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  margin: 3px 0 2px 0;
  /* 用 vertical-align: middle; 消除 <img/> 下方的默认空隙 */
  vertical-align: middle;
}
</style>
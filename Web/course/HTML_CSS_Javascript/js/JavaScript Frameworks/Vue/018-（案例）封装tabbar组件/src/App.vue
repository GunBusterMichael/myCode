<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* 引入 css 文件 */
@import "./assets/css/base.css";

/* 编写 App 组件的样式 */
#tab-bar {
  /* 将底部的 tab-bar 设置成 flex 模式，实现依据按钮数量自动排版的功能 */
  display: flex;

  /* tab-bar 的常用高度为 49px */
  height: 49px;

  background-color: #f6f6f6;

  /* 将 tab-bar 设定为固定定位 */
  position: fixed;
  bottom: 0;
  /* 因为 tab-bar 的 div 没有设定宽度，所以设定左右位置为 0，让 div 左右贴着浏览器的边 */
  left: 0;
  right: 0;

  /* 为 tab-bar 添加上阴影，让其边界过度更自然 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}

.tab-bar-item {
  /* 让 tab-bar 中的每个按钮各占一份 */
  flex: 1;
  text-align: center;
}
</style>

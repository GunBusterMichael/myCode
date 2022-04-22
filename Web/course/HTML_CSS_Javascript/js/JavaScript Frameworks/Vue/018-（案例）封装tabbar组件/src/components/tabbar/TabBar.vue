<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
/* 编写 App 组件的样式 */
#tab-bar {
  /* 将底部的 tab-bar 设置成 flex 模式，实现依据按钮数量自动排版的功能 */
  display: flex;

  /* 设置 tab-bar 的背景颜色 */
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
</style>
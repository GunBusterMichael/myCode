<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn/>
  </div>
</template>

<script>
  // 将 Vue 实例需要使用到的组件 Cpn 引入到 Vue 实例模板的 .vue 文件中。
  import Cpn from './Cpn.vue'

  export default {
    data() {
      return {
        message: "Hello Vue!",
        name: "Michael",
      };
    },
    methods: {
      btnClick() {
        console.log("按钮被点击了");
      },
    },
    components: {
      Cpn
    },
  }
</script>

<style scoped>
  .title {
    color: green;
  }
</style>

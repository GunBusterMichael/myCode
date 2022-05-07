<template>
  <div>
    <h2>我是 Cpn 组件的标题</h2>
    <p>我是 Cpn 组建的内容哦哦哦哦哦哦哦</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data() {
      return {
        name: '我是 Cpn 组件的 data 的 name'
      }
    },
  }
</script>

<style scoped>
  
</style>

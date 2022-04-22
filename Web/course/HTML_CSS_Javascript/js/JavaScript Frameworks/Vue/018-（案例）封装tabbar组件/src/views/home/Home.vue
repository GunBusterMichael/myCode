<template>
  <div>
    <h2>首页</h2>
    <button @click="logPath">logPath</button>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      logPath() {
        console.log(this.$route.path)
      }
    }
  }
</script>

<style scoped>
  
</style>
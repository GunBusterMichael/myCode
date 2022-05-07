<template>
  <div>
    <h2>分类</h2>
    <button @click="logPath">logPath</button>
  </div>
</template>

<script>
  export default {
    name: "Category",
    methods: {
      logPath() {
        console.log(this.$route.path)
      }
    }
  }
</script>

<style scoped>
  
</style>
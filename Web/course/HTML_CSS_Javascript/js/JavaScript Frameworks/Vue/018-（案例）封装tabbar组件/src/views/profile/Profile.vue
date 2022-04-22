<template>
  <div>
    <h2>我的</h2>
    <button @click="logPath">logPath</button>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    methods: {
      logPath() {
        console.log(this.$route.path)
      }
    }
  }
</script>

<style scoped>
  
</style>
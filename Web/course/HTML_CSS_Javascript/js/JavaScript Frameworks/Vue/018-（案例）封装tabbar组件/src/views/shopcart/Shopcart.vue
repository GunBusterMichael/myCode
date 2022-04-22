<template>
  <div>
    <h2>购物车</h2>
    <button @click="logPath">logPath</button>
  </div>
</template>

<script>
  export default {
    name: "Shopcart",
    methods: {
      logPath() {
        console.log(this.$route.path)
      }
    }
  }
</script>

<style scoped>
  
</style>
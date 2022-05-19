<template>
  <div>
    <h2>{{message}}</h2>
    <p>{{packageInfo}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hello App",
        packageInfo: `在package.json中的"script"中定义的脚本，在被执行的时候，会自动在 node_modules 文件夹中的 .bin 文件夹中寻找要运行的程序`
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: white;
  }
</style>
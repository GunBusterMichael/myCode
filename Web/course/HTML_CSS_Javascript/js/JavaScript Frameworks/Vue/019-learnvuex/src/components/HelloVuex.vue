<template>
  <div>
    <h2>-------HelloVuex-------</h2>
    <h2>counter：{{$store.state.counter}}</h2>
    <h2>counter的平方：{{$store.getters.powerCounter}}</h2>
    <h2>年龄大于20岁的学生：{{$store.getters.studentsOlderThan20}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
  }
</script>

<style scoped>
  
</style>
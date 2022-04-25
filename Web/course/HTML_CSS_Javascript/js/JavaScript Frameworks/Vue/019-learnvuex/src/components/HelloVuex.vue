<template>
  <div>
    <h2>-------HelloVuex-------</h2>
    <p>counter：{{$store.state.counter}}</p>
    <p>counter的平方：{{$store.getters.powerCounter}}</p>
    <p>年龄大于20岁的学生：{{$store.getters.studentsOlderThan20}}</p>
    <p>年龄大于20岁的学生的个数：{{$store.getters.numOfstudentsOlderThan20}}</p>
    <p>年龄大于22岁的学生的个数：{{$store.getters.studentsOlderThan(22)}}</p>
    <p>{{$store.state.info}}</p>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
  }
</script>

<style scoped>
  
</style>
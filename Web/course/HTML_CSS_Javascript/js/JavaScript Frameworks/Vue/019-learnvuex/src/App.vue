<template>
  <div id="app">
    <h2>-------App-------</h2>
    <!-- 通过 this.$store.state. 属性访问 vuex 状态 -->
    <h2>counter：{{$store.state.counter}}</h2>
    <button @click="sub">-</button>
    <button @click="add">+</button>

    <h2>-------App：getters-------</h2>
    <h2>counter的平方：{{$store.getters.powerCounter}}</h2>
    <h2>年龄大于20岁的学生：{{$store.getters.studentsOlderThan20}}</h2>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {
    sub() {
      // 通过 this.$store.commit('mutation中的方法名') 来修改状态
      this.$store.commit('decrease')
    },
    add() {
      this.$store.commit('increase')
    }
  },
}
</script>

<style>

</style>

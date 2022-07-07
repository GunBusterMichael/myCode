<template>
  <div>
    <div>v-model父组件：</div>
    <!--
      v-model 实现原理：
        将表单的 value 绑定为变量 message；
        再为表单绑定 input 事件：value 变化时将 value 值赋值给变量 message
    -->
    <input type="text" :value="message" @input="message = $event.target.value">
    <!-- 简写： -->
    <input type="text" v-model="message">
    <span>{{message}}</span>

    <div>v-model子组件：</div>
    <!--
      1. 将 message 变量传递给子组件。在子组件中，message 变量叫做 value 变量；
      2. 将子组件中 input 的 value 值绑定为传递过去的 value 变量；
      3. 为子组件中的 input 标签绑定 input 事件：
        input 事件中，通过 $emit('input', $event.target.value) 将 input 标签的 $event.target.value 传递给父组件。
      4. 父组件中，子组件标签的 input 事件为自定义事件（子组件向父组件传值的事件）；
      5. 父组件 input 自定义事件被触发（子组件 input 事件被触发）时，将子组件传过来的值赋值给父组件的 message 变量。
    -->
    <son :value="message" @input="handleSonInput"></son>
    <!-- 简写： -->
    <son v-model="message"></son>
  </div>
</template>

<script>
  import son from './v-model-son.vue'

  export default {
    name: "v-model-father",
    data () {
      return {
        message: '你好啊'
      }
    },
    components: {
      son
    },
    methods: {
      handleSonInput(sonValue) {
        this.message = sonValue
      }
    }
  }
</script>

<style scoped>
  
</style>
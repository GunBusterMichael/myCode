<template>
  <div>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
  export default {
    name: "v-model-son",
    props: {
      value: String
    }
  }
</script>

<style scoped>
  
</style>
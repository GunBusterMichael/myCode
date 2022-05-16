<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩/主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    
  }
</script>

<style lang="stylus" scoped>
  /* 1rem = html的font-size = 50px */
  .header
    display: flex
    height: .86rem
    background: #00bcd4
    color: #fff
    line-height .86rem
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
      background-color #fff
      border-radius: .1rem
      height: .64rem
      margin-top .11rem
      margin-left .2rem
      color: #ccc
      line-height .64rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>
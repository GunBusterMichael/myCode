<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息耶耶耶</p>
    <p>当前用户：{{userId}}</p>
    <button @click="btnClick">拿到this.$router</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      // this.$route 是当前正在活跃的路由
      /*
        this.$route.params.xxx 是当前正在活跃的动态路由的动态地址（/user/:userId中的/user/:userId）
      */
      return this.$route.params.userId;
    },
  },
  methods: {
    btnClick() {
      console.log(this.$router);
    }
  },

};
</script>

<style scoped>
</style>
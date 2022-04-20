<template>
  <div id="app">
    <div>我是 Vue 实例的 template</div>

    <!-- 将 url 对应的组件添加到 Vue 实例中 -->
    <!--
      router-link 的 tag 属性
        1. 作用
          决定 router-link 标签被渲染成什么标签。
        2. 默认值
          如果不写 tag 属性，router-link 会被默认渲染成 a 标签。
    -->
    <!--
      router-link 的 replace 属性
        1. 作用
          使用 history.replaceState 进行跳转，
            防止用户通过浏览器返回按钮进行页面跳转。
        2. 写法
          replace
    -->
    <!--
      router-link 的 active-class 属性
        1. 作用
          将指定的 router-link 的类名 router-link-active 改为别的类名。
        2. 写法
          active-class="类名"
        3. 使用频率
          不经常使用。
    -->
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
    <!-- 动态路由 -->
    <router-link :to="'/user/' + userId">用户</router-link>
    <!-- 路由传递参数 -->
    <router-link :to="{path: '/profile', query: {name: 'why', age: 21, height: 180}}">档案</router-link>

    <hr>

    <!-- 使用其他标签实现跳转路由 -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- router-view 标签决定组件的显示位置-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: 'Michael'
    }
  },
  methods: {
    homeClick() {
      /*
        使用 push 方法跳转路由
          1. 拿到 url 栈
            this.$router
          2. 将要跳转到的 url push 到栈中
            this.$router.push('url')
      */
      // this.$router.push('/home')

      /*
        使用 replace 方法跳转路由
          1. 拿到 url 栈
            this.$router
          2. 将当前的 url 替换为要跳转到的 url
            this.$router.replace('url')
      */
      this.$router.replace('/home')
    },
    
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    
    userClick() {
      // 使用其他标签实现路由，并实现动态路由
      this.$router.push('/user/' + this.userId)
    },
    
    profileClick() {
      // 使用其他标签实现路由，并实现通过路由传递参数
      this.$router.push({
        path: '/profile',
        query: {
          name: 'Michael',
          age: 21,
          height: 180
        }
      })
    }
  },
};
</script>

<style>
  /*
    router-link 的 class：router-link-active
      1. 出现时机
        当前被显示的 router-link，其被渲染后的标签，会含有一个 router-link-active 类。
      2. 作用
        2.1 为当前所显示的 router-link 标签添加样式。
  */
  /*
  .router-link-active {
    color: #f00;
  }
  */
  .active {
    color: #f00;
  }
</style>

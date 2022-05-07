<template>
  <div id="app">
    <h2>-------App-------</h2>
    <!-- 通过 this.$store.state. 属性访问 vuex 状态 -->
    <p>counter：{{ $store.state.counter }}</p>
    <button @click="sub">-</button>
    <button @click="add">+</button>
    <button @click="addMany(5)">+5</button>
    <button @click="addMany(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <button @click="changeInfo">修改info</button>

    <h4>-------getters-------</h4>
    <p>counter的平方：{{ $store.getters.powerCounter }}</p>
    <p>年龄大于20岁的学生：{{ $store.getters.studentsOlderThan20 }}</p>
    <p>
      年龄大于20岁的学生的个数：{{ $store.getters.numOfstudentsOlderThan20 }}
    </p>
    <p>年龄大于22岁的学生：{{ $store.getters.studentsOlderThan(22) }}</p>

    <h4>-------state中的info对象是否是响应式-------</h4>
    <p>{{ $store.state.info }}</p>

    <h4>-------modules中的内容-------</h4>
    <!-- modules中的内容会被放到state中，所以要从state里获取modules中的内容 -->
    <p>{{ $store.state.a.name }}</p>
    <button @click="updateModulesName">更改modules中的内容</button>
    <p>{{ $store.getters.fullname }}</p>
    <p>{{ $store.getters.fullname2 }}</p>
    <p>{{ $store.getters.fullname3 }}</p>
    <button @click="asyncUpdateModulesName">异步修改modules中的内容</button>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
import {
  INCREASE,
  DECREASE,
  ADD_MANY,
  ADD_STUDENT,
  CHANGE_INFO,
} from "@store/mutations-types";

export default {
  name: "App",
  components: {
    HelloVuex,
  },
  methods: {
    sub() {
      // 通过 this.$store.commit('mutation中的方法名') 来修改状态
      this.$store.commit(DECREASE);
    },
    add() {
      this.$store.commit(INCREASE);
    },
    // 向 mutations 中的方法传值
    addMany(num) {
      /*
        提交风格：
          1. 提交两个参数（方法类型，方法参数）
      */
      // this.$store.commit('addMany', num)
      /*
        2. 提交一个对象
          {
            type: 'mutations 中的方法名',
            方法参数
          }
      */
      this.$store.commit({
        type: ADD_MANY,
        num,
      });
    },
    addStudent() {
      const student = { id: "5", name: "詹姆士", age: 25 };
      this.$store.commit(ADD_STUDENT, student);
    },
    changeInfo() {
      // this.$store.commit(CHANGE_INFO)

      /* actions 中 aChangeInfo 会将 promise 实例返回到这里 */
      this.$store.dispatch("aChangeInfo", "进行异步操作").then((re) => {
        console.log(re);
        console.log("异步操作已完成");
      });
    },
    updateModulesName() {
      // 直接写 modules 中的 mutations 方法
      this.$store.commit("updateName", "Aney");
    },
    asyncUpdateModulesName() {
      this.$store.dispatch('aUpdateName')
    }
  },
};
</script>

<style>
</style>

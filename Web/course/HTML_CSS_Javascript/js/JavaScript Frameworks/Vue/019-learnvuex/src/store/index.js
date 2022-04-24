/* 在这个文件中安装 vuex */
import Vue from 'vue'
import Vuex from 'vuex'

// 安装 vuex
Vue.use(Vuex)

// 创建一个 store 实例
const store = new Vuex.Store({
  // 定义状态
  state: {
    counter: 1000,
    students: [
      { id: '1', name: '张三', age: 18 },
      { id: '2', name: '李四', age: 20 },
      { id: '3', name: '王五', age: 22 },
      { id: '4', name: '赵六', age: 24 }
    ]
  },

  // 定义改变状态的方法
  mutations: {
    // 参数 state 就是上面的 state（store实例中的 state（状态））
    increase(state) {
      state.counter++
    },
    decrease(state) {
      state.counter--
    },
    // mutations 中的方法接受组件方法传来的值
    addMany(state, payload) {
      // 接受提交风格1：将方法类型和方法参数作为两个单独的参数传递
      // state.counter += num
      // 接受提交风格2：一个对象包方法类型与方法参数
      state.counter += payload.num
    },
    addStudent(state, student) {
      state.students.push(student)
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state) {
      return Math.pow(state.counter, 2)
    },
    studentsOlderThan20(state) {
      // return state.students.filter((item) => {
      //   return item.age > 20
      // })
      // 用箭头函数写成一行👇
      return state.students.filter(item => item.age > 20)
    },
    numOfstudentsOlderThan20(state, getters) {
      return getters.studentsOlderThan20.length
    },
    // 向 getters 函数传自定义参数的方法：返回一个函数
    studentsOlderThan(state) {
      return function (age) {
        return state.students.filter(item => item.age > age)
      }
    }
  },
  modules: {

  }
})

export default store
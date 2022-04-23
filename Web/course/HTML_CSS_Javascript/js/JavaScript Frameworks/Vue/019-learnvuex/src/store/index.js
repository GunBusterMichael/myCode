/* 在这个文件中安装 vuex */
import Vue from 'vue'
import Vuex from 'vuex'

// 安装 vuex
Vue.use(Vuex)

// 创建一个 store 实例
const store = new Vuex.Store({
  // 定义状态
  state: {
    counter: 1000
  },

  // 定义改变状态的方法
  mutations: {
    // 参数 state 就是上面的 state（store实例中的 state（状态））
    increase (state) {
      state.counter++
    },
    decrease (state) {
      state.counter--
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default store
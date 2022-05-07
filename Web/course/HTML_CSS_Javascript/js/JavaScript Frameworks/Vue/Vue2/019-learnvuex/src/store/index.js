/* 在这个文件中安装 vuex */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@store/mutations.js'
import actions from '@store/actions.js'
import getters from '@store/getters.js'
import moduleA from '@store/modules/moduleA.js'

// 安装 vuex
Vue.use(Vuex)

// 将 store 中的 state 抽离出来（定义状态）
const state = {
  counter: 1000,
  students: [
    { id: '1', name: '张三', age: 18 },
    { id: '2', name: '李四', age: 20 },
    { id: '3', name: '王五', age: 22 },
    { id: '4', name: '赵六', age: 24 }
  ],
  info: {
    name: 'Michael',
    age: 21,
    height: 180
  }
}

// 创建一个 store 实例
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  /* 可在 modules 中抽离部分数据 */
  modules: {
    a: moduleA
  }
})

export default store
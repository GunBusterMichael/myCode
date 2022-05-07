/* 在这个文件中安装 vuex */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'store/mutations.js'
import actions from 'store/actions.js'
import getters from 'store/getters.js'

// 安装 vuex
Vue.use(Vuex)

// 将 store 中的 state 抽离出来（定义状态）
const state = {
  query: "",
  weatherInfo: {},
  bgKind: "",
}

// 创建一个 store 实例
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store
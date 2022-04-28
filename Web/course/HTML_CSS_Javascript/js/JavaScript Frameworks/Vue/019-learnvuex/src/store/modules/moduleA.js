// 将 store 中的 modele 抽离出来
const moduleA = {
  state: {
    name: 'Andy',
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return 'Mr. ' + state.name
    },
    fullname2(state, getters) {
      return 'Mrs. ' + getters.fullname
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'WangWu')
      }, 1000);
    }
  }
}
export default moduleA
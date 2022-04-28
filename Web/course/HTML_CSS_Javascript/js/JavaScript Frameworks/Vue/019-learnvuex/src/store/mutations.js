import {
  INCREASE,
  DECREASE,
  ADD_MANY,
  ADD_STUDENT,
  CHANGE_INFO
} from '@store/mutations-types'

// 定义改变状态的方法
const mutations = {
  // 参数 state 就是上面的 state（store实例中的 state（状态））
  [INCREASE](state) {
    state.counter++
  },
  [DECREASE](state) {
    state.counter--
  },
  // mutations 中的方法接受组件方法传来的值
  [ADD_MANY](state, payload) {
    // 接受提交风格1：将方法类型和方法参数作为两个单独的参数传递
    // state.counter += num
    // 接受提交风格2：一个对象包方法类型与方法参数
    state.counter += payload.num
  },
  [ADD_STUDENT](state, student) {
    state.students.push(student)
  },
  [CHANGE_INFO](state) {
    // 修改已在 state 中声明的数据，可以做到响应式
    state.info.name = 'coderwhy'
    // 直接添加没有在 state 中声明的数据，可以做到响应式
    state.info['responsive1'] = 'OK1'
    // 通过 Vue.set 方法，可以做到响应式添加没有在 state 中声明的数据
    Vue.set(state.info, 'responsive2', 'OK2')
    // 通过 delete 关键字，可以做到响应式地删除数据
    delete state.info.name
    // 通过 Vue.set 方法，可以做到响应式地删除数据
    Vue.delete(state.info, 'age')
  }
}

export default mutations
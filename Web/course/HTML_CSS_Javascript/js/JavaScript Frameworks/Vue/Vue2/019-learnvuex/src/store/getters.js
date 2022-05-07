/* 在此处定义计算属性 */
const getters = {
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
}
export default getters
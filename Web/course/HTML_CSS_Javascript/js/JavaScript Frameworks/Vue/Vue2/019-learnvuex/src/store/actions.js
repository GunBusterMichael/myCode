import {
  INCREASE,
  DECREASE,
  ADD_MANY,
  ADD_STUDENT,
  CHANGE_INFO
} from '@store/mutations-types'

const actions = {
    aChangeInfo(context, message) {
      // 该 promise 实例会被返回给组件中调用aChangeInfo 的方法中
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(CHANGE_INFO)
          console.log(message);
          resolve('返回一些数据')
        }, 1000)
      })
    }
  }

export default actions
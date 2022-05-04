import axios from 'axios'

// 将利用 axios 实现的请求操作封装到函数 request 中
export function request(config) {
  // 将请求操作封装到一个 promise 实例中
  // 1. 创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2. 调用 axios 实例，发送网络请求
  return instance(config)
}
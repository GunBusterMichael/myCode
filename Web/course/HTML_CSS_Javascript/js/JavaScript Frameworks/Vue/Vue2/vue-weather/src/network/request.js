import axios from 'axios'

// 将利用 axios 实现的请求操作封装到函数 request 中
export function requestAdcode(config) {
  // 将请求操作封装到一个 promise 实例中
  // 1. 创建 axios 实例
  const instance = axios.create({
    baseURL: 'https://restapi.amap.com/v3/geocode/geo?parameters',
    timeout: 5000
  })

  // 2. axios 拦截器
  // 2.1 拦截请求
  instance.interceptors.request.use(config => {  // 2.1.1 请求成功时进行拦截
    // console.log(config)  // 返回 这次请求的配置 config
    /*
      用途：
        1. 展示类似于“页面加载中”的文字和动画；
        2. 判断请求中是否携带了特殊信息，比如 token。
    */
    // 处理完成后，要将请求的 config 返回，axios 才能继续请求数据
    config.params.key = 'ec57f78e534ba7505b77d3cd96406515'
    return config
  }, err => {
    console.log(err)  // 返回 请求错误信息
  })

  // 2.2 响应拦截：拦截请求到的数据
  instance.interceptors.response.use(res => {
    // console.log(res)
    // 将拦截到的数据中的 data 返回出去
    return res.data
  }, err => {
    console.log(err)
  })

  // 3. 调用 axios 实例，发送网络请求
  return instance(config)
}
// 将利用 axios 实现的请求操作封装到函数 request 中
export function requestWeather(config) {
  // 将请求操作封装到一个 promise 实例中
  // 1. 创建 axios 实例
  const instance = axios.create({
    baseURL: 'https://restapi.amap.com/v3/weather/weatherInfo',
    timeout: 5000
  })

  // 2. axios 拦截器
  // 2.1 拦截请求
  instance.interceptors.request.use(config => {  // 2.1.1 请求成功时进行拦截
    // console.log(config)  // 返回 这次请求的配置 config
    /*
      用途：
        1. 展示类似于“页面加载中”的文字和动画；
        2. 判断请求中是否携带了特殊信息，比如 token。
    */
    // 处理完成后，要将请求的 config 返回，axios 才能继续请求数据
    config.params.key = 'ec57f78e534ba7505b77d3cd96406515'
    config.params.extensions = 'base'
    return config
  }, err => {
    console.log(err)  // 返回 请求错误信息
  })

  // 2.2 响应拦截：拦截请求到的数据
  instance.interceptors.response.use(res => {
    // console.log(res)
    // 将拦截到的数据中的 data 返回出去
    return res.data.lives[0]
  }, err => {
    console.log(err)
  })

  // 3. 调用 axios 实例，发送网络请求
  return instance(config)
}
/* 在此处定义计算属性 */
const getters = {
  province(state) {
    return state.weatherInfo.province;
  },
  city(state) {
    return state.weatherInfo.city;
  },
  temp(state) {
    return state.weatherInfo.temperature + "℃";
  },
  date(state) {
    return "天气更新时间：" + state.weatherInfo.reporttime;
  },
  weather(state) {
    return state.weatherInfo.weather;
  },
}

export default getters
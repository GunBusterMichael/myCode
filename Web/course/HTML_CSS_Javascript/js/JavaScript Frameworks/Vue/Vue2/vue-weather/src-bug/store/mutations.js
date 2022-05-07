import {
  SET_BG,
  PRESS_ENTER,
  FETCH_WEATHER,
  CHANGE_WEATHER_INFO,
  CHANGE_QUERY
} from 'store/mutations-types'

const mutations = {
  [SET_BG](state) {
    state.bgKind = state.weatherInfo.temperature > 16 ? "warm" : "cold";
  },
  [CHANGE_WEATHER_INFO](state, payload) {
    state.weatherInfo = payload;
  },
  
  [CHANGE_QUERY](state, payload) {
    state.query = payload;
  }
}

export default mutations
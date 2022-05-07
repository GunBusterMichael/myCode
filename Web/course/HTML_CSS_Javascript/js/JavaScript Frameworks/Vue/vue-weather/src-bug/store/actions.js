import {
  SET_BG,
  PRESS_ENTER,
  FETCH_WEATHER,
  CHANGE_WEATHER_INFO,
  CHANGE_QUERY
} from 'store/mutations-types'
import { requestAdcode, requestWeather } from "network/request";

const actions = {
  // 等同于传入了 context.state 和 context.commit
  async [FETCH_WEATHER]({ state, commit }) {
    // 请求 adcode
    const locationInfo = await requestAdcode({
      params: {
        address: state.query,
      },
    });
    // 请求天气数据
    const weatherInfo = await requestWeather({
      params: {
        city: locationInfo.geocodes[0].adcode,
      },
    });
    commit(CHANGE_WEATHER_INFO, weatherInfo);
    commit(SET_BG);
  },
  [PRESS_ENTER](context, e) {
    if (e.key == "Enter") {
      context.dispatch(FETCH_WEATHER);
      context.commit(CHANGE_QUERY, '');
    }
  },
}

export default actions
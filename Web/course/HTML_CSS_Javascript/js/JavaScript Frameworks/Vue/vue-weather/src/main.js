import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { requestAdcode, requestWeather } from './network/request'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

async function fetchWeather() {
  const locationInfo = await requestAdcode({
    params: {
      address: '西城',
    }
  })
  const weatherInfo = await requestWeather({
    params: {
      city: locationInfo.geocodes[0].adcode,
    }
  })
  // console.log(weatherInfo);
}
fetchWeather()

requestAdcode({
  params: {
    key: 'ec57f78e534ba7505b77d3cd96406515',
    address: '西城',
  }
})
  .then(res => {
    requestWeather({
      params: {
        key: 'ec57f78e534ba7505b77d3cd96406515',
        city: res.geocodes[0].adcode,
        extensions: 'base',
      }
    })
      .then(res => {
        // console.log(res)
      })
  })

requestWeather({
  params: {
    city: '110101',
    key: 'ec57f78e534ba7505b77d3cd96406515',
    extensions: 'base',
  }
})
  .then(res => {
    // console.log(res)
  })

// {
//   "status": "1",
//     "info": "OK",
//       "infocode": "10000",
//         "count": "1",
//           "geocodes": [
//             {
//               "formatted_address": "北京市西城区西城",
//               "country": "中国",
//               "province": "北京市",
//               "citycode": "010",
//               "city": "北京市",
//               "district": "西城区",
//               "township": [],
//               "neighborhood": {
//                 "name": [],
//                 "type": []
//               },
//               "building": {
//                 "name": [],
//                 "type": []
//               },
//               "adcode": "110102",
//               "street": [],
//               "number": [],
//               "location": "116.368939,39.889577",
//               "level": "兴趣点"
//             }
//           ]
// }
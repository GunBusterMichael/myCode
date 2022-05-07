<template>
  <div id="app" :class="bgKind">
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="按下回车来查询"
          v-model="query"
          @keypress="pressEnter"
        />
      </div>

      <div class="weather-wrap" v-if="weatherInfo.temperature != undefined">
        <div class="location-box">
          <div class="location">{{ province }}&nbsp;&nbsp;{{ city }}</div>
          <div class="date">{{ date }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ temp }}</div>
          <div class="weather">{{ weather }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { requestAdcode, requestWeather } from "./network/request";

export default {
  name: "App",
  data() {
    return {
      query: "",
      weatherInfo: {},
      bgKind: "",
    };
  },
  computed: {
    province() {
      return this.weatherInfo.province;
    },
    city() {
      return this.weatherInfo.city;
    },
    temp() {
      return this.weatherInfo.temperature + "℃";
    },
    date() {
      return "天气更新时间：" + this.weatherInfo.reporttime;
    },
    weather() {
      return this.weatherInfo.weather;
    },
  },
  filters: {
    hideUndefined(value) {
      if (value === undefined) {
        return "";
      } else {
        return value;
      }
    },
  },
  methods: {
    setBg() {
      this.bgKind = this.weatherInfo.temperature > 16 ? "warm" : "cold";
    },
    async fetchWeather() {
      // 请求 adcode
      const locationInfo = await requestAdcode({
        params: {
          address: this.query,
        },
      });
      // 请求天气数据
      const weatherInfo = await requestWeather({
        params: {
          city: locationInfo.geocodes[0].adcode,
        },
      });
      this.weatherInfo = weatherInfo;
      this.setBg();
    },
    pressEnter(e) {
      if (e.key == "Enter") {
        this.fetchWeather();
        this.query = ''
      }
    },
  },
  created() {
    this.query = "枝江市";
    this.fetchWeather.call(this);
    this.query = "";
  },
};
</script>

<style>
@import url("assets/css/init.css");
@import url("assets/css/index.css");
</style>

// {
//     "province": "北京",
//     "city": "西城区",
//     "adcode": "110102",
//     "weather": "阴",
//     "temperature": "22",
//     "winddirection": "北",
//     "windpower": "≤3",
//     "humidity": "58",
//     "reporttime": "2022-05-05 23:41:22"
// }
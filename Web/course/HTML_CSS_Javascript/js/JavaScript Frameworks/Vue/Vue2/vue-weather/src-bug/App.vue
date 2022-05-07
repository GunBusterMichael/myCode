<template>
  <div id="app" :class="$store.state.bgKind" v-if="isInit">
    <main>
      <search-box>
        <template v-solt:search-bar>
          <search-bar></search-bar>
        </template>
      </search-box>

      <weather-wrap>
        <template v-slot:location-box>
          <location-box></location-box>
        </template>
        <template v-slot:weather-box>
          <weather-box></weather-box>
        </template>
      </weather-wrap>
    </main>
  </div>
</template>

<script>
import {
  SET_BG,
  PRESS_ENTER,
  FETCH_WEATHER,
  CHANGE_WEATHER_INFO,
  CHANGE_QUERY
} from 'store/mutations-types'

import SearchBar from 'components/search-box/search-bar.vue'
import SearchBox from 'components/search-box/search-box.vue'
import WeatherWrap from 'components/weather-wrap/weather-wrap.vue'
import WeatherBox from 'components/weather-wrap/weather-box.vue'
import LocationBox from 'components/weather-wrap/location-box.vue'

export default {
  name: "App",
  data() {
    return {
      isInit: false
    }
  },
  components: {
    SearchBar,
    SearchBox,
    WeatherWrap,
    WeatherBox,
    LocationBox,
  },
  created() {
    this.query = "枝江市";
    this.$store.dispatch(FETCH_WEATHER)
      .then(() => {
        isInit = true
        console.log(isInit);
      })
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
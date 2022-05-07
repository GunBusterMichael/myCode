<template>
  <div class="weather-box">
    <div class="temp">{{ $store.getters.temp }}</div>
    <div class="weather">{{ $store.getters.weather }}</div>
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

export default {
  name: "weather-box",

}
</script>

<style scoped>
</style>
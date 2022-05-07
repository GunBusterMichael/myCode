<template>
  <div class="weather-wrap" v-if="$store.state.weatherInfo.temperature != undefined">
    <slot name="location-box"></slot>
    <slot name="weather-box"></slot>
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
  name: "weather-wrap",

}
</script>

<style scoped>
</style>
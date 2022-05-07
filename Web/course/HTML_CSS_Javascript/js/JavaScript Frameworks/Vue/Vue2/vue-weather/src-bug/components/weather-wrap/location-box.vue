<template>
  <div class="location-box">
    <div class="location">{{ $store.getters.province }}&nbsp;&nbsp;{{ $store.getters.city }}</div>
    <div class="date">{{ $store.getters.date }}</div>
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
  name: "location-box",
}
</script>

<style scoped>
</style>
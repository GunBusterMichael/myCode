<template>
  <div class="search-box">
    <slot name="search-bar"></slot>
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
  name: "search-box",

}
</script>

<style scoped>
</style>
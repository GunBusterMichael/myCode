<template>
  <div>
    <input type="text" class="search-bar" placeholder="按下回车来查询" v-model="query" @keypress="pressEnter" />
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
  name: "search-bar",
  computed: {
    query: {
      get() {
        return this.$store.query
      },
      set(payload) {
        this.$store.commit(CHANGE_QUERY, payload)
      }
    }
  },
  methods: {
    pressEnter(e) {
      this.$store.dispatch(PRESS_ENTER, e)
    },
  },
}
</script>

<style scoped>

</style>
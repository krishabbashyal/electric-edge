<template>
  <div>
    <div v-for="city in cities" :key="city">
      <city-select-button :city="city" />
    </div>
  </div>
</template>

<script>

import CitySelectButton from "./CitySelectButton.vue"

export default {
  name: "CitySelectScroller",
  components: {
    CitySelectButton
  },

  data(){
    return {
      cities: ["Dallas, TX", "Hot Springs, AR", "Shreveport, LA"]
    }
  }
};
</script>

<style scoped>

</style>

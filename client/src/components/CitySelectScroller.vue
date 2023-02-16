<template>
  <div class="flex flex-row overflow-scroll whitespace-nowrap ml-6 mt-4 py-2.5 scroll-auto">
    <div class="last:mr-6" v-for="city in cities" :key="city">
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
      cities: ["Dallas, TX", "Hot Springs, AR", "Shreveport, LA", "Zuman City, TX", "Bankit, TX", "Hoseph, AR"]
    }
  }
};
</script>

<style scoped>

.hideScroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hideScroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>

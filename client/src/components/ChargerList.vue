<template>
  <div class="charger-list">
    <div v-if="loading" class="loadingContainer">
      <loading-spinner/>
    </div>
    <div v-if="chargers.length === 0" class="h-72">
      No data
    </div>
    <div v-else>
      <div class="flex justify-center items-center">
        <city-select-scroller/> 
      </div>
      <div v-for="charger in chargers" :key="charger.id">
          <charger-card :chargerData="charger" />
      </div> 
    </div>

  </div>
</template>

<script>

import ChargerCard from "./ChargerCard.vue"
import LoadingSpinner from "./LoadingSpinner.vue"
import CitySelectScroller from "./CitySelectScroller.vue"
import axios from "axios"

export default {
  name: "ChargerList",
  components: {
    ChargerCard,
    LoadingSpinner,
    CitySelectScroller
  },
  
  data() {
    return {
      chargers: [],
      loading: true
    };
  },

  async mounted() {
    if (process.env.VUE_APP_ENVIRONMENT === "Production"){
      let result = await axios.get(process.env.VUE_APP_PRODUCTION_API);
      this.chargers = result.data.chargers;
    }
    else{
      let result = await axios.get(process.env.VUE_APP_DEVELOPMENT_API);
      console.log(result)
      this.loading = false
    }
  },
};
</script>

<style scoped>

.loadingContainer{
  text-align: center;
}

.loadingText{
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 3rem;
}

.width-container {
  margin: 15px;
  display: flex;
}

.blue-highlight {
  color: #589bff;
  font-weight: bold;
}

.faded-blk {
  color: #737373;
}
</style>

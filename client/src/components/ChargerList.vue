<template>
  <div class="charger-list">
    <div v-if="chargers.length === 0" class="loadingContainer">
      <loading-spinner/>
      <p>**Loading is slowed to show animation effects**</p>
      <p>If nothing is loading after 5 seconds</p>
      <p>Please ensure that you have the server running</p>
    </div>
    <div v-for="charger in chargers" :key="charger.id">
        <charger-card :chargerData="charger" />
    </div> 
  </div>
</template>

<script>

import ChargerCard from "./ChargerCard.vue"
import LoadingSpinner from "./LoadingSpinner.vue"
import axios from "axios"

export default {
  name: "ChargerList",
  components: {
    ChargerCard,
    LoadingSpinner
  },
  
  data() {
    return {
      chargers: [],
    };
  },

  async mounted() {
    await new Promise(r => setTimeout(r, 4000));
    let result = await axios.get("http://localhost:3000/");
    this.chargers = result.data.chargers;
    console.log(this.chargers);
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

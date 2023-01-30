<template>
  <div>
    <navigation-bar />
    <hero-section />
    <about-application />
    <how-it-works />
    <landing-page-footer />
    <div v-for="charger in chargers" :key="charger.id">
      <charger-card :chargerData="charger" />
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutApplication from "./components/AboutApplication.vue";
import HowItWorks from "./components/HowItWorks.vue";
import LandingPageFooter from "./components/LandingPageFooter.vue";
import ChargerCard from "./components/ChargerCard.vue";

import axios from "axios";

export default {
  name: "App",
  components: {
    NavigationBar,
    HeroSection,
    AboutApplication,
    HowItWorks,
    LandingPageFooter,
    ChargerCard,
  },
  data() {
    return {
      chargers: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/");
    this.chargers = result.data.chargers;
    console.log(this.chargers);
  },
};
</script>

<style>
@font-face {
  font-family: "Inter";
  src: url("~@/assets/fonts/Inter-VariableFont_slnt,wght.ttf");
}

* {
  font-family: "Inter";
  margin: 0;
  padding: 0;
}
</style>

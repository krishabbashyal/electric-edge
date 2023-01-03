<template>
  <div>
    <navigation-bar />
    <hero-section />
    <about-application />
    <how-it-works />
    <landing-page-footer />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutApplication from "./components/AboutApplication.vue";
import HowItWorks from "./components/HowItWorks.vue";
import LandingPageFooter from "./components/LandingPageFooter.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    HeroSection,
    AboutApplication,
    HowItWorks,
    LandingPageFooter,
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

<template>
  <app-header/>
  <hero-section/>
  <about-application/>
  <get-started/>
  <app-footer/>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutApplication from './components/AboutApplication.vue'
import GetStarted from './components/GetStarted.vue'
import AppFooter from './components/GlobalAppFooter.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    AboutApplication,
    GetStarted,
    AppFooter
  }
}
</script>

<style>

@font-face {
    font-family: 'Inter';
    src: url('~@/assets/fonts/Inter-VariableFont_slnt,wght.ttf');
}

* {
  font-family: 'Inter';
  margin: 0;
  padding: 0
}
</style>


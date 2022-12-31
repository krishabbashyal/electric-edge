<template>
  <app-header/>
  <hero-section/>
  <about-application/>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutApplication from './components/AboutApplication.vue'



export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    AboutApplication
  }
}
</script>

<style>
* {
  font-family: 'Inter';
  margin: 0;
  padding: 0
}
</style>


<template>
  <div>
    <router-view></router-view>












    <!-- <navigation-bar />
    <error-404-not-found />
    <hero-section />
    <about-application />
    <application-footer/>
    <how-it-works />
    <landing-page-footer />
    <div v-for="charger in chargers" :key="charger.id">
      <charger-card :chargerData="charger" />
    </div> -->
  </div>
</template>

<script>




export default {
  name: "App",
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

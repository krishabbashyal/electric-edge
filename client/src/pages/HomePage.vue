<template>
    <div>
      <navigation-bar/>
      <charger-list/>
      <application-footer/>
    </div>

</template>

<script>

import NavigationBar from "../components/NavigationBar.vue";
import ChargerList from "../components/ChargerList.vue";
import ApplicationFooter from "../components/ApplicationFooter.vue";

export default {
  name: "HomePage",
  components: {
    NavigationBar,
    ChargerList,
    ApplicationFooter
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

<template>
  <div>
    <button>{{ city }} {{ state }}</button>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
    },
  },
  name: "CitySelectButton",
};
</script>

<style scoped>

</style>

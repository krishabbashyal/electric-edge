<template>
  <div  class="">
    <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">{{ city }} {{ state }}</button>
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

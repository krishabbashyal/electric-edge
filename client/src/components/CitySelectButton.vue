<template>
  <div  class="">
    <button class="bg-gray-300 hover:bg-blue-400 text-zinc-800 font-bold py-2 mr-2 px-4 rounded-full border-none">{{ city }} {{ state }}</button>
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

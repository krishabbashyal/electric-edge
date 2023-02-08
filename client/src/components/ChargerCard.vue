<template>
  <div class="width-container">
    <div class="charger-card">
      <img :src="require(`../assets/images/${chargerData.image}`)" />
      <p class="blue-highlight">{{ chargerData.location }}</p>
      <p class="faded-blk">{{ chargerData.type }}</p>
      <p class="faded-blk">{{ chargerData.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChargerCard",
  props: {
    chargerData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.width-container {
  margin: 15px;
  display: flex;
  justify-content: center;
}

.blue-highlight {
  color: #589bff;
  font-weight: bold;
}

.faded-blk {
  color: #737373;
}
</style>

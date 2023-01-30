<template>
  <div>
    <img :src="require(`../assets/images/${image}`)" />
    <p class="para">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  name: "GetStartedSteps",
};
</script>

<style scoped>
.super-simple {
  font-size: 1.3rem;
  font-weight: 700;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
  text-align: center;
}

.para {
  margin: auto;
  margin-bottom: 2rem;
  width: 18rem;
  text-align: center;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 2.75rem;
  padding: 0.75rem;
  background-color: #0066ff;
  border-radius: 100%;
  margin-bottom: 0.75rem;
}
</style>

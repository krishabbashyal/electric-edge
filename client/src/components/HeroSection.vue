<template>
  <div>
    <h1 class="textContent">We are changing the charging game.</h1>
    <p>The easiest way to find chargers on the go.</p>
    <img
      src="../assets/images/ElectricEdgeHero.png"
      alt="House with solar panels charging a blue electric car"
    />
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
* {
  letter-spacing: 0.03rem;
}
.textContent {
  font-size: 2.2rem;
  width: 19rem;
  text-align: center;
  font-weight: 900;
  margin: auto;
  margin-top: 0.7rem;
}
p {
  font-size: 1.25rem;
  width: 15rem;
  text-align: center;
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: -1rem;
  font-weight: 300;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
}
</style>

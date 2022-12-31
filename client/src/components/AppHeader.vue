<template>
  <div class='header'>
      <h1>ElectricEdge</h1>
  </div>
  <div class='header-spacing'></div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>

.header{
  position: fixed;
  background-color: #ffffff;
  width: 150rem;
  height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.301);
}

.header-spacing{
  padding-bottom: 7rem;
}

h1{
  color: #0066FF;
  font-size: 1.55rem;
  padding: 2.4rem;
  font-style: normal;
  font-weight: 900;
  line-height: 2rem;
  
}

</style>


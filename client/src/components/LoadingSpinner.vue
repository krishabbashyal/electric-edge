<template>
  <div class="loadingContainer">
    <div class="contentFloat">
      <h1 class="loadingText">Loading...</h1>
      <p>Just a couple more seconds!</p>
    </div>
  </div>
    
</template>

<script>



export default {
    name: "LoadingSpinner",

}
</script>

<style scoped>
.loadingContainer{
  text-align: center;
  height: calc(100vh - 13.30rem); /* SECOND VALUE IN THIS LINE IS THE MARGIN + PADDING ON THE HEADER AND FOOTER */
}

.contentFloat{
  margin-top: 3rem;
  text-align: center;
  position: absolute;
}
</style>
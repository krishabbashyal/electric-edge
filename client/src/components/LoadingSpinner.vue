<template>
  <div class="loadingContainer">
    <div class="contentFloat">
      <h1>Loading</h1>
      <p class="additonalText">This should not take long</p>
      <br>
      <h3>Development Notice:</h3>
      <p>Loading is slowed to show loading effects.</p>
      <p>If nothing is loading after 5 seconds</p>
      <p>Please ensure that you have the server running on your machine</p>
      <div class="animation">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style scoped>
.loadingContainer {
  text-align: center;
  color: black;
  font-size: 0.75rem;
  height: calc(100vh - 13.3rem);
  /* SECOND VALUE IN THIS LINE IS THE MARGIN + PADDING ON THE HEADER AND FOOTER */
}

.additonalText {
  color: #0066ff;
}

.contentFloat {
  margin-top: 14rem;
  position: absolute;
  left: 0;
  right: 0;
}

.animation {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.animation div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 12px;
  background: #0066FF;
  animation: animation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.animation div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.animation div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.animation div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes animation {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

</style>

<template>
  <div class='bg-blue'>
    <p class='no-station'>No charging station?</p>
    <p class='no-problem'>No Problem!</p>
    <p>Using our network of individually listed vehicle chargers we aim to reduce the strain on the existing charging network and make it easier for people to charge their vehicles while on the go.</p>
  </div>
</template>

<script>
export default {
  name: "AboutApplication",
};
</script>

<style scoped>
.bg-blue{
  background-color: #0066FF;
  color: white ;
  text-align: center;
  padding: .8rem;
  width: 100%;
}
.no-station{
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
}

.no-problem{
  font-size: 1.3rem;
  margin-bottom: .8rem;
}
</style>



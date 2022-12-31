<template>
  <div class='bg-blue'>
    <p class='no-station'>No charging station?</p>
    <p class='no-problem'>No Problem!</p>
    <p class='using-our'>Using our network of individually listed vehicle chargers we aim to reduce the strain on the existing charging network and make it easier for people to charge their vehicles while on the go.</p>
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
  padding: 1rem;

}
.no-station{
  font-size: 1.3rem;
  font-weight: 700;
  margin: auto;
}

.no-problem{
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.using-our{
  margin-bottom: 1rem;
}
</style>



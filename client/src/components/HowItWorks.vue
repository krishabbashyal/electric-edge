<template>
    <div>
        <p class='super-simple'>Super simple to get started</p>
        <p class='para'>Once an account is registered, follow the steps to get started</p>
        <get-started-steps image="Research.png" message="Search for potential chargers in your area"/>
        <get-started-steps image="Connection.png" message="Send a request to book the charger for as long as needed"/>
        <get-started-steps image="Charge.png" message="Get to the charger and charge your vehicle in the alloted time"/>
        

    </div>
</template>

<script>
import GetStartedSteps from './GetStartedSteps.vue'

export default {
  components: {
    GetStartedSteps
  },
  name: "HowItWorks",
};
</script>

<style scoped>

.super-simple{
  font-size: 1.3rem;
  font-weight: 700;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: .25rem;
  text-align: center;
}

.para{
    margin: auto;
    margin-bottom: 1rem;
    width: 18rem;
    text-align: center;
}
</style>


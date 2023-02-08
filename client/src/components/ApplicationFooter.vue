<template>
  <div class="footer">
    <h1>ElectricEdge</h1>
    <p>Terms and Conditions</p>
    <p>Privacy Policy</p>
    <p>Copyright © 2023</p>
  </div>
</template>

<script>
export default {
  name: "ApplicationFooter",
};
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  width: calc(100%);
  height: 7rem;
  border-top: 1px solid rgba(0, 0, 0, 0.301);
  background: linear-gradient(180deg, #090724 30.21%, #002b6c 100%);

  padding-bottom: .5rem;
  position: absolute;
  bottom: 0;
}

h1 {
  color: #ffffff;
  text-align: center;
  font-size: 1.55rem;
  padding-top: 1rem;
  font-style: normal;
  font-weight: 900;
  line-height: 2rem;
}

p {
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #ffffff;
}
</style>

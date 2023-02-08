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
  width: 100%;
  height: 7rem;
  padding-bottom: .25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.301);
  background: linear-gradient(180deg, #090724 30.21%, #002b6c 100%);
  text-align: center;
}

h1 {
  color: #ffffff;
  font-size: 1.55rem;
  padding-top: 1rem;
  font-weight: 900;
}

p {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.2rem;
  color: #ffffff;
}
</style>

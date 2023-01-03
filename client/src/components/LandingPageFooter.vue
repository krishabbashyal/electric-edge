<template>
  <footer class="landing-page-footer">
    <h1 class="started-text">
      Get started
      <span>today</span>
    </h1>
    <div class="container">
      <button class="btn register-btn">Register</button>
      <p class="or-text">or</p>
      <button class="btn login-btn">Login</button>
    </div>
    <hr class="horizontal-line" />
    <div class="footer">
      <h1>ElectricEdge</h1>
      <p>Terms and Conditions</p>
      <p>Privacy Policy</p>
      <p>Copyright © 2023</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "LandingPageFooter",
};
</script>

<style scoped>
.landing-page-footer {
  padding: 0.4rem;
  background: linear-gradient(180deg, #090724 30.21%, #002b6c 100%);
}
.container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1.6rem;
}

.btn {
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  border-radius: 10px;
  color: #fff;
  background-color: #1971c2;
  border: none;
  font-style: normal;
}

.btn:hover {
  background-color: #1864ab;
}

.or-text {
  margin-top: 0.4rem;
  color: #fff;
}

.started-text {
  font-style: normal;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
}

.started-text span {
  color: #1971c2;
}

.horizontal-line {
  width: 60%;
  margin: auto;
}
/* GLOBAL FOOTER */
/********************************************************************************************************/
.footer {
  width: calc(100%);
  height: 7rem;
  border-top: 1px solid rgba(0, 0, 0, 0.301);
  padding-bottom: 2.4rem;
}

h1 {
  color: #ffffff;
  text-align: center;
  font-size: 1.55rem;
  padding-top: 2.4rem;
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

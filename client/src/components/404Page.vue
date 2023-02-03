<template>
  <div>
    <NavigationBar />
    <div class="ErrorMsg">
      <h1>Error 404</h1>
      <h3>Page not found</h3>
      <p>
        Whoops! we searched all over,<br />
        but the page you are looking<br />
        for does not exist
      </p>
      <button><div class="ButtonContent">Return to homepage</div></button>
      <img
        src="../assets/images/404PagePicture.png"
        alt="Extension Cord Unplugged"
      />
    </div>
    <ApplicationFooter />
  </div>
</template>

<script>
import ApplicationFooter from "./ApplicationFooter.vue";
import NavigationBar from "./NavigationBar.vue";

export default {
  name: "Error404NotFound",
  components: {
    ApplicationFooter,
    NavigationBar,
  },
};
</script>

<style scoped>
* {
  letter-spacing: 0.03rem;
  display: flex;
  flex-direction: column;
  align-content: center;
}

h1 {
  /* margin: auto; */
  margin-bottom: 1rem;
  /* margin-top: 5vh; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */
  display: flex;
  text-align: center;
}
h3 {
  margin-bottom: 0rem;
  /* margin-top: 0.25rem; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  text-align: center;
  color: #0066ff;
}
p {
  margin: auto;
  margin-bottom: 1rem;
  margin-top: .3rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  text-align: center;
  color: #000000;
}
button {
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  border-radius: 10px;
  color: #fff;
  background-color: #0066ff;
  border: none;
  font-style: normal;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 45px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
  width: 100%;
}
.ButtonContent {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  margin: auto;
  align-items: center;
  text-align: center;

  color: #ffffff;
}
.ErrorMsg {
  max-height: 85vh;
  padding-top: 10vw;
}
</style>

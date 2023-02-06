<template>
  <div class="ContentWrapper404Page">
    <div class="ErrorMsg">
      <h1 class="ErrorMsgType">Error 404</h1>
      <h3 class="ErrorMsgDescription">Page not found</h3>
      <p class="MessageToUser">
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
  </div>
</template>

<script>

export default {
  name: "Error404NotFound",
  components: {
    
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

.ErrorMsgType {
  margin-bottom: .8rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3rem;
  /* identical to box height */
  display: flex;
  text-align: center;
}
.ErrorMsgDescription {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 2rem;
  display: flex;
  text-align: center;
  color: #0066ff;
}
.MessageToUser {
  margin: auto;
  margin-bottom: 1rem;
  margin-top: .3rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.5rem;
  display: flex;
  text-align: center;
  color: #000000;
}
button {
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  border-radius: .8rem;
  color: #fff;
  background-color: #0066ff;
  border: none;
  font-style: normal;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 2.3rem;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: .1rem;
  width: 100%;
}
.ButtonContent {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
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
.ContentWrapper404Page{
  height: auto;
}
</style>

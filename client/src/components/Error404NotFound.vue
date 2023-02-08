<template>
  <div class="errorPage">
    <h1 class="errorText">Error 404</h1>
    <p class="errorName">Page not found</p>
    <p class="errorInfo">
      Whoops! we searched all over,<br />
      but the page you are looking<br />
      for does not exist
    </p>
    <div class="buttonContainer">
      <button class="returnButton">Return to homepage</button>
    </div>
    <img
      class="displayImage"
      src="../assets/images/404PagePicture.png"
      alt="Extension Cord Unplugged"
    />
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
.errorPage{
  text-align: center;
}

.errorText{
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-top: 3rem;
}

.errorName{
  margin-top: -.25rem;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 500;
  color: #0066FF;
}

.errorInfo{
  margin-top: 1rem;
  text-align: center;
  font-size: 1.33rem;
}

.returnButton{
  background-color: #0066FF;
  color: white;
  padding: 1rem;
  font-size: 1.15rem;
  font-weight: 600;
  border-radius: .6rem;
  border: none;
  margin-top: 1.25rem;
}

.displayImage{
  margin-top: .75rem;
  width: 100%;
  max-width: 450px;
}
</style>

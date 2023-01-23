<template>
  <div>
    <h1>ERROR 404</h1>
    <h3>Page not found</h3>
    <p>
      Whoops! we searched all over,<br />
      but the page you are looking<br />
      for does not exist
    </p>
    <button>Return to homepage</button>
    <img
      src="../assets/images/404PagePicture.png"
      alt="Extension Cord Unplugged"
    />
  </div>
</template>

<script>
export default {
  name: "doesntExist",
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
  font-size: 2.2rem;
  width: 19rem;
  text-align: center;
  font-weight: 900;
  margin: auto;
  margin-top: 0.7rem;
}
h3 {
  font-size: 1.25rem;
  width: 15rem;
  text-align: center;
  margin: auto;
  margin-top: 0.5rem;
  /* margin-bottom: -1rem; */
  font-weight: 300;
  color: #0066ff;
}
p {
  font-size: 0.75rem;
  width: 15rem;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
  /* margin-bottom: -1rem; */
  font-weight: 300;
}
button {
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  border-radius: 10px;
  color: #fff;
  background-color: #0066FF;
  border: none;
  font-style: normal;
  margin: auto;
  margin-top: 1rem;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:max-content;
}
</style>

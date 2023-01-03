<template>
  <div class="header-spacing">
    <div class="header">
      <h1>ElectricEdge</h1>
      <ul class="bold-color" v-if="desktopView">
        <li>About</li>
        <li>Contact</li>
        <li>Contribute</li>
        <li>Sign Up</li>
        <li>Log In</li>
      </ul>
      <img
        class="menu-icon"
        v-else
        src="../assets/images/MenuIcon.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desktopView: true,
      windowWidth: window.innerWidth,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 675) {
        this.desktopView = false;
      } else {
        this.desktopView = true;
      }
    },
  },

  name: "NavigationBar",
};
</script>

<style scoped>
.bold-color{
   color: #0066ff;
  font-weight: 800;
}
.header {
  position: fixed;
  background-color: #ffffff;
  width: calc(100%);
  height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.301);
}

.header-spacing {
  padding-bottom: 7rem;
}

h1 {
  color: #0066ff;
  font-size: 1.55rem;
  padding: 1.95rem;
  padding-left: 2rem;
  font-style: normal;
  font-weight: 900;
  line-height: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
}

.header ul {
  display: flex;
  list-style: none;
  align-items: center;
}

.header li {
  margin-right: 2rem;
  display: flex;
}

.menu-icon {
  height: 1.75rem;
  width: 1.75rem;
  margin: auto;
  margin-right: 2rem;
}
</style>

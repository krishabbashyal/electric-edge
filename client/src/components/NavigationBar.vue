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
      <div v-else class="responsive-menu-container">
        <button class="menu-button" @click="toggleDropdown">
          <img class="menu-icon" @click="selectImage" :src="menuIcon" alt="" />
        </button>

        <div v-if="displayMenu" class="menu-dropdown bold-color">
          <li>About</li>
          <li>Contact</li>
          <li>Contribute</li>
          <li>Sign Up</li>
          <li>Login</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desktopView: true,
      windowWidth: window.innerWidth,
      displayMenu: false,
      menuIcon: require("../assets/images/MenuIcon.png"),
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
    toggleDropdown() {
      this.displayMenu = !this.displayMenu;
      if (this.displayMenu == false) {
        this.menuIcon = require("../assets/images/MenuIcon.png");
      } else {
        this.menuIcon = require("../assets/images/CloseMenuIcon.png");
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

/* this is what i changed to fix the spacing */
.header-spacing {
  height: 6rem;
  /* padding-bottom: 7rem; */
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

button {
  background: none;
  border: none;
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
.responsive-menu-container {
  padding-top: 2rem;
}

.menu-dropdown li {
  padding: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.301);
}

.menu-dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.301);
  border-radius: 5px;
  right: 1rem;
}

.menu-dropdown li {
  width: calc(83%);
}
</style>

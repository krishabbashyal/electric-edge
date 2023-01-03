<template>
  <div class="header-spacing">
    <div class="header">
      <h1>ElectricEdge</h1>
      <ul v-if="desktopView">
        <li>About</li>
        <li>Contact</li>
        <li>Contribute</li>
        <li>Sign Up</li>
        <li>Log In</li>
      </ul>
      <v-button v-else class="DropdownMenu" @click="dropDown">
        <img
        class="menu-icon"
        src="../assets/images/MenuIcon.png"
        alt=""
      />
      </v-button>
      <div id="Menu_id" class="Menu">
        <li><a href="">Data science</a></li>
        <li><a href="">Data analysis</a></li>
        <li><a href="">Data mining</a></li>
        <li><a href="">Data warehousing</a></li>
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
    dropDown(){
      var Menu = document.getElementById("Menu_id");

      if (Menu.style.display == "block") {
        Menu.style.display="none";
      } 
      else {
        Menu.style.display = "block";
      }
      console.log("Button Pressed");
    },
  },

  name: "NavigationBar",
};
</script>

<style scoped>
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
.DropdownMenu{
  padding-top: 2rem;
}

.Menu {
  display: none;
  position: right;
  background-color: #FFFFFF;
  z-index: 1;
}

.Menu li {
  color: black;
  text-align: center;
  display: block;
  list-style: none;
  background-color: inherit;
  font-style: normal;
  border: 1px solid white;
}

.Menu li a {
  text-decoration: none;
  color: #000000;
  display: block;
  padding: 10px;
}

.Menu li:hover {
  background-color: #818a8f;
  color: white;
}

</style>

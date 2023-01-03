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
      <div v-else class="dropdown_list">
        <v-button class="DropdownMenu" @click="dropDown">
          <img
          class="menu-icon"
          src="../assets/images/MenuIcon.png"
          alt=""
          />
        </v-button>
        
        <div id="Menu_id" class="Menu">
          <li><a href="">About</a></li>
          <li><a href="">Sign Up</a></li>
          <li><a href="">Login</a></li>
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
.dropdown_list{
  padding-top: 2rem;
}


.Menu {
  display: none;
  position: absolute;
  background-color: #FFFFFF;
  right: 1rem;
  left: auto;
}

.Menu li {
  margin-right:2rem;
  position:right;
  color: black;
  text-align: center;
  display: grid;
  list-style: none;
  background-color: inherit;
  font-style: bold;
  border: 1px solid white;
  
}

.Menu li a {
  text-decoration: none;
  color: #000000;
  display: grid;
  padding: 1rem;
}

.Menu li:hover {
  background-color: #e6e6e6;
  color: white;
}

</style>

<template>
  <div>
    <div class="navbar is-primary">
      <Navbar />
    </div>
    <div class="sidebar min-h-screen flex bg-[#D7E4F3]">
      <Sidebar />
      <div class="flex-grow overflow-auto">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style>
.sidebar {
  position: relative;
  margin-top: 60px;
  /* Other sidebar styles */
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; /* Adjust the z-index value as needed */
  /* Other navbar styles */
}
</style>

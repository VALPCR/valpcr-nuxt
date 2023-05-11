<template>
  <div :class="{'w-64': isSidebarOpen, 'w-0': !isSidebarOpen}" class="bg-[#131A2D] overflow-auto transition-all duration-300">
    <div class="text-right">
      <button @click="toggleSidebar" class="p-4 text-white">
        <i class="fas fa-arrow-left" v-if="isSidebarOpen"></i>
        <i class="fas fa-arrow-right" v-else></i>
      </button>
    </div>
    <ul class="space-y-4">
      <li>
        <nuxt-link to="/patients" class="flex items-center space-x-2 text-white">
          <font-awesome-icon icon="fa-solid fa-user-injured" />
          <span>Patients</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dispatcher" class="flex items-center space-x-2 text-white">
          <i class="fas fa-headset"></i>
          <span>Dispatcher</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/emrs" class="flex items-center space-x-2 text-white">
          <i class="fas fa-file-medical"></i>
          <span>EMRs</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/analytics" class="flex items-center space-x-2 text-white">
          <i class="fas fa-chart-line"></i>
          <span>Analytics</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/archive" class="flex items-center space-x-2 text-white">
          <i class="fas fa-archive"></i>
          <span>Archive</span>
        </nuxt-link>
      </li>
    </ul>
    <div class="absolute bottom-0 w-full">
      <button class="w-full p-4 flex items-center space-x-2 text-white">
        <i class="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
ul {
  padding: 1rem;
  height: calc(100vh - 2.5rem);
  overflow-y: auto;
}
</style>

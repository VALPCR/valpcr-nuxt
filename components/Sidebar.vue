<template>
  <div :class="{'w-60': isSidebarOpen, 'w-12': !isSidebarOpen}" class="bg-[#131A2D] overflow-auto">
    <div class="text-right">
      <button @click="toggleSidebar" class="p-4 text-white">
        <font-awesome-icon icon="fa-solid fa-arrow-left" v-if="isSidebarOpen" />
        <font-awesome-icon icon="fa-solid fa-arrow-right text-black" v-else />
      </button>
    </div>
    <ul class="space-y-4 m-0">
      <li :class="{'hover:bg-white': isSidebarOpen}">
        <nuxt-link to="/patients" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="space-x-2 text-white">
          <font-awesome-icon icon="fa-solid fa-user-injured" />
          <span v-if="isSidebarOpen">Patients</span>
        </nuxt-link>
      </li>
      <li :class="{'hover:bg-white': isSidebarOpen}">
        <nuxt-link to="/dispatcher" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="space-x-2 text-white">
          <font-awesome-icon icon="fa-solid fa-user-shield" />
          <span v-if="isSidebarOpen">Dispatcher</span>
        </nuxt-link>
      </li>
      <li :class="{'hover:bg-white': isSidebarOpen}">
        <nuxt-link to="/emrs" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="space-x-2 text-white">
          <font-awesome-icon icon="fa-solid fa-bell-concierge" />
          <span v-if="isSidebarOpen">EMRs</span>
        </nuxt-link>
      </li>
      <li :class="{'hover:bg-white': isSidebarOpen}">
        <nuxt-link to="/analytics" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="space-x-2 text-white">
          <font-awesome-icon icon="fa-solid fa-chart-simple" />
          <span v-if="isSidebarOpen">Analytics</span>
        </nuxt-link>
      </li>
      <li :class="{'hover:bg-white': isSidebarOpen}">
        <nuxt-link to="/archive" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="space-x-2 text-white">
          <font-awesome-icon icon="fa-solid fa-file-archive" />
          <span v-if="isSidebarOpen">Archive</span>
        </nuxt-link>
      </li>
    </ul>
    <div class="absolute bottom-0 w-full">
      <button class="w-full p-4 flex items-center space-x-2 text-white">
        <font-awesome-icon icon="fa-solid fa-sign-out" />
        <span v-if="isSidebarOpen">Logout</span>
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

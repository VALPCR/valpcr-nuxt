<template>
  <div :class="{'w-60': isSidebarOpen, 'w-12': !isSidebarOpen}" class="bg-[#131A2D] overflow-auto">
    <div class="text-right">
      <button @click="toggleSidebar" class="p-4 text-white">
        <font-awesome-icon icon="fa-solid fa-arrow-left" v-if="isSidebarOpen" />
        <font-awesome-icon icon="fa-solid fa-arrow-right text-black" v-else />
      </button>
    </div>
    <ul class="space-y-4 m-0">
      <nuxt-link to="/patients" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white pl-10': isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-user-injured" />
            <span v-if="isSidebarOpen">Patients</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/dispatcher" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white pl-10': isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-shield" />
            <span v-if="isSidebarOpen">Dispatcher</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/emrs" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white pl-10': isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-bell-concierge" />
            <span v-if="isSidebarOpen">EMRs</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/analytics" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white pl-10': isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-chart-simple" />
            <span v-if="isSidebarOpen">Analytics</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/archive" :class="{'hover:text-[#131A2D]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white pl-10': isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-file-archive" />
            <span v-if="isSidebarOpen">Archive</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/archive" class="text-white">
        <li :class="{'pl-10': isSidebarOpen}" class="space-x-2 absolute bottom-0">
          <font-awesome-icon icon="fa-solid fa-sign-out" />
          <span v-if="isSidebarOpen">Logout</span>
        </li>
      </nuxt-link>
    </ul>
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

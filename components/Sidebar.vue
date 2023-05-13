<template>
  <div :class="{'w-60': isSidebarOpen, 'w-24': !isSidebarOpen}" class="bg-[#131A2D] overflow-auto">
    <div class="text-right">
      <button @click="toggleSidebar" class="p-4 text-white">
        <font-awesome-icon icon="fa-solid fa-arrow-left" v-if="isSidebarOpen" />
        <font-awesome-icon icon="fa-solid fa-arrow-right text-black" v-else />
      </button>
    </div>
    <ul class="">
      <nuxt-link to="/patients" :class="{'hover:text-[#1B295A]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen, 'hover:text-[#1B295A]': !isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-user-injured" />
            <span v-if="isSidebarOpen">Patients</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/dashboard/dispatcher" :class="{'hover:text-[#1B295A]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen, 'hover:text-[#1B295A]': !isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-shield" />
            <span v-if="isSidebarOpen" class="sm:text-xs md:text-sm lg:text-md xl:text-lg">Dispatcher</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/emrs" :class="{'hover:text-[#1B295A]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen, 'hover:text-[#1B295A]': !isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-bell-concierge" />
            <span v-if="isSidebarOpen">EMRs</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/analytics" :class="{'hover:text-[#1B295A]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen, 'hover:text-[#1B295A]': !isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-chart-simple" />
            <span v-if="isSidebarOpen">Analytics</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/archive" :class="{'hover:text-[#1B295A]': isSidebarOpen}" class="text-white">
        <li :class="{'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen, 'hover:text-[#1B295A]': !isSidebarOpen}" class="space-x-2 mb-4">
            <font-awesome-icon icon="fa-solid fa-file-archive" />
            <span v-if="isSidebarOpen">Archive</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/" class="text-white">
        <li :class="{'sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen}" class="space-x-2 bottom-0 fixed">
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

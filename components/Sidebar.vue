<template>
  <div
    :class="{ 'w-60': isSidebarOpen, 'w-12': !isSidebarOpen }"
    class="bg-[#131A2D] overflow-auto"
  >
    <div class="text-right">
      <button @click="toggleSidebar" class="p-4 text-white">
        <svg
          v-if="isSidebarOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevrons-left"
        >
          <polyline points="11 17 6 12 11 7"></polyline>
          <polyline points="18 17 13 12 18 7"></polyline>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevrons-right sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative"
        >
          <polyline points="13 17 18 12 13 7"></polyline>
          <polyline points="6 17 11 12 6 7"></polyline>
        </svg>
      </button>
    </div>
    <ul class="">
      <!-- HEAD -->
      <nuxt-link
        v-if="role === 'head'"
        to="/dashboard/head/patient"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
          <font-awesome-icon :icon="['fas', 'file-medical']" size="lg" />
          <!-- <svg class="svg-icon text-white fill-current  hover:fill-[#1B295A]" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" ><path d="M680 729.333q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM440 1009.33V893.333q0-21 10-39.5t28-29.5q29.333-17.666 61.167-30.166 31.833-12.5 65.499-19.834L680 870l75.334-95.667q33.666 7.334 64.999 19.834 31.334 12.5 60.667 30.166 18 11 28.5 29.5t10.5 39.5v115.997H440Zm-66.666-115.997V936H186.666q-27.5 0-47.083-19.583T120 869.334V282.666q0-27.5 19.583-47.083T186.666 216h586.668q27.5 0 47.083 19.583T840 282.666v231.335Q814.333 471 772.667 446.834 731 422.667 680 422.667V376H280v66.666h320.668q-32 14.667-57.001 40.667-25 26-38 59.334H280v66.666h213.334q0 27.667 8.167 53 8.166 25.334 22.833 47.001H280V776h150.667q-27 21-42.167 52.167-15.166 31.166-15.166 65.166Z"/></svg> -->
          <span v-if="isSidebarOpen">
            Prehospital Forms
            <span
              @click="refresh"
              v-if="patientCount > 0"
              class="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-300 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black-700"
            >
              {{ patientCount }}
            </span>
          </span>
        </li>
      </nuxt-link>
      <nuxt-link
        v-if="role === 'head'"
        to="/dashboard/head/dispatcher"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
          <!-- <font-awesome-icon icon="fa-solid fa-shield" /> -->
          <font-awesome-icon :icon="['fass', 'headset']" size="lg" />
          <span
            v-if="isSidebarOpen"
            class="sm:text-xs md:text-sm lg:text-md xl:text-lg"
          >
            Dispatchers
            <span
              @click="refresh"
              v-if="dispatcherNotificationCount > 0"
              class="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-300 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black-700"
            >
              {{ dispatcherNotificationCount }}
            </span>
          </span>
        </li>
      </nuxt-link>
      <nuxt-link
        v-if="role === 'head'"
        to="/dashboard/head/emr"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
          <!-- <font-awesome-icon icon="fa-solid fa-bell-concierge" /> -->
          <font-awesome-icon icon="fa-solid fa-truck-medical" size="lg" />
          <!-- <font-awesome-icon icon="fa-sharp fa-solid fa-siren-on" /> -->
          <span v-if="isSidebarOpen">
            Responders
            <span
              @click="refresh"
              v-if="emrNotificationCount > 0"
              class="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-300 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black-700"
            >
              {{ emrNotificationCount }}
            </span>
          </span>
        </li>
      </nuxt-link>
      <nuxt-link
        v-if="role === 'head'"
        to="/dashboard/head/analytics"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
        <font-awesome-icon :icon="['fas', 'chart-simple']" size="lg" />
          <span v-if="isSidebarOpen">Analytics</span>
        </li>
      </nuxt-link>
      <nuxt-link
        v-if="role === 'head'"
        to="/dashboard/head/archive"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
        <font-awesome-icon :icon="['fas', 'prescription-bottle-medical']" size="lg" />
          <span v-if="isSidebarOpen">Archive</span>
        </li>
      </nuxt-link>
      <!--  END HEAD    -->
      <!--  DISPATCHER    -->
      <nuxt-link
        v-if="role === 'dispatcher'"
        to="/dashboard/dispatcher/patient"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
          <font-awesome-icon :icon="['fas', 'file-medical']" size="lg" />
          <!-- <svg class="svg-icon text-white fill-current  hover:fill-[#1B295A]" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" ><path d="M680 729.333q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM440 1009.33V893.333q0-21 10-39.5t28-29.5q29.333-17.666 61.167-30.166 31.833-12.5 65.499-19.834L680 870l75.334-95.667q33.666 7.334 64.999 19.834 31.334 12.5 60.667 30.166 18 11 28.5 29.5t10.5 39.5v115.997H440Zm-66.666-115.997V936H186.666q-27.5 0-47.083-19.583T120 869.334V282.666q0-27.5 19.583-47.083T186.666 216h586.668q27.5 0 47.083 19.583T840 282.666v231.335Q814.333 471 772.667 446.834 731 422.667 680 422.667V376H280v66.666h320.668q-32 14.667-57.001 40.667-25 26-38 59.334H280v66.666h213.334q0 27.667 8.167 53 8.166 25.334 22.833 47.001H280V776h150.667q-27 21-42.167 52.167-15.166 31.166-15.166 65.166Z"/></svg> -->
          <span v-if="isSidebarOpen">
            Prehospital Forms
            <span
              @click="refresh"
              v-if="patientCount > 0"
              class="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-300 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black-700"
            >
              {{ patientCount }}
            </span>
          </span>
        </li>
      </nuxt-link>
      <nuxt-link
        v-if="role === 'dispatcher'"
        to="/dashboard/dispatcher/emr"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
          <!-- <font-awesome-icon icon="fa-solid fa-bell-concierge" /> -->
          <font-awesome-icon icon="fa-solid fa-truck-medical" size="lg" />
          <!-- <font-awesome-icon icon="fa-sharp fa-solid fa-siren-on" /> -->
          <span v-if="isSidebarOpen">
            Responders
            <span
              @click="refresh"
              v-if="emrNotificationCount > 0"
              class="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-300 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black-700"
            >
              {{ emrNotificationCount }}
            </span>
          </span>
        </li>
      </nuxt-link>
      <nuxt-link
        v-if="role === 'dispatcher'"
        to="/dashboard/dispatcher/archive"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
        <font-awesome-icon :icon="['fas', 'prescription-bottle-medical']" size="lg" />
          <span v-if="isSidebarOpen">Archive</span>
        </li>
      </nuxt-link>
      <!--  END DISPATCHER    -->
      <!--  EMR    -->
      <nuxt-link
        v-if="role === 'emr'"
        to="/dashboard/emr/patient"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
          <font-awesome-icon :icon="['fas', 'file-medical']" size="lg" />
          <!-- <svg class="svg-icon text-white fill-current  hover:fill-[#1B295A]" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" ><path d="M680 729.333q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM440 1009.33V893.333q0-21 10-39.5t28-29.5q29.333-17.666 61.167-30.166 31.833-12.5 65.499-19.834L680 870l75.334-95.667q33.666 7.334 64.999 19.834 31.334 12.5 60.667 30.166 18 11 28.5 29.5t10.5 39.5v115.997H440Zm-66.666-115.997V936H186.666q-27.5 0-47.083-19.583T120 869.334V282.666q0-27.5 19.583-47.083T186.666 216h586.668q27.5 0 47.083 19.583T840 282.666v231.335Q814.333 471 772.667 446.834 731 422.667 680 422.667V376H280v66.666h320.668q-32 14.667-57.001 40.667-25 26-38 59.334H280v66.666h213.334q0 27.667 8.167 53 8.166 25.334 22.833 47.001H280V776h150.667q-27 21-42.167 52.167-15.166 31.166-15.166 65.166Z"/></svg> -->
          <span v-if="isSidebarOpen">
            Prehospital Forms
            <span
              @click="refresh"
              v-if="patientCount > 0"
              class="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-300 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black-700"
            >
              {{ patientCount }}
            </span>
          </span>
        </li>
      </nuxt-link>
      <nuxt-link
        v-if="role === 'emr'"
        to="/dashboard/emr/pending"
        :class="{ 'hover:text-[#1B295A]': isSidebarOpen }"
        class="text-white"
      >
        <li
          :class="{
            'hover:bg-white md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:right-1.5 md:right-0 lg:right-0 xl:right-0 relative hover:text-[#1B295A]':
              !isSidebarOpen,
          }"
          class="space-x-2 mb-4"
        >
          <font-awesome-icon :icon="['fas', 'clock-rotate-left']" size="lg" />
          <!-- <svg class="svg-icon text-white fill-current  hover:fill-[#1B295A]" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" ><path d="M680 729.333q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM440 1009.33V893.333q0-21 10-39.5t28-29.5q29.333-17.666 61.167-30.166 31.833-12.5 65.499-19.834L680 870l75.334-95.667q33.666 7.334 64.999 19.834 31.334 12.5 60.667 30.166 18 11 28.5 29.5t10.5 39.5v115.997H440Zm-66.666-115.997V936H186.666q-27.5 0-47.083-19.583T120 869.334V282.666q0-27.5 19.583-47.083T186.666 216h586.668q27.5 0 47.083 19.583T840 282.666v231.335Q814.333 471 772.667 446.834 731 422.667 680 422.667V376H280v66.666h320.668q-32 14.667-57.001 40.667-25 26-38 59.334H280v66.666h213.334q0 27.667 8.167 53 8.166 25.334 22.833 47.001H280V776h150.667q-27 21-42.167 52.167-15.166 31.166-15.166 65.166Z"/></svg> -->
          <span v-if="isSidebarOpen">
            Pending
            <span
              @click="refresh"
              v-if="pendingCount > 0"
              class="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-300 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black-700"
            >
              {{ pendingCount }}
            </span>
          </span>
        </li>
      </nuxt-link>
      <!--  END EMR    -->
      <nuxt-link to="/logout" class="text-white">
        <li
          :class="{
            'sm:pl-0 md:pl-10 lg:pl-10 xl:pl-10': isSidebarOpen,
            'sm:left-2 md:left-4 lg:left-4 xl:left-4': !isSidebarOpen,
          }"
          class="space-x-2 bottom-12 fixed"
        >
          <font-awesome-icon icon="fa-solid fa-sign-out" size="lg" />
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
      role: "",
      dispatcherNotificationCount: "",
      emrNotificationCount: "",
      pendingCount: "",
      patientCount: "",
    };
  },
  mounted() {
    this.role = this.$auth.user.role;
    this.$nuxt.$options.echo
      .channel("notification")
      .listen(".NotificationEvent", (data) => {
        if (data.message === "dispatcher") {
          this.dispatcherNotificationCount++;
        } else if (data.message === "emr") {
          this.emrNotificationCount++;
        } else if (data.message === "dispatch data") {
          this.pendingCount++;
        } else if (data.message === "completed") {
          this.patientCount++;
        }
      });
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    refresh() {
      location.reload();
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

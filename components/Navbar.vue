<template>
  <nav
    class="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            @click="toggleSidebar"
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <a href="#" class="flex ml-2 md:mr-24">
            <img
              src="../static/images/valpcr_logo.svg"
              class="h-8 mr-3"
              alt="ValPCR Logo"
            />
            <span
              :class="`self-center ${
                $device.isTablet ? '' : 'text-2xl'
              } font-semibold whitespace-nowrap dark:text-white italic`"
              >Valenzuela Patient Care Reporting</span
            >
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div class="inline">
              <div class="flex items-center space-x-2">
                  <p v-if="!$device.isTablet" class="font-medium">
                    {{
                      `${this.$store.$auth.user.first_name} ${this.$store.$auth.user.last_name}`
                    }}
                  </p>
                </div>
              <p v-if="this.$store.$auth.user.role" class="text-center text-xs text-orange-500">
                {{ this.$store.$auth.user.role.toUpperCase() }}
              </p>
            </div>
            <div class="inline ml-3">
              <button
                type="button"
                class="inline flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <!-- Display the user initials -->
                <div class="relative">
                  <span class="w-10 h-10 rounded-full bg-orange-700 flex items-center justify-center dark:bg-orange-700 cursor-pointer font-bold text-white dark:text-gray-300">
                    {{ getUserInitials() }}
                  </span>
                  <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-600 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                
                
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                  role="none"
                >
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Settings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Earnings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$store.commit(
        "setSideBarState",
        !this.$store.getters["getSideBarState"]
      );
    },
    getUserInitials() {
      // Your existing method to get user initials
      // Assuming it returns the initials based on first_name and last_name
      const { first_name, last_name } = this.$store.$auth.user;
      return `${first_name.charAt(0)}${last_name.charAt(0)}`.toUpperCase();
    },
  },
};
</script>

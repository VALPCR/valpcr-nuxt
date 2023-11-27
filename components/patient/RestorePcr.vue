<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-20 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="restorePcr"
    tabindex="-1"
    aria-labelledby="restorePcrLabel"
    aria-hidden="true"
    role="dialog"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
      <div
        class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
            id="restorePcrLabel">
            Warning
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="flex justify-center mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 24 24"
          >
            <path
              fill="orange"
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 9.5c-1.35 0-2.5.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8a5 5 0 0 1 5 5a5 5 0 0 1-5 5Z"
            />
          </svg>
        </div>
        <div class="relative flex-auto p-4 text-center" data-te-modal-body-ref>
          Are you sure you want to restore this PCR?
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-shrink-0 flex-wrap items-center justify-end gap-3 rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <button
            type="button"
            class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            @click="archiveUsers"
          >
            Yes
          </button>
          <button
            type="button"
            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            data-te-modal-dismiss
            data-te-ripple-init
            data-te-ripple-color="light">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {Modal, initTE, Ripple} from "tw-elements";

export default {
  data() {
    return {
      id_address: '',
      id: '',
    }
  },
  mounted() {
    initTE({ Ripple, Modal });
  },
  watch: {
    "$store.state.pcrId"() {
      this.id = this.$store.getters["getPcrId"];
    },
  },
  methods: {
    archiveUsers() {
      if (this.id !== '') {

        fetch('https://ipinfo.io/json?token=5d9e0b426ac4f6')
          .then(response => response.json())
          .then((response) => {
            this.id_address = response.ip;

            this.$axios.get('pcr/single/restore?id=' + this.id + '&user_name=' + this.$auth.user.email + '&user_role=' + this.$auth.user.role + '&ip_address=' + this.id_address).then(() => {
              this.$store.commit('setPcrId', '')
              location.reload();
            });
          })
          .catch(error => console.error('Error fetching IP address:', error));
      }
    },
  },
}
</script>

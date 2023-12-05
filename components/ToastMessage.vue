<template>
  <div
  class="pointer-events-auto mx-auto mb-4 hidden fixed top-20 right-4 z-[1060] w-96 max-w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
  id="static-example"
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
  data-te-autohide="false"
  data-te-toast-init
  data-te-toast-show>
  <div
    class="flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-2.5">
    <span class="mr-2 h-5 w-5">
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd" />
        </svg> -->
      </span>
    <div class="flex items-center">
      <!-- <p class="text-xs text-success-700">Just now</p> -->
      <button
        type="button"
        class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
        data-te-toast-dismiss
        aria-label="Close">
        <span
          class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
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
        </span>
      </button>
    </div>
  </div>
  <div
    class="break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700 items-center flex gap-2 font-bold">

    <span class="mr-2 h-5 w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd" />
        </svg>
      </span>
    {{ $store.getters["getToastMessage"] }}
    <!-- Account Successfully Created! -->
  </div>
</div>
</template>

<script>

import {
  Toast,
  initTE,
} from "tw-elements";

export default {
  mounted() {
    initTE({ Toast });
  },
}
</script>
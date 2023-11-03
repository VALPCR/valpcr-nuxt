<template>
  <div class="flex justify-center items-center h-screen">
    <spinner v-if="isLoading"></spinner>
    <div class="flex flex-col gap-6 items-center justify-center" v-if="!isLoading">
      <!-- ACTION DELETE MODAL -->
      <button @click="deleteModalControl"
        class="inline-block rounded bg-blue-500 hover:bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">Open
        Delete Modal (replace with trash can icons)</button>
      <modals-action-delete v-if="showDeleteModal" @confirm-action="deleteModalConfirmAction"
        @cancel-action="deleteModalCancelAction">
        <div class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24">
            <path fill="red"
              d="M21.12 15.46L19 17.59l-2.12-2.13l-1.42 1.42L17.59 19l-2.13 2.12l1.42 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12M6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-.33.03-.67.08-1H6v-2h7.81c.46-.8 1.1-1.5 1.87-2H6v-2h12v1.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6m-1 1.5L18.5 9H13Z" />
          </svg>
        </div>
        <p class="mt-6 font-bold">
          Are you sure you want to delete this item?
        </p>
      </modals-action-delete>
      <!-- ACTION RESTORE MODAL -->
      <button @click="restoreModalControl"
        class="inline-block rounded bg-blue-500 hover:bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">Open
        Restore Modal (replace with icon or button)</button>
      <modals-action-restore v-if="showRestoreModal" @confirm-action="restoreModalConfirmAction"
        @cancel-action="restoreModalCancelAction">
        <div class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24">
            <path fill="orange"
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 9.5c-1.35 0-2.5.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8a5 5 0 0 1 5 5a5 5 0 0 1-5 5Z" />
          </svg>
        </div>
        <p class="mt-6 font-bold">
          Are you sure you want to restore this item?
        </p>
      </modals-action-restore>
      <!-- ACCOUNT SUCCESSFUL MODAL -->
      <button @click="accountSuccessfulModalControl"
        class="inline-block rounded bg-blue-500 hover:bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">Open
        Restore Modal (should be controlled by an async function that triggers after account creation)</button>
      <modals-account-successful v-if="showAccountSuccessful" @confirm-action="accountSuccessfulModalConfirmAction">
        <div class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48">
            <mask id="ipSCheckOne0">
              <g fill="none" stroke-linejoin="round" stroke-width="4">
                <path fill="#fff" stroke="#fff"
                  d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
                <path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12" />
              </g>
            </mask>
            <path fill="green" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)" />
          </svg>
        </div>
        <p class="mt-6 font-bold">
          Account Created Successfully
        </p>
      </modals-account-successful>
      <!-- STATUS CHANGE MODAL -->
      <button @click="statusChangeModalControl"
        class="inline-block rounded bg-blue-500 hover:bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">Open
        Status Change Modal (should be controlled by an async function that triggers after status change)</button>
      <modals-account-successful v-if="showStatusChange" @confirm-action="statusChangeModalConfirmAction">
        <div class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48">
            <mask id="ipSCheckOne0">
              <g fill="none" stroke-linejoin="round" stroke-width="4">
                <path fill="#fff" stroke="#fff"
                  d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
                <path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12" />
              </g>
            </mask>
            <path fill="green" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)" />
          </svg>
        </div>
        <p class="mt-6 font-bold">
          Account status changed successfully
        </p>
      </modals-account-successful>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDeleteModal: false,
      showRestoreModal: false,
      showAccountSuccessful: false,
      showStatusChange: false,


      isLoading: true,
    };
  },
  methods: {
    // for delete modal
    deleteModalControl() {
      this.showDeleteModal = true;
    },
    deleteModalCancelAction() {
      this.showDeleteModal = false;
    },
    deleteModalConfirmAction() {
      // TODO add logic for deletion of file/data
      console.log("Deleting")
    },

    // for restore modal
    restoreModalControl() {
      this.showRestoreModal = true;
    },
    restoreModalCancelAction() {
      this.showRestoreModal = false;
    },
    restoreModalConfirmAction() {
      // TODO add logic for restoration of file/data
      console.log("Restoring")
    },

    // for account successful modal
    accountSuccessfulModalControl() {
      this.showAccountSuccessful = true;
    },
    accountSuccessfulModalConfirmAction() {
      this.showAccountSuccessful = false;
    },

    // for status change modal
    statusChangeModalControl() {
      this.showStatusChange = true;
    },
    statusChangeModalConfirmAction() {
      this.showStatusChange = false;
    },
  },
  mounted() {
    // simulate loading for 4 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 4000)
  }
};
</script>
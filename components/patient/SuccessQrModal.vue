<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-20 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="successQrCode"
    tabindex="-1"
    aria-labelledby="successQrCode"
    aria-modal="true"
    role="dialog"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] z-1"
    >
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
        >
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-white dark:text-neutral-200"
            id="emrModalXllLabel"
          />
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
            @click="hideModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative p-4">
          <h6
            class="text-center mb-3 mt-2 ml-1 text-base font-medium leading-tight text-secondary"
          >
            Here's the QR code for:
            <strong>{{
                (first_name ?? "") +
                " " +
                (middle_name ?? "") +
                " " +
                (surname ?? "")
              }}</strong>
          </h6>
          <section class="text-center w-full">
            <img
              :src="qr_code"
              alt="Image"
              height="auto"
              class="mx-auto w-1/2"
            />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qr_code: "",
      patientFormFields: [],
      first_name: "",
      middle_name: "",
      surname: "",
    };
  },
  watch: {
    "$store.state.newlyCreatedPcr"() {
      this.patientFormFields =
        this.$store.getters["getNewlyCreatedPcr"];
      this.qr_code = this.patientFormFields.qr_code;
      this.first_name =
        this.patientFormFields.pcr_patient.patient.first_name;
      this.middle_name =
        this.patientFormFields.pcr_patient.patient.middle_name;
      this.surname = this.patientFormFields.pcr_patient.patient.surname;
    },
  },
  methods: {
    hideModal() {
      location.reload()
    },
  }
};
</script>

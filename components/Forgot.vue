<template>
  <section class="bg-split">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mx-auto mb-4 w-7/100 md: w-20/100 lg:w-50/100"
    >
      <div class="p-8 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 class="text-2xl mb-3 text-left text-slate-800 font-bold">
       Forgot Password? 
      </h1>
        <p class="ml-1 mr-1 text-left text-slate-900 mb-4">
          Please enter the email you use to log in to ValPCR
        </p>
        <form @submit.prevent="forgot">
          <div class="relative flex flex-nowrap items-stretch mb-5">
            <span
              class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            >
              <font-awesome-icon icon="fas fa-user" />
            </span>
            <input
              v-model="email"
              @input=""
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="addon-wrapping"
              :class="{ 'border-red-500': !isValidEmail(email) }"
            />
          </div>
          <button
            class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-5"
            @click="sendRecoveryEmail"
          >
            Reset Password
          </button>
          <NuxtLink
            to="/"
            class="text-blue-500 hover:text-blue-700 text-sm flex items-center justify-center"
            href="#"

          >
            Already have an account? Please log in
          </NuxtLink>
        </form>

        <!-- MODAL START -->
        <modals-forgot-password
          v-if="showModal"
          @confirm-action="showModal = false"
        >
        <p class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FDE74C"
                      d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"
                    />
                  </svg>
        </p>
        <p class=" text-2xl text-left text-slate-900 font-bold flex items-center justify-center">
          Please Check Your Email
        </p>
        <p class="ml-1 mr-1 text-left text-gray-500 flex items-center justify-center">
          Your account details was sent to your email
        </p>
        </modals-forgot-password>
        <!-- MODAL END -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      // NEEDED para gumana yung modal
      showModal: false,
    };
  },
  methods: {
    forgot() {
      const params = { email: this.email };
      this.$axios.post("/auth/password/email", params).then((response) => {
        console.log(response);
      });
    },
    async sendRecoveryEmail() {
      // wait for recovery email to send before showing modal

      // MAKE SURE THAT EMAIL IS A VALID EMAIL
      if (!this.isValidEmail(this.email)) {
        alert("Invalid email");
        return;
      }

      // simulate the process of sending recovery email
      this.$toast.show("Sending email", {
        position: "bottom-right",
        duration: 3000,
      });
      setTimeout(() => {
        console.log(`Recovery Email sent to ${this.email}`);
        this.showModal = true;
      }, 3000);
    },
    isValidEmail(email) {
      var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return pattern.test(email);
    },
  },
  computed: {},
};
</script>

<style scoped>
.bg-split {
  background: linear-gradient(to bottom, #f9f9f9 50%, #131a2d 50%);
}
</style>


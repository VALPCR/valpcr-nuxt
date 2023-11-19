<template>
    <section class="bg-split">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mx-auto mb-4 w-7/100 md: w-20/100 lg:w-50/100"
    >
      <div class="p-8 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 class="text-2xl mb-3 text-left text-slate-800 font-bold">Reset Password</h1>
          <form @submit.prevent="forgot">
            <div class="relative flex flex-nowrap items-stretch mb-3">
              <span
                class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              >
                <font-awesome-icon icon="fas fa-lock" />
              </span>
              <input
                v-model="password"
                type="password"
                :type="showPassword ? 'text' : 'password'"
                class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Password"
                aria-label="password"
                aria-describedby="addon-wrapping"
              />
              <label
                @click="togglePasswordShow"
                class="bg-gray-200 hover:bg-gray-300 rounded px-2 py-2 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
                >{{ showPassword ? "Hide" : "Show" }}</label
              >
            </div>

            <div class="relative flex flex-nowrap items-stretch mb-3">
              <span
                class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              >
                <font-awesome-icon icon="fas fa-lock" />
              </span>
              <input
                v-model="passwordConfirmation"
                type="password"
                :type="showPassword ? 'text' : 'password'"
                class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                placeholder="Confirm Password"
                aria-label="confirmPassword"
                aria-describedby="addon-wrapping"
              />
              <label
                @click="togglePasswordShow"
                class="bg-gray-200 hover:bg-gray-300 rounded px-2 py-2 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
                >{{ showPassword ? "Hide" : "Show" }}</label
              >
            </div>
            <button
            class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      passwordConfirmation: "",
      showPassword: false,
    };
  },
  methods: {
    forgot() {
      const params = {
        email: this.$route.query.email ? this.$route.query.email : "",
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        token: this.$route.query.token ? this.$route.query.token : "",
      };
      this.$axios.post("/auth/password/reset", params).then((response) => {
        console.log(response);
      });
    },
    togglePasswordShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
.bg-split {
  background: linear-gradient(to bottom, #f9f9f9 50%, #131a2d 50%);
}
</style>

<template>
  <section class="dual-bg">
    <div class="bg2"></div>
    <div
      class="bg1 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <img
        src="/images/valpcr_logo.svg"
        height="auto"
        width="7%"
        mr="2"
        class="mx-auto mb-4"
        alt="valpcr logo"
      />
      <h1 class="text-6xl font-bold text-dark-1 mx-auto mb-8">
        <i> Welcome to ValPCR! </i>
      </h1>
      <div class="p-8 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 class="text-3xl mb-5 text-center text-black font-bold">
          Sign in to your account
        </h1>
        <p class="ml-1 mr-1 text-left text-gray-500">Your Email</p>
        <form @submit.prevent="login">
          <div class="relative flex flex-nowrap items-stretch mb-3">
            <span
              class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            >
              <font-awesome-icon icon="fas fa-user" />
            </span>
            <input
              v-model="email"
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="addon-wrapping"
            />
          </div>
          <p class="ml-1 mr-1 text-left text-gray-500">Password</p>
          <div class="relative flex flex-nowrap items-stretch mb-3">
            <span
              class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            >
              <font-awesome-icon icon="fas fa-lock" />
            </span>
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="addon-wrapping"
            />
            <label
              @click="togglePasswordShow"
              class="bg-gray-200 hover:bg-gray-300 rounded px-2 py-2 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
            >
              <font-awesome-icon
                v-if="showPassword"
                :icon="['fas', 'eye-slash']"
              />
              <font-awesome-icon v-else :icon="['fas', 'eye']" />
            </label>
          </div>
          <div class="flex justify-between mb-4">
            <label class="block text-gray-500 font-bold">
              <input
                v-model="rememberMe"
                class="mr-2 leading-tight"
                type="checkbox"
              />
              <span class="text-sm"> Remember me </span>
            </label>
            <NuxtLink
              to="/forgot"
              class="text-blue-500 hover:text-blue-700 text-sm"
              href="#"
            >
              Forgot password?
            </NuxtLink>
          </div>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Log In
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
      email: "",
      password: "",
      showPassword: false,
      rememberMe: false,
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth
          .loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
              remember_me: this.rememberMe,
            },
          })
          .then((response) => {
            if (response.data.role === "head") {
              this.$router.push(`/dashboard/${response.data.role}/dispatcher`);
            }
            if (response.data.role === "dispatcher") {
              this.$router.push(`/dashboard/${response.data.role}/emr`);
            }
            if (response.data.role === "emr") {
              this.$router.push(`/dashboard/${response.data.role}/patient`);
            }
          })
          .catch((e) => {
            this.error = e.response.data.message;
          });
      } catch (e) {
        console.log(e);
      }
    },
    togglePasswordShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
.dual-bg {
  position: relative;
  overflow: hidden;
}

.bg1 {
  position: relative;
  z-index: 1;
}

.bg2 {
  background-color: #131a2d;
  position: absolute;
  top: 60%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
</style>

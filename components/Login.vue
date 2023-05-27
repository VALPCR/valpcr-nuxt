<template>
  <div class="min-h-screen flex flex-col lg:flex-row">
    <div
      class="lg:w-1/2 bg-cover bg-center flex items-center justify-center text-white"
      style="background-image: url('/images/valpcr_login_bg.jpg')"
    >
      <div class="text-center px-6">
        <img
          src="/images/valpcr_logo.svg"
          height="auto"
          width="50%"
          class="mx-auto mb-4"
          alt="valpcr logo"
        />
        <h2 class="text-4xl font-bold mb-4">Welcome to ValPCR</h2>
        <p>The first electronic patient care reporting (EPCR)</p>
        <p>system in Valenzuela City.</p>
      </div>
    </div>
    <div
      class="lg:w-1/2 bg-[#D7E4F3] text-white flex items-center justify-center"
    >
      <div class="p-8 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 class="text-3xl mb-8 text-center text-black">USER LOG IN</h1>
        <p class="ml-1 mr-1 text-center text-black mb-8">
          Please login with your email and password below
        </p>
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
              aria-describedby="addon-wrapping" />
          </div>
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
            <label @click="togglePasswordShow" class="bg-gray-200 hover:bg-gray-300 rounded px-2 py-2 text-sm text-gray-600 font-mono cursor-pointer js-password-label">{{ showPassword ? 'Hide' : 'Show' }}</label>
          </div>
          <div class="flex justify-between mb-4">
            <label class="block text-gray-500 font-bold">
              <input v-model="rememberMe" class="mr-2 leading-tight" type="checkbox" />
              <span class="text-sm"> Remember me </span>
            </label>
            <NuxtLink to="/forgot" class="text-blue-500 hover:text-blue-700 text-sm" href="#">
              Forgot password?
            </NuxtLink>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  </div>
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
      this.showPassword = !this.showPassword

    },
  },

};
</script>


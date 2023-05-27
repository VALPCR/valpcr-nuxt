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
        <h1 class="text-3xl mb-8 text-center text-black">FORGOT PASSWORD</h1>
        <p class="ml-1 mr-1 text-center text-black mb-8">
          Please verify with your email
        </p>
        <form @submit.prevent="forgot">
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
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-5"
            type="submit"
          >
            Reset Password
          </button>
          <NuxtLink
            to="/"
            class="text-blue-500 hover:text-blue-700 text-sm"
            href="#"
          >
            Already have an account? Please log in
          </NuxtLink>
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
    };
  },
  methods: {
    forgot() {
      const params = { email: this.email };
      this.$axios.post("/password/email", params).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

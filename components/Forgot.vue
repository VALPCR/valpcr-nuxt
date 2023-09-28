<template>
  <section class="bg-gray-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <img
          src="/images/valpcr_logo.svg"
          height="auto"
          width="7%"
          mr="2"
          class="mx-auto mb-4"
          alt="valpcr logo"
        />
        <h1 class="text-7xl font-bold text-dark-1 mx-auto mb-8"><i> Welcome to ValPCR! </i></h1>
      <div class="p-8 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 class="text-3xl mb-2 text-center text-black font-bold">Forgot Password?</h1>
        <p class="ml-1 mr-1 text-center text-gray-500 mb-4">
          Please enter the email you use to log in to ValPCR
        </p>
        <p class="ml-1 mr-1 text-left text-gray-500">
          Your email
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
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary "
              placeholder="Email"
              aria-label="Email"
              aria-describedby="addon-wrapping"
            />
          </div>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-5"
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
  </section>
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
      this.$axios.post("/auth/password/email", params).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

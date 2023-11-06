<template>
  <section class="bg-split">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mx-auto mb-4 w-7/100 md: w-20/100 lg:w-50/100"
    >
      <img
        src="/images/valpcr_logo.svg"
        class="mx-auto mb-4 md:w-[10%] md:h-[10%]"
        alt="valpcr logo"
      />
      <h1 class="text-5xl font-bold text-dark-1 mx-auto mb-4 md: text-3xl">
        <i> Welcome to ValPCR! </i>
      </h1>
      <div class="p-8 max-w-md w-full bg-white rounded-lg drop-shadow-xl md:w-[70%] md:mt-10 md:border-1">
        <h1 class="text-xl mb-5 text-center text-slate-800 font-bold">
          Sign in to your account
        </h1>
        <hr
          class="h-0.5 mb-2 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
        />
        <div v-if="loginError" class="text-red-700 text-sm text-center">{{ loginError }}</div>

        <form data-te-validation-init data-te-active-validation="true" @submit.prevent="login" class="mx-4 py-6 gap-3">
          <!-- Email input -->
          <div
            class="relative flex flex-nowrap items-stretch mb-3"
            data-te-input-wrapper-init
            data-te-validate="input"
            data-te-validation-ruleset="isRequired|isEmail"
            data-te-invalid-feedback="The email address is invalid"
            data-te-valid-feedback="The email address is valid">

            <span
              class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            >
              <font-awesome-icon icon="fas fa-user" />
            </span>

            <input
              v-model="email"
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              id="exampleFormControlLogin1"
              placeholder="Email address" />
          </div>



          <!-- Password input -->
          <div
            class="relative flex flex-nowrap items-stretch mb-3"
            data-te-validate="input"
            data-te-validation-ruleset="isRequired|isLongerThan(6)"
            data-te-invalid-feedback="Please provide a password longer than 8 characters"
            data-te-valid-feedback="Your password is longer than 8 characters!">
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
              id="exampleFormControlLogin2"
              placeholder="Password" />
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
>>>>>>> 06f790a1f4b9ab753bfa9b4ee80bf7b403c8e419
          </div>

          <div class="mb-6 flex items-center justify-between">
            <!-- Remember me checkbox -->
            <div
              class="relative mb-[0.125rem] mt-3 block min-h-[1.5rem] pl-[1.5rem]"
              data-te-validate="checkbox"
            >
              <input
                v-model="rememberMe"
                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                value=""
                id="exampleFormControlLogin3" />
              <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                for="exampleFormControlLogin3">
                Remember me
              </label>
            </div>

            <!--Forgot password link-->
            <NuxtLink
              to="/forgot"
              class="text-blue-500 hover:text-blue-700 text-sm"
              href="#"
            >
              Forgot password?
            </NuxtLink>
          </div>

          <!-- Login button -->

          <button
            type="submit"
            class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            data-te-ripple-init
            data-te-ripple-color="light"
            data-te-submit-btn-ref>
            Login
          </button>


        </form>


      </div>
<<<<<<< HEAD
  </div>
</section>
=======
    </div>

  </section>
>>>>>>> 06f790a1f4b9ab753bfa9b4ee80bf7b403c8e419
</template>


<script>

import {
  Validation,
  Input,
  Ripple,
  initTE,
} from "tw-elements";

export default {

  mounted() {
    initTE({ Validation, Input, Ripple});
  },

  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      rememberMe: false,
      isLoading: false,
      loginError: null,
    };
  },

  methods: {
    async login() {
      try {
        this.loginError = null;

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
            if (e.response.status === 401) {
            this.loginError = "Your email and password don't match our records. Please try again.";
            console.error("Login Error:", e.response.data.message);
          }
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
<<<<<<< HEAD
=======

<style scoped>
.bg-split {
  background: linear-gradient(to bottom, #f9f9f9 50%, #131a2d 50%);
}
</style>
>>>>>>> 06f790a1f4b9ab753bfa9b4ee80bf7b403c8e419

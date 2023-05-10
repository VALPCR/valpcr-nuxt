<template>
  <div class="d-flex flex-column flex-root" style="height: 100vh">
    <!--begin::Authentication - Sign-in -->
    <div class="d-flex flex-column flex-lg-row flex-column-fluid m-0">
      <!--begin::Aside-->
      <div
        class="
          d-flex
          flex-column flex-lg-row-auto
          w-xl-600px
          positon-xl-relative
        "
      >
        <!--begin::Wrapper-->
        <div
          class="
            d-flex
            flex-column
            position-xl-fixed
            top-0
            bottom-0
            w-xl-600px
            side-content
          "
        >
          <!--begin::Content-->
          <div
            class="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20"
          >
            <!--begin::Logo-->
            <nuxt-link class="py-9" to="/">
              <img alt="Logo" class="h-70px" src="/images/logo_red.png" />
            </nuxt-link>
            <!--end::Logo-->
            <!--begin::Title-->
            <h1
              class="fw-bolder fs-2qx pb-5 pb-md-10"
              style="color: rgb(86 73 53)"
            >
              APT is the leading certification and training company.
            </h1>
            <!--end::Title-->
          </div>
          <!--end::Content-->
          <!--begin::Illustration-->
          <div
            class="
              flex-row-auto
              bgi-size-cover
              bgi-no-repeat
              bgi-position-x-center
              bgi-position-y-bottom
              min-h-400px min-h-lg-450px
              sign-in-logo
            "
          ></div>
          <!--end::Illustration-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Aside-->
      <!--begin::Body-->
      <div class="d-flex flex-column flex-lg-row-fluid py-10">
        <!--begin::Content-->
        <div class="d-flex flex-center flex-column flex-column-fluid">
          <!--begin::Wrapper-->
          <div class="w-lg-500px p-10 p-lg-15 mx-auto">
            <!--begin::Form-->
            <form
              id="kt_sign_in_form"
              action="#"
              class="form w-100"
              novalidate="novalidate"
              @submit.prevent="login"
            >
              <!--begin::Heading-->
              <div class="text-center mb-10">
                <!--begin::Title-->
                <h1 class="text-dark mb-3">
                  Welcome to Arizona Provider Training
                </h1>
                <!--end::Title-->
              </div>
              <!--begin::Heading-->
              <!--begin::Input group-->
              <div class="fv-row mb-10">
                <Message v-if="error" :message="error" />

                <!--begin::Label-->
                <label class="form-label fs-6 fw-bolder text-dark">Email</label>
                <!--end::Label-->
                <!--begin::Input-->
                <input
                  v-model="email"
                  autocomplete="off"
                  class="form-control form-control-lg form-control-solid"
                  name="email"
                  type="text"
                />
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-10">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack mb-2">
                  <!--begin::Label-->
                  <label class="form-label fw-bolder text-dark fs-6 mb-0"
                  >Password</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Input-->
                <input
                  v-model="password"
                  autocomplete="off"
                  class="form-control form-control-lg form-control-solid"
                  name="password"
                  type="password"
                />
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Actions-->
              <div class="text-center">
                <!--begin::Submit button-->
                <button
                  id="kt_sign_in_submit"
                  class="btn btn-lg btn-primary w-100 mb-5"
                  type="submit"
                >
                  <span class="indicator-label">Sign In</span>
                  <span class="indicator-progress"
                  >Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span
                    ></span>
                </button>
                <!--end::Submit button-->
              </div>
              <!--end::Actions-->

              <!--begin::Link-->
              <NuxtLink to="/reset" class="link-primary fs-6 fw-bolder"
              >Forgot Password ?</NuxtLink
              >
              <!--end::Link-->
            </form>
            <!--end::Form-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::Authentication - Sign-in-->

    <Toast
      :type="toast"
      :message="toastMessage"
      :toggle="apiError"
      title="Error"
      @toggle="toggleToast"
    />
  </div>
</template>

<script>
import Toast from '~/components/notification/Toast'
import Message from '~/components/notification/Message'

export default {
  components: {
    Message,
    Toast,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      apiError: false,
      toast: '',
      toastMessage: '',
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then((response) => {
            this.$router.push('/')
          })
          .catch((e) => {
            this.error = e.response.data.message
          })
      } catch (e) {
        // Network error or incorrect API URL
        this.apiError = true
        this.toast = 'danger'
        this.toastMessage = 'Network error, Please open a support ticket.'
      }
    },
    toggleToast() {
      if (this.apiError) {
        this.apiError = false
      }
    },
  },
}
</script>

<style>
.sign-in-logo {
  /*background-image: url('/images/login-bg.jpg');*/
}

.side-content {
  background: rgb(245, 241, 233);
}

a {
  color: #1bc5bd !important;
}
</style>

<template>
  <div>
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="">
        <!--begin::Aside-->
        <Aside :class="aside === 'default' ? aside : aside">
          <template #toggle>
            <div
              class="
                btn btn-icon
                w-auto
                px-0
                btn-active-color-primary
                aside-toggle
              "
              @click="toggle"
            >
              <span class="svg-icon svg-icon-1 rotate-180">
                <AsideIcon :class="aside" />
              </span>
            </div>
          </template>
        </Aside>
        <!--end::Aside-->

        <Main />

        <div id="kt_content" class="d-flex">
          <!--begin::Post-->
          <div id="kt_post" class="post d-flex flex-column-fluid w-100">
            <div
              :class="aside === 'default' ? aside : aside"
              class="content-aside d-none d-md-flex"
            ></div>
            <!--begin::Container-->
            <div
              id="kt_content_container"
              class="container nuxt-container bg-white m-10 rounded-2"
            >
              <!--begin::Nuxt-->
              <div class="w-100">
                <Nuxt />
              </div>
            </div>
            <!--end::Container-->
          </div>
          <!--end::Post-->
        </div>
      </div>
    </div>
    <!--end::Root-->
  </div>
</template>

<script>
import Aside from '../components/nav/Aside'
import Main from '~/components/header/Main'
import AsideIcon from '~/components/icons/AsideToggle'

export default {
  components: { Aside, AsideIcon, Main },
  // middleware: 'auth',
  data() {
    return {
      aside: 'default',
      intervalTimer: '',
    }
  },
  head: {
    bodyAttrs: {
      id: 'kt_body',
      class:
        'header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed',
      style:
        '--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px;',
    },
  },
  mounted() {
    // this.startInterval()
  },
  methods: {
    startInterval() {
      this.intervalTimer = setInterval(() => {
        this.refreshToken()
      }, 3538800)
    },
    refreshToken() {
      this.$axios
        .post('auth/refresh')
        .then((response) => {
          const token = response.data.token
          this.$auth.strategy.token.set('Bearer ' + token)
        })
        .finally(() => {
          clearInterval(this.intervalTimer)
          this.startInterval()
        })
    },
    toggle() {
      if (this.aside === 'minimize') {
        this.aside = 'maximize'
      } else {
        this.aside = 'minimize'
      }
    },
  },
}
</script>

<style>
#kt_wrapper {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

.container.nuxt-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center !important;
  align-items: baseline !important;
  text-align: left !important;
  max-width: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.header-fixed.toolbar-fixed .wrapper {
  padding-top: 5em;
}

.minimize {
  width: 75px;
  transition: width 0.5s ease;
}

.minimize .menu-logo {
  display: none;
}

#kt_wrapper.minimize {
  padding-left: 0;
  margin-left: 75px;
}

#kt_header.minimize {
  left: 0;
}

.maximize {
  width: 265px;
  transition: width 0.5s ease;
}

.maximize .aside-logo {
  display: flex;
}

.aside {
  box-shadow: 0 0 28px 0 rgb(232 232 232);
}

.minimize .rotate-180 {
  transform: rotateZ(180deg);
  transition: transform 0.5s ease;
}

.maximize .rotate-180 {
  transform: rotateZ(0deg);
  transition: transform 0.5s ease;
}

#kt_content {
  background: #f5f8fa;
}

.content-aside {
  width: 265px;
  margin-right: 3.5rem;
}

.content-aside.minimize {
  width: 75px;
  margin-right: 0.5rem;
}

.content-aside.maximize {
  margin-right: 3.5rem;
}

.modal-backdrop {
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}

.btn-primary,
.badge-primary {
  background: #1bc5bd !important;
}

.badge-primary {
  background: #151520;
}

.add-button {
  font-family: 'Poppins', serif;
  height: calc(1.5em + 0.75rem + 2px);
  padding: revert !important;
}

.add-button-title {
  margin-right: 1rem;
}

.add-button svg {
  margin-left: 0.7rem;
  width: 16px;
}

.add-button path,
.add-button g use {
  fill: #fff;
}

.table-title {
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: bold;
  line-height: 21px;
}

.table-info {
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  color: #b5b5c3;
  background: none;
  font-size: 1rem;
}

.inactive-state,
.inactive {
  background: #ffe2e5 !important;
  color: #f64e60;
}

.nav-tabs {
  border-bottom: 0 !important;
}

h3.stepper-title {
  text-align: left;
}

.stepper-desc.fw-bold {
  text-align: left;
}
</style>

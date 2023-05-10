<template>
  <div class="header align-items-stretch">
    <!--begin::Container-->
    <div
      class="container-fluid d-flex align-items-stretch justify-content-between"
    >
      <!--begin::Aside mobile toggle-->
      <div
        class="d-flex align-items-center d-lg-none ms-n3 me-1"
        title="Show aside menu"
      >
        <div class="btn btn-icon btn-active-light-primary">
          <span class="svg-icon svg-icon-2x mt-1">
            <MobileToggle />
          </span>
        </div>
      </div>
      <!--end::Aside mobile toggle-->
      <!--begin::Mobile logo-->
      <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
        <nuxt-link class="d-lg-none" to="/">
          <img alt="Logo" class="h-30px" src="/images/valpcr_login_bg.jpg" />
        </nuxt-link>
      </div>
      <!--end::Mobile logo-->

      <div
        class="
          d-flex
          align-items-stretch
          justify-content-between
          flex-lg-grow-1
        "
      >
        <div id="kt_header_nav" class="d-flex align-items-stretch">
          <div class="header-menu align-items-stretch"></div>
        </div>

        <div class="align-items-stretch flex-shrink-0">
          <div class="d-flex align-items-stretch flex-shrink-0">
            <b-dropdown variant="btn">
              <template #button-content>
                <span class="text-hover-primary">
                  Hi,
<!--                  {{-->
<!--                    typeof loggedInUser.first_name !== 'undefined'-->
<!--                      ? loggedInUser.first_name + ' ' + loggedInUser.last_name-->
<!--                      : ''-->
<!--                  }}-->

                  <b-badge
                    variant="primary"
                    class="p-3 rounded-3 status"
                    style="font-size: 12px; font-weight: bold"
                  >
<!--                    {{-->
<!--                      typeof loggedInUser.first_name !== 'undefined'-->
<!--                        ? loggedInUser.first_name[0]-->
<!--                        : ''-->
<!--                    }}-->
                  </b-badge>
                </span>
              </template>
              <b-dropdown-item href="/logout"> Logout </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MobileToggle from '../icons/MobileToggle'
export default {
  name: 'MainHeader',
  components: { MobileToggle },
  props: {},
  data() {
    return {}
  },
  computed: {
    // ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  mounted() {},
}
</script>

<style>
.aside-enabled.aside-fixed.header-fixed .header {
  /*left: 0;*/
  z-index: 15;
}

.header-tablet-and-mobile-fixed .header {
  position: sticky;
}

.dropdown-toggle::after {
  display: none;
}
</style>

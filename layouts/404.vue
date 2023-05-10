<template>
  <div>
    <div class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-20">
      <!--begin::Logo-->
      <nuxt-link to="/" class="mb-10 pt-lg-20">
        <img alt="Logo" src="/images/logo.png" class="h-50px mb-5" />
      </nuxt-link>
      <!--end::Logo-->
      <!--begin::Wrapper-->
      <div class="pt-lg-10">
        <!--begin::Logo-->
        <h1 class="fw-bolder fs-4x text-gray-700 mb-10">Page Not Found</h1>
        <!--end::Logo-->
        <!--begin::Message-->
        <div class="fw-bold fs-3 text-gray-400 mb-15">
          The page you are looking for was not found!
        </div>
        <!--end::Message-->
        <!--begin::Action-->
        <div class="text-center">
          <nuxt-link to="/" class="btn btn-lg btn-primary fw-bolder"
          >Go to homepage</nuxt-link
          >
        </div>
        <!--end::Action-->
      </div>
      <!--end::Wrapper-->
    </div>
  </div>
</template>

<style>
.d-flex {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

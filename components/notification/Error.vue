<template>
  <div class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-20">
    <!--begin::Wrapper-->
    <div class="pt-lg-10">
      <!--begin::Logo-->
      <h1 class="fw-bolder fs-4x text-gray-700 mb-10">{{ title }}</h1>
      <!--end::Logo-->
      <!--begin::Message-->
      <div class="fw-bold fs-3 text-gray-400 mb-15">
        {{ message }}
      </div>
      <!--end::Message-->
    </div>
    <!--end::Wrapper-->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },
}
</script>

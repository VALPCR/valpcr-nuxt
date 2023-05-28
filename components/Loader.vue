<template lang="html">
  <div v-if="loading" class="loading-page">
    <img
      src="/images/valpcr_logo_spinner.gif"
      alt="valpcr spinner"
      class="m-auto relative top-[175px]"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style>
.loading-page {
  position: fixed;
  top: 175px;
  left: 100px;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
</style>

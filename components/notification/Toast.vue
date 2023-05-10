<template>
  <div class="d-none">
    <b-button ref="toast" class="mb-2" @click="makeToast()">Toast</b-button>
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
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    toggle: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      showToast: false,
    }
  },
  watch: {
    toggle() {
      if (this.toggle) {
        this.$refs.toast.click()
        this.$emit('toggle')
      }
    },
  },
  mounted() {},
  methods: {
    makeToast() {
      this.$bvToast.toast(this.message, {
        title: this.title,
        variant: this.type,
        solid: true,
      })
    },
  },
}
</script>

<style>
.b-toast.b-toast-solid .toast {
  padding: 0 !important;
}

.toast {
  opacity: 1 !important;
}
</style>

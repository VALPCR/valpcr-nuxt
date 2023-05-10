<template>
  <div class="message text-danger my-3">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.message {
  font-size: 1.1rem;
}
</style>

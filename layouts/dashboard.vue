<template>
  <div class="min-h-screen bg-[#D7E4F3]">
    <Sidebar />
    <div class="flex-grow">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  components: {
    Sidebar,
  },
}
</script>

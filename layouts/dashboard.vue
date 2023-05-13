<template>
  <div class="min-h-screen flex bg-[#D7E4F3]">
    <Sidebar />
    <div class="flex-grow overflow-auto">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  components: {
    Sidebar,
  },
};
</script>

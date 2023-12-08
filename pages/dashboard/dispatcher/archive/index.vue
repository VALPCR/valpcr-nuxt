<template>
  <Dashboard />
</template>

<script>
import Dashboard from "../../../../components/archive/Dashboard";
export default {
  components: { Dashboard },
  layout: "dashboard",
  mounted() {
    if (this.$auth.user !== null) {
      if (this.$auth.user.role !== 'dispatcher') {
        this.$router.push(`/`);
      }
    }
  }
};
</script>

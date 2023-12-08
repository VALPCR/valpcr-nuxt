<template>
  <Dashboard />
</template>

<script>
import Dashboard from "../../../../components/pending/Dashboard";
export default {
  components: { Dashboard },
  layout: "dashboard",
  mounted() {
    if (this.$auth.user !== null) {
      if (this.$auth.user.role !== 'emr') {
        this.$router.push(`/`);
      }
    }
  }
};
</script>

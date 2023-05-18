<template>
  <Dashboard />
</template>

<script>
import Dashboard from "../../../../components/dispatcher/Dashboard";
export default {
  components: { Dashboard },
  layout: "dashboard",
  // middleware: "check-auth",
};
</script>

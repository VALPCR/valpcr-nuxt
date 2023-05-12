<template>
  <div class="flex space-x-4 p-4 bg-white rounded shadow">
    <input v-model="patientName" placeholder="Patient name" class="border p-2 rounded">
    <select class="border p-2 rounded">
      <option disabled value="">Select case</option>
      <!-- Add case options here -->
    </select>
    <input v-model="date" type="date" class="border p-2 rounded">
    <input v-model="location" placeholder="Location" class="border p-2 rounded">
    <select v-model="ambulance" class="border p-2 rounded">
      <option disabled value="">Select ambulance</option>
      <!-- Add ambulance options here -->
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patientName: '',
      case: '',
      date: '',
      location: '',
      ambulance: '',
    };
  },
  watch: {
    patientName: function(newVal, oldVal) {
      this.$emit('filter', { field: 'patientName', value: newVal });
    },
    case: function(newVal, oldVal) {
      this.$emit('filter', { field: 'case', value: newVal });
    },
    date: function(newVal, oldVal) {
      this.$emit('filter', { field: 'date', value: newVal });
    },
    location: function(newVal, oldVal) {
      this.$emit('filter', { field: 'location', value: newVal });
    },
    ambulance: function(newVal, oldVal) {
      this.$emit('filter', { field: 'ambulance', value: newVal });
    },
  },
};
</script>

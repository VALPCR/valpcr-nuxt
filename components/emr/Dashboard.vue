<template>
  <div class="min-h-screen bg-[#D7E4F3]">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{ enabled: true }"
      :pagination-options="{ enabled: true }"
      class="bg-white rounded shadow"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          label: 'NAME',
          field: 'name',
        },
        {
          label: 'STATUS',
          field: 'status',
        },
        {
          label: 'TEAM',
          field: 'team',
        },
        {
          label: 'ADDRESS',
          field: 'address',
        },
        {
          label: 'AGE',
          field: 'age',
          type: 'number',
        },
        {
          label: 'CONTRACT',
          field: 'contract',
        },
        {
          label: 'ACTIONS',
          field: 'actions',
        },
      ],
      rows: [
        { id:1, name:"Ava, Kate", status: "1", team: 'Alpha', address: 'Arkong Bato, Valenzuela City', age: 28, contract: 'loremimpusm@gmail.com', actions: "select" },
        { id:1, name:"Baker, Hannah", status: "1", team: 'Bravo', address: 'Lingunan, Valenzuela City', age: 36, contract: 'loremimpusm@gmail.com', actions: "select" },
        { id:1, name:"Carter, James", status: "1", team: 'Alpha', address: 'Maysan, Valenzuela City', age: 36, contract: 'loremimpusm@gmail.com', actions: "select" },
        { id:1, name:"Dickson, Joey", status: "1", team: 'Alpha', address: 'Malinta, Valenzuela City', age: 36, contract: 'loremimpusm@gmail.com', actions: "select" },
      ],
    };
  },
}
</script>

<template>
  <div class="min-h-screen bg-[#EFEFEF]">
    <div class="m-5">
      <vue-good-table
        v-if="role === 'head'"
        :columns="columns"
        :rows="fetchedRows"
        :pagination-options="{ enabled: true }"
        styleClass="vgt-table striped bordered"
        compactMode
        class="bg-white rounded shadow"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      role: "",
      fetchedRows: [],
      filteredRows: [],
      emptyRows: [],
      columns: [
        {
          label: "DATE CREATED",
          field: "date_created",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "DATE MODIFIED",
          field: "date_modified",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "Event",
          field: "event",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "USER",
          field: "user_name",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "ROLE",
          field: "user_role",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterDropdownItems: ["Responder", "Dispatcher", "Head"],
            filterFn: this.columnFilterFn,
            trigger: "change",
          },

        },
        {
          label: "IP ADDRESS",
          field: "ip_address",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterFn: this.columnFilterFn,
          },
        },
      ],
    }
  },
  fetch() {
    this.role = this.$auth.user.role;
    this.$axios.get("pcr/audit").then((response) => {
      response.data.return.map((result) => {

        const dateCreated = new Date(result.created_at);
        const dateModified = new Date(result.updated_at);

        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        };

        this.fetchedRows.push({
          id: result.id,
          date_created: dateCreated.toLocaleString("en-US", options),
          date_modified: dateModified.toLocaleString("en-US", options),
          event: result.event,
          user_name: result.user_name,
          user_role: result.user_role === 'emr' ? 'Responder' : (result.user_role === 'head' ? 'Head' : 'Dispatcher'),
          ip_address: result.ip_address,
        })
      })
    })
  },
  methods: {
    columnFilterFn(value, filter) {
      return value === filter;
    },
  },
}
</script>

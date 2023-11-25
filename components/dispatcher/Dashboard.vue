<template>
  <div class="min-h-screen bg-[#EFEFEF]">
    <div class="m-5">
      <vue-good-table
        @on-selected-rows-change="selectionChanged"
        :columns="columns"
        :rows="fetchedRows"
        :select-options="{
          enabled: true,
        }"
        :search-options="{ enabled: true }"
        :pagination-options="{ enabled: true }"
        @on-row-click="onRowClick"
        styleClass="vgt-table striped bordered"
        compactMode
        class="bg-white rounded shadow"
      >
        <div v-if="role === 'head'" slot="table-actions">
          <button
            type="button"
            data-te-toggle="modal"
            data-te-target="#dispatcherModalXl"
            class="inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            ADD NEW
          </button>
        </div>
        <div v-if="selectedRows.length > 0" slot="table-actions">
          <button
            type="button"
            class="block rounded bg-orange-600 mt-1 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            @click="archiveUser"
          >
            Archive
          </button>
          <button
            type="button"
            class="block rounded bg-green-600 mt-1 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            @click="restoreUser"
          >
            Restore
          </button>
        </div>
      </vue-good-table>
      <DispatcherForm @reset="refresh" />
      <EditDispatcherForm />
      <ArchiveDispatcher :ids="ids" />
      <RestoreDispatcher :ids="ids" />
    </div>
  </div>
</template>

<script>
import ArchiveDispatcher from "./ArchiveDispatcher";
import RestoreDispatcher from "./RestoreDispatcher";
import DispatcherForm from "./DispatcherForm";
import EditDispatcherForm from "./EditDispatcherForm";
import { Modal, Dropdown, Ripple, initTE } from "tw-elements";
export default {
  components: {
    Modal,
    Dropdown,
    Ripple,
    initTE,
    DispatcherForm,
    EditDispatcherForm,
    ArchiveDispatcher,
    RestoreDispatcher
  },
  data() {
    return {
      ids: [],
      role: "",
      fetchedRows: [],
      filteredRows: [],
      emptyRows: [],
      columns: [
        {
          label: "NAME",
          field: "name",
        },
        {
          label: "STATUS",
          field: "radio",
        },
        {
          label: "TEAM",
          field: "team",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterDropdownItems: ["Alpha", "Bravo", "Charlie", "Delta"],
            filterFn: this.columnFilterFn,
            trigger: "change",
          },
        },
        {
          label: "ADDRESS",
          field: "address",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "AGE",
          field: "age",
          type: "number",
        },
        {
          label: "CONTACT",
          field: "contact",
          sortable: false,
        },
      ],
      selectedRows: [],
    };
  },
  fetch() {
    this.role = this.$auth.user.role;
    this.$axios.get("user/list" + "?role=dispatcher").then((response) => {
      response.data.return.map((result) => {
        this.fetchedRows.push({
          id: result.id,
          name: `${this.capitalize(result.first_name)} ${
            result.middle_name ?? ""
          } ${this.capitalize(result.last_name)}`,
          radio: `${result.deleted_at === null ? 'Active' : 'Inactive'}`,
          team: this.capitalize(result.team.name),
          address: `${this.capitalize(result.address.street)} ${this.capitalize(
            result.address.barangay
          )} ${this.capitalize(result.address.city)}`,
          age: result.age,
          contact: result.email,
          deleted_at: result.deleted_at,
        });
      });
    });
  },
  mounted() {
    initTE({ Modal, Ripple, Dropdown });
  },
  created() {
    this.filteredRows = this.fetchedRows;
  },
  methods: {
    onFilter({ field, value }) {
      this.filteredRows = this.fetchedRows.filter((row) => {
        if (field === "date") {
          // convert both dates to YYYY-MM-DD format before comparing
          return (
            row[field] &&
            new Date(row[field]).toISOString().slice(0, 10) === value
          );
        } else {
          return (
            row[field] &&
            row[field]
              .toString()
              .toLowerCase()
              .includes(value.toString().toLowerCase())
          );
        }
      });
    },
    capitalize(word) {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    },
    refresh() {
      this.$forceUpdate();
    },
    onRowClick(params)  {
      if (params.event.target.nodeName !== 'INPUT') {
        const editModal = new Modal(
          document.getElementById("editDispatcherModalXl")
        );
        this.$store.commit("setEditDispatcherModalXl", true);
        this.$store.commit("setEditDispatcherModalXlArg", params.row.id);
        editModal.show();
      }
    },
    columnFilterFn(value, filter) {
      return value === filter;
    },
    selectionChanged(data) {
      this.selectedRows = data.selectedRows;
      this.selectedRows.map((selected) => {
        return this.ids.push(selected.id);
      })
      this.ids = [...new Set(this.ids)];
    },
    restoreUsers() {
      if (this.ids.length > 0) {
        this.$axios.get('user/restore?ids=' + this.ids).then(() => {
          location.reload();
        });
      }
    },
    archiveUser() {
      const archiveModal = new Modal(document.getElementById("archiveDispatcher"));
      archiveModal.show();
    },
    restoreUser() {
      const restoreModal = new Modal(document.getElementById("restoreDispatcher"));
      restoreModal.show();
    },
  },
};
</script>

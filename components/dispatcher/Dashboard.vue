<template>
  <div class="min-h-screen bg-[#EFEFEF]">
    <div class="m-5">
      <vue-good-table
        :columns="columns"
        :rows="fetchedRows"
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
      </vue-good-table>
      <DispatcherForm @reset="refresh" />
      <EditDispatcherForm />
    </div>
  </div>
</template>

<script>
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
  },
  data() {
    return {
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
          html: true,
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
          radio:
            "<input\n" +
            "  class=\"mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]\"\n" +
            '  type="checkbox"\n' +
            '  role="switch"\n' +
            '  id="flexSwitchChecked"\n' +
            "  checked />",
          team: this.capitalize(result.team.name),
          address: `${this.capitalize(result.address.street)} ${this.capitalize(
            result.address.barangay
          )} ${this.capitalize(result.address.city)}`,
          age: result.age,
          contact: result.email,
        });
      });
    });
  },
  created() {
    this.filteredRows = this.fetchedRows;
  },
  mounted() {
    initTE({ Ripple, Dropdown });
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
    onRowClick(params) {
      const editModal = new Modal(
        document.getElementById("editDispatcherModalXl")
      );
      this.$store.commit("setEditDispatcherModalXl", true);
      this.$store.commit("setEditDispatcherModalXlArg", params.row.id);
      editModal.show();
    },
    columnFilterFn(value, filter) {
      return value === filter;
    },
  },
};
</script>

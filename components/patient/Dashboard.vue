<template>
  <div class="min-h-screen">
    <div class="m-5">
      <vue-good-table
        @on-selected-rows-change="selectionChanged"
        :columns="columns"
        :rows="fetchedRows"
        :select-options="{
          enabled: true,
          selectOnCheckboxOnly: true,
          
        }"
        max-height="750px"
        :fixed-header="role === 'head' || role === 'dispatcher'"
        theme="nocturnal"
        :search-options="{ enabled: true }"
        :pagination-options="{ enabled: true }"
        @on-cell-click="onRowClick"
        styleClass="vgt-table striped bordered"
        compactMode
        class="bg-white rounded shadow"
      >
        <div v-if="role === 'head'" slot="table-actions">
          <button
            v-if="selectedRows.length > 0"
            type="button"
            class="inline-block rounded bg-green-600 mx-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-700 focus:bg-green-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            @click="exportToPdf"
          >
            Export
          </button>
          <button
            v-else
            type="button"
            class="inline-block rounded bg-gray-500 cursor-not-allowed mx-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Export
          </button>
        </div>
        <div
          v-if="role === 'dispatcher' || role === 'emr'"
          slot="table-actions"
          class="mx-1"
        >
          <button
            v-if="role === 'emr'"
            type="button"
            class="inline-block rounded bg-green-600 px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-700 focus:bg-green-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            @click="addPcr"
          >
            ADD {{ !$device.isTablet ? "NEW" : "" }}
          </button>
          <button
            v-if="role === 'dispatcher'"
            type="button"
            data-te-toggle="modal"
            data-te-target="#patientForm"
            class="inline-block rounded bg-green-600 px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-700 focus:bg-green-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            ADD {{ !$device.isTablet ? "NEW" : "" }}
          </button>
          <button
            v-if="role === 'emr' && columns[8].filterOptions.filterValue !== ''"
            type="button"
            class="inline-block rounded bg-amber-400 px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-gray-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-amber-500 focus:bg-amber-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            @click="columns[8].filterOptions.filterValue = ''"
          >
            View All
          </button>
          <button
            v-if="role === 'emr' && columns[8].filterOptions.filterValue === ''"
            type="button"
            class="inline-block rounded bg-sky-600 px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-800 focus:bg-sky-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            @click="
              columns[8].filterOptions.filterValue = `${$auth.user.first_name} ${$auth.user.last_name} (Responder)`
            "
          >
            My Forms
          </button>
        </div>


        <template slot="table-column" slot-scope="props">
          <div v-if="role === 'emr'">
            <span v-if="props.column.label === 'PCR ID'" class="text-blue-950">
              {{props.column.label}}
            </span>
            <span v-else-if="props.column.label === 'PATIENT'" class="text-blue-950">
              {{props.column.label}}
            </span>
            <!-- Add more conditions and classes for other columns -->
            <span v-else class="text-blue-950">
              {{props.column.label}}
            </span>
          </div>
        </template>

      </vue-good-table>
      <PatientForm v-if="role === 'dispatcher'" />
      <PatientFormMobile v-if="role === 'emr'" />
      <EditPatientFormMobile :viewableByAllEmrs="true" />
      <QrCode />
      <ArchivePcr />
    </div>
  </div>
</template>

<script>
import PatientForm from "./PatientForm";
import PatientFormMobile from "./PatientFormMobile";
import EditPatientFormMobile from "../patient/EditPatientFormMobile";
import QrCode from "./QrCode";
import ArchivePcr from "./ArchivePcr";
import { Modal, Dropdown, Ripple, initTE, Tooltip } from "tw-elements";
export default {
  components: {
    Ripple,
    Modal,
    Dropdown,
    PatientForm,
    PatientFormMobile,
    EditPatientFormMobile,
    QrCode,
    ArchivePcr,
  },
  data() {
    return {
      ip_address: "",
      isSidebarOpen: true,
      role: "",
      fetchedRows: [],
      filteredRows: [],
      emptyRows: [],
      columns: [
        {
          label: "FORM ID",
          field: "id",
        },
        {
          label: "PATIENT",
          field: "name",
        },
        {
          label: "LOCATION",
          field: "address",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "CASE",
          field: "case",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterDropdownItems: ["VA", "EMS", "SAR", "FIRE", "MT"],
            filterFn: this.columnFilterFn,
            trigger: "change",
          },
        },
        {
          label: "DATE",
          field: "date",
          dateOutputFormat: 'MMM do yyyy',
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "CALL RECEIVED",
          field: "call",
        },
        {
          label: "ARRIVAL TIME",
          field: "arrival",
        },
        {
          label: "AMBULANCE",
          field: "ambulance",
          filterOptions: {
            styleClass: "class1",
            enabled: true,
            filterValue: "",
            filterDropdownItems: [
              "EMS 01",
              "EMS 02",
              "EMS 03",
              "EMS 04",
              "EMS 05",
              "EMS 06",
              "EMS 07",
              "EMS 08",
              "EMS 09",
              "EMS 10",
              "EMS 11",
              "EMS 12",
              "EMS 13",
              "EMS 14",
              "EMS 15",
              "EMS 16",
              "EMS 17",
              "EMS 18",
              "EMS 19",
              "EMS 20",
              "EMS 21",
              "EMS 22",
              "EMS 23",
              "EMS 24",
              "EMS 25",
            ],
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "ASSIGNEE",
          field: "assignee",
          filterOptions: {
            enabled: true,
            filterValue: "",
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "ACTIONS",
          field: "actions",
          sortable: false,
          html: true,
        },
      ],
      selectedRows: [],
    };
  },
  fetch() {
    this.role = this.$auth.user.role;
    if (this.role !== "head" && this.role !== "dispatcher") {
      this.columns[8].filterOptions.filterValue = `${this.$auth.user.first_name} ${this.$auth.user.last_name} (Responder)`;
    }
    this.$axios.get("pcr/list?category=completed").then((response) => {
      response.data.return.map((pcr) =>
        this.fetchedRows.push({
          id: pcr.id,
          name:
            (pcr.pcr_patient !== null
              ? pcr.pcr_patient.patient.first_name
              : "") +
            " " +
            (pcr.pcr_patient.patient.middle_name !== null
              ? pcr.pcr_patient.patient.middle_name
              : "") +
            " " +
            (pcr.pcr_patient.patient.surname !== null
              ? pcr.pcr_patient.patient.surname
              : ""),
          address: pcr.incident_location,
          case: pcr.ems_location_a.toUpperCase(),
          date: pcr.dispatch_date,
          call: pcr.call_receive,
          arrival: pcr.arrived_at,
          ambulance: pcr.ambulance,
          assignee:
            pcr.user_pcr.user.first_name +
            " " +
            pcr.user_pcr.user.last_name +
            " (" +
            (pcr.user_pcr.user.role === "emr" ? "Responder" : "Dispatcher") +
            ")",
          actions:
            this.role === "emr"
              ? `<div class="text-center">` +
                `<button data-te-toggle="tooltip" title="QR Code"><svg class="qrCode" id="qr_${pcr.id}" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"/></svg></button>` +
                `</div>`
              : `<div class="flex gap-8 items-center">` +
                `<button data-te-toggle="tooltip" title="Archive"><svg class="restore_${pcr.id}" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512"><style>svg{fill:#707070}</style><path class="restore_${pcr.id}" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></button>` +
                `<button data-te-toggle="tooltip" title="QR Code"><svg class="qrCode" id="qr_${pcr.id}" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"/></svg></button>` +
                `<button data-te-toggle="tooltip" data-te-toggle="popover" data-te-placement="right" data-te-content="Right popover" title="Export"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path class="export_${pcr.id}" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"/></svg></button>` +
                `</div>`,
        })
      );
    });
  },
  watch: {
    "$store.state.isSidebarOpen"() {
      this.isSidebarOpen = this.$store.getters["getSideBarState"];
    },
  },
  created() {
    this.filteredRows = this.fetchedRows;
  },
  mounted() {
    initTE({ Ripple, Modal, Dropdown, Tooltip });
  },
  methods: {
    addPcr() {
      const addModal = new Modal(document.getElementById("patientFormMobile"));
      addModal.show();
    },
    onRowClick(params) {
      this.$store.commit("setEditPatientStepperForm", true);
      this.$store.commit("setEditPatientStepperFormArg", params.row.id);
      if (params.event.target.id.includes("qr")) {
        const qrModal = new Modal(document.getElementById("qrCode"));
        qrModal.show();
      } else if (typeof params.event.target.classList[0] !== "undefined") {
        if (
          typeof params.event.target.classList[0].includes("restore") !==
          "undefined"
        ) {
          if (
            !params.event.target.classList[0].includes("restore") &&
            typeof params.event.target.classList[0].split("_")[1] !==
              "undefined"
          ) {
            fetch("https://ipinfo.io/json?token=5d9e0b426ac4f6")
              .then((response) => response.json())
              .then((response) => {
                this.ip_address = response.ip;

                window.open(
                  this.$config.baseURL +
                    "/pcr/generate/single?id=" +
                    params.event.target.classList[0].split("_")[1] +
                    "&user_name=" +
                    this.$auth.user.email +
                    "&user_role=" +
                    this.$auth.user.role +
                    "&ip_address=" +
                    this.ip_address,
                  "_blank"
                );
              })
              .catch((error) =>
                console.error("Error fetching IP address:", error)
              );
          } else {
            const archivePcrModal = new Modal(
              document.getElementById("archivePcr")
            );
            archivePcrModal.show();
            this.$store.commit(
              "setPcrId",
              params.event.target.classList[0].split("_")[1]
            );
          }
        }
      } else {
        const editModal = new Modal(
          document.getElementById("editPatientFormMobile")
        );
        editModal.show();
      }
    },
    columnFilterFn(value, filter) {
      return value === filter;
    },
    selectionChanged(data) {
      this.selectedRows = data.selectedRows;
    },
    exportToPdf() {
      const ids = [];
      this.selectedRows.map((selected) => {
        return ids.push(selected.id);
      });

      fetch("https://ipinfo.io/json?token=5d9e0b426ac4f6")
        .then((response) => response.json())
        .then((response) => {
          this.ip_address = response.ip;

          window.open(
            this.$config.baseURL +
              "/pcr/generate/multiple?ids=" +
              ids +
              "&user_name=" +
              this.$auth.user.email +
              "&user_role=" +
              this.$auth.user.role +
              "&ip_address=" +
              this.ip_address,
            "_blank"
          );
        })
        .catch((error) => console.error("Error fetching IP address:", error));
    },
    capitalize(word) {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    },
  },
};
</script>

<!-- <style>
.moveColumn {
  position: -webkit-sticky !important; /* for Safari */
  position: sticky !important;
  left: 0;
  background: #fff !important;
  border-right: 1px solid #ccc !important;
  z-index: 999;
}
</style> -->

<style>

.vgt-table tbody tr:nth-child(odd) {
  background-color: #b8b3b3; /* Set the background color for odd rows */
}

.vgt-table tbody tr:nth-child(even) {
  background-color: #b7b4b452; /* Set the background color for even rows */
}

</style>

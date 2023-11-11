<template>
  <div class="min-h-screen bg-[#EFEFEF]">
    <div class="m-5">
      <vue-good-table
        :columns="columns"
        :rows="fetchedRows"
        :search-options="{ enabled: true }"
        :pagination-options="{ enabled: true }"
        @on-cell-click="onRowClick"
        styleClass="vgt-table striped bordered"
        compactMode
        class="bg-white rounded shadow"
      >
        <div
          v-if="role === 'dispatcher' || role === 'emr'"
          slot="table-actions"
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
        </div>
      </vue-good-table>
      <PatientForm v-if="role === 'dispatcher'" />
      <PatientStepperForm v-if="role === 'emr'" />
      <PatientFormMobile v-if="role === 'emr'" />
      <EditPatientStepperForm :viewableByAllEmrs="true" />
      <QrCode />
    </div>
  </div>
</template>

<script>
import PatientForm from "./PatientForm";
import PatientStepperForm from "./PatientStepperForm";
import PatientFormMobile from "./PatientFormMobile";
import EditPatientStepperForm from "./EditPatientStepperForm";
import QrCode from "./QrCode";
import { Modal, Dropdown, Ripple, initTE, Tooltip } from "tw-elements";
export default {
  components: {
    Ripple,
    Modal,
    Dropdown,
    PatientForm,
    PatientFormMobile,
    PatientStepperForm,
    EditPatientStepperForm,
    QrCode,
  },
  data() {
    return {
      isSidebarOpen: true,
      role: "",
      fetchedRows: [],
      filteredRows: [],
      emptyRows: [],
      columns: [
        {
          label: "NAME",
          field: "name",
          thClass: "moveColumn",
          tdClass: "moveColumn",
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
            ],
            filterFn: this.columnFilterFn,
          },
        },
        {
          label: "ASSIGNEE",
          field: "assignee",
        },
        {
          label: "ACTIONS",
          field: "actions",
          sortable: false,
          html: true,
        },
      ],
    };
  },
  fetch() {
    this.role = this.$auth.user.role;
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
              ? `<div class="flex gap-8 items-center">` +
                `<button data-te-toggle="tooltip" title="QR Code"><svg class="qrCode" id="qr_${pcr.id}" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"/></svg></button>` +
                `<button data-te-toggle="tooltip" title="Export"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"/></svg></button>` +
                `</div>`
              : `<div class="flex gap-8 items-center">` +
                `<button data-te-toggle="tooltip" title="Archive"><svg class="restore_${pcr.id}" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512"><style>svg{fill:#707070}</style><path class="restore_${pcr.id}" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></button>` +
                `<button data-te-toggle="tooltip" title="QR Code"><svg class="qrCode" id="qr_${pcr.id}" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"/></svg></button>` +
                `<button data-te-toggle="tooltip" title="Export"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"/></svg></button>` +
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
      if (this.$device.isDesktop) {
        const addModal = new Modal(
          document.getElementById("patientFormStepper")
        );
        this.$store.commit("setAddPatientStepperForm", true);
        addModal.show();
      } else if (this.$device.isTablet) {
        const addModal = new Modal(
          document.getElementById("patientFormMobile")
        );
        addModal.show();
      }
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
          this.$axios
            .get(
              "pcr/single/archive?id=" +
                params.event.target.classList[0].split("_")[1]
            )
            .then(() => {
              location.reload();
            });
        }
      } else {
        const editModal = new Modal(
          document.getElementById("editPatientFormStepper")
        );
        editModal.show();
      }
    },
    columnFilterFn(value, filter) {
      return value === filter;
    },
  },
};
</script>

<style>
.moveColumn {
  position: -webkit-sticky !important; /* for Safari */
  position: sticky !important;
  left: 0;
  background: #fff !important;
  border-right: 1px solid #ccc !important;
  z-index: 999;
}
</style>

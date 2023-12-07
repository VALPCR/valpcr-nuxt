<template>
  <div class="min-h-screen">
    <div class="m-5">
      <vue-good-table
        :columns="columns"
        :rows="fetchedRows"
        :fixed-header="true"
        theme="nocturnal"
        :search-options="{ enabled: true }"
        :pagination-options="{ enabled: true }"
        @on-cell-click="onRowClick"
        styleClass="vgt-table striped bordered"
        compactMode
        class="bg-white rounded shadow"
      />
      <RestorePcr />
    </div>
  </div>
</template>

<script>
import RestorePcr from "../patient/RestorePcr";
import { Dropdown, Ripple, initTE, Modal } from "tw-elements";

export default {
  components: { Ripple, Dropdown, RestorePcr },
  data() {
    return {
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
    this.$axios.get("pcr/list/archive?category=completed").then((response) => {
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
            '<div class="flex gap-12">' +
            `<button style="z-index: 9"><svg style="z-index: 8" class="restore_${pcr.id}" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><style>svg{fill:#7d7d7d}</style><path class="restore_${pcr.id}" d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"/></svg></button>` +
            "</div>",
        })
      );
    });
  },
  created() {
    this.filteredRows = this.rows;
  },
  mounted() {
    initTE({ Ripple, Dropdown });
  },
  methods: {
    onRowClick(params) {
      if (
        typeof params.event.target.classList[0] !== "undefined" &&
        params.event.target.classList[0].includes("restore")
      ) {
        const restorePcrModal = new Modal(
          document.getElementById("restorePcr")
        );
        restorePcrModal.show();
        this.$store.commit(
          "setPcrId",
          params.event.target.classList[0].split("_")[1]
        );
      }
    },
  },
};
</script>

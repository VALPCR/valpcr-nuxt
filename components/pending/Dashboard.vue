<template>
  <div class="min-h-screen">
    <div class="m-5">
      <vue-good-table
        :columns="columns"
        :rows="fetchedRows"
        :fixed-header="false"
        theme="nocturnal"
        :search-options="{ enabled: true }"
        :pagination-options="{ enabled: true }"
        @on-row-click="onRowClick"
        styleClass="vgt-table striped bordered"
        compactMode
        class="bg-white rounded shadow"
      >
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
    </div>
    <EditPatientFormMobile :viewableByAllEmrs="false" />
  </div>
</template>

<script>
import EditPatientFormMobile from "../patient/EditPatientFormMobile";
import { Modal, Dropdown, Ripple, initTE } from "tw-elements";

export default {
  components: { Ripple, Modal, Dropdown, EditPatientFormMobile },
  data() {
    return {
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
          label: "NAME",
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
          label: "CREATED BY",
          field: "created",
        },
        {
          label: "CATEGORY",
          field: "category",
        },
      ],
    };
  },
  fetch() {
    this.role = this.$auth.user.role;
    this.$axios
      .get("pcr/list?category=dispatch data&emrId=" + this.$auth.user.id)
      .then((response) => {
        response.data.return.map((pcr) =>
          this.fetchedRows.push({
            id: pcr.id,
            name:
              (pcr.pcr_patient.patient.first_name !== null
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
            case:
              pcr.ems_location_a !== null
                ? pcr.ems_location_a.toUpperCase()
                : "",
            date: pcr.dispatch_date,
            call: pcr.call_receive !== null ? pcr.call_receive : "",
            arrival: pcr.arrived_at,
            ambulance: pcr.ambulance !== null ? pcr.ambulance : "",
            created:
              this.capitalize(pcr.category) === "Dispatch data" &&
              pcr.dispatch_pcr !== null
                ? pcr.dispatch_pcr.user.first_name +
                  " " +
                  pcr.dispatch_pcr.user.last_name +
                  " (Dispatcher)"
                : pcr.user_pcr.user.first_name +
                  " " +
                  pcr.user_pcr.user.last_name +
                  " (Responder)",
            category: this.capitalize(pcr.category),
          })
        );
      });
  },
  created() {
    this.filteredRows = this.fetchedRows;
  },
  mounted() {
    initTE({ Ripple, Modal, Dropdown }, { allowReinits: true });
    this.role = this.$auth.user.role;
  },
  methods: {
    onRowClick(params) {
      const editModal = new Modal(
        document.getElementById("editPatientFormMobile")
      );
      this.$store.commit("setEditPatientStepperForm", true);
      this.$store.commit("setEditPatientStepperFormArg", params.row.id);
      editModal.show();
    },
    capitalize(word) {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    },
    columnFilterFn(value, filter) {
      return value === filter;
    },
  },
};
</script>

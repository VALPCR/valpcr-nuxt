<template>
  <div class="min-h-screen bg-[#EFEFEF]">
    <div class="m-1">
      <div class="p-4">
        <vue-good-table
          :columns="filterColumns"
          :rows="emptyRows"
          :search-options="{ enabled: false }"
        >
          <div slot="table-actions-bottom">
            <button
              type="button"
              class="inline-block rounded bg-white text-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out focus:outline-none focus:ring-0"
            >
              CLEAR
            </button>
            <button
              type="button"
              class="inline-block rounded bg-[#1890FF] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              FILTER
            </button>
          </div>
        </vue-good-table>
      </div>
    </div>
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
      />
    </div>
    <EditPatientStepperForm :viewableByAllEmrs="false" />
  </div>
</template>

<script>
import EditPatientStepperForm from "../patient/EditPatientStepperForm";
import { Modal, Dropdown, Ripple, initTE } from "tw-elements";

export default {
  components: { Ripple, Modal, Dropdown, EditPatientStepperForm },
  data() {
    return {
      role: "",
      fetchedRows: [],
      filteredRows: [],
      emptyRows: [],
      filterColumns: [
        {
          label: "Case",
          field: "case",
          filterOptions: {
            styleClass: "class1", // class to be added to the parent th element
            enabled: true, // enable filter for this column
            filterDropdownItems: [
              "Vehicular Accident",
              "EMS",
              "Search and Rescue",
              "Fire",
              "Medical Transport",
            ],
            trigger: "enter", //only trigger on enter not on keyup
          },
          sortable: false,
        },
        {
          label: "Date",
          field: "date",
          filterOptions: {
            styleClass: "class1", // class to be added to the parent th element
            enabled: true, // enable filter for this column
            filterDropdownItems: [
              "Today",
              "Yesterday",
              "This Week",
              "This Month",
              "Past 3 Months",
              "This Year",
            ],
            trigger: "enter", //only trigger on enter not on keyup
          },
          sortable: false,
        },
        {
          label: "Location",
          field: "location",
          filterOptions: {
            styleClass: "class1", // class to be added to the parent th element
            enabled: true, // enable filter for this column
            filterDropdownItems: [
              "Arkong Bato",
              "Bagbaguin",
              "Balangkas",
              "Bignay",
              "Bisig",
              "Canumay East",
              "Canumay West",
              "Coloong",
              "Dalandanan",
              "Gen T. De Leon",
              "Isla",
              "Karuhatan",
              "Lawang Bato",
              "Lingunan",
              "Mabolo",
              "Malanday",
              "Malinta",
              "Mapulang Lupa",
              "Marulas",
              "Maysan",
              "Palasan",
              "Parada",
              "Pariancillo Villa",
              "Paso De Blas",
              "Pasolo",
              "Poblacion",
              "Pulo",
              "Punturin",
              "Rincon",
              "Tagalag",
              "Ugong",
              "Viente Reales",
              "Wawang Pulo",
            ],
            trigger: "enter", //only trigger on enter not on keyup
          },
          sortable: false,
        },
        {
          label: "Ambulance",
          field: "ambulance",
          filterOptions: {
            styleClass: "class1", // class to be added to the parent th element
            enabled: true, // enable filter for this column
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
            trigger: "enter", //only trigger on enter not on keyup
          },
          sortable: false,
        },
      ],
      columns: [
        {
          label: "NAME",
          field: "name",
        },
        {
          label: "LOCATION",
          field: "address",
        },
        {
          label: "CASE",
          field: "case",
        },
        {
          label: "DATE",
          field: "date",
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
              pcr.user_pcr.user.first_name +
              " " +
              pcr.user_pcr.user.last_name +
              " (" +
              (pcr.user_pcr.user.role === "emr" ? "Responder" : "Dispatcher") +
              ")",
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
        document.getElementById("editPatientFormStepper")
      );
      this.$store.commit("setEditPatientStepperForm", true);
      this.$store.commit("setEditPatientStepperFormArg", params.row.id);
      editModal.show();
    },
    capitalize(word) {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    },
  },
};
</script>

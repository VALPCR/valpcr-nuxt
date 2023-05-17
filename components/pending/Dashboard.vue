a
<template>
  <div class="min-h-screen bg-[#D7E4F3]">
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
              SEARCH
            </button>
          </div>
        </vue-good-table>
      </div>
    </div>
    <div class="m-5">
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :search-options="{ enabled: true }"
        :pagination-options="{ enabled: true }"
        styleClass="vgt-table striped bordered"
        compactMode
        class="bg-white rounded shadow"
      />
    </div>
  </div>
</template>

<script>
import { Dropdown, Ripple, initTE } from "tw-elements";

export default {
  components: { Ripple, Dropdown },
  data() {
    return {
      role: "dispatcher",
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
              "Brain Hemorrhage",
              "Car Accident",
              "Heart Attack",
              "Heart Stroke",
              "Heat Stroke",
              "Motorcycle Accident",
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
          label: "CALL RECEIVE",
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
          label: "ACTIONS",
          field: "actions",
          sortable: false,
          html: true,
        },
      ],
      rows: [
        {
          id: 1,
          name: "Anderson, Emily",
          address: "Arkong Bato, Valenzuela City",
          case: "Motorcycle Accident",
          call: "4/13/2023 9:02 AM",
          arrival: "4/13/2023 9:15 AM",
          ambulance: "EMS 1",
          actions:
            "<button\n" +
            'type="button"\n' +
            'class="inline-block rounded bg-[#1890FF] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"\n' +
            "> EDIT" +
            "</button>",
        },
        {
          id: 2,
          name: "Brown, Bryce",
          address: "Lingunan, Valenzuela City",
          case: "Heat Stroke",
          call: "4/13/2023 9:02 AM",
          arrival: "4/13/2023 9:15 AM",
          ambulance: "EMS 5",
          actions:
            "<button\n" +
            'type="button"\n' +
            'class="inline-block rounded bg-[#1890FF] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"\n' +
            "> EDIT" +
            "</button>",
        },
      ],
    };
  },
  created() {
    this.filteredRows = this.rows;
  },
  mounted() {
    initTE({ Ripple, Dropdown });
  },
};
</script>

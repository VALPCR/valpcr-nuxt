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
            <button
              type="button"
              class="inline-block rounded bg-[#30AD62] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              EXPORT
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
      >
        <div slot="table-actions" v-if="role === 'dispatcher'">
          <button
            type="button"
            class="inline-block rounded bg-[#30AD62] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            ADD NEW
          </button>
        </div>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
import { Dropdown, Ripple, initTE } from "tw-elements";
import EmrForm from "./EmrForm";
export default {
  components: { Dropdown, Ripple, initTE, EmrForm },
  data() {
    return {
      role: '',
      filteredRows: [],
      emptyRows: [],
      filterColumns: [
        {
          label: "Team",
          field: "team",
          filterOptions: {
            styleClass: "class1", // class to be added to the parent th element
            enabled: true, // enable filter for this column
            filterDropdownItems: ["Alpha", "Bravo", "Charlie", "Delta"],
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
          label: "Status",
          field: "status",
          filterOptions: {
            styleClass: "class1", // class to be added to the parent th element
            enabled: true, // enable filter for this column
            filterDropdownItems: ["Active", "Disabled"],
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
          label: "TEAM",
          field: "team",
        },
        {
          label: "ADDRESS",
          field: "address",
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
          name: "Ava, Kate",
          team: "Alpha",
          address: "Arkong Bato, Valenzuela City",
          age: 28,
          contact: "loremimpusm@gmail.com",
          actions:
            '<div class="relative" data-te-dropdown-ref>\n' +
            "  <button\n" +
            '    class="flex items-center whitespace-nowrap rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"\n' +
            '    type="button"\n' +
            '    id="dropdownMenuButton1"\n' +
            "    data-te-dropdown-toggle-ref\n" +
            '    aria-expanded="false"\n' +
            "    data-te-ripple-init\n" +
            '    data-te-ripple-color="light">\n' +
            "    SELECT\n" +
            '    <span class="ml-2 w-2">\n' +
            "      <svg\n" +
            '        xmlns="http://www.w3.org/2000/svg"\n' +
            '        viewBox="0 0 20 20"\n' +
            '        fill="currentColor"\n' +
            '        class="h-5 w-5">\n' +
            "        <path\n" +
            '          fill-rule="evenodd"\n' +
            '          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"\n' +
            '          clip-rule="evenodd" />\n' +
            "      </svg>\n" +
            "    </span>\n" +
            "  </button>\n" +
            "  <ul\n" +
            '    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"\n' +
            '    aria-labelledby="dropdownMenuButton1"\n' +
            "    data-te-dropdown-menu-ref>\n" +
            "    <li>\n" +
            "      <a\n" +
            '        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"\n' +
            '        href="#"\n' +
            "        data-te-dropdown-item-ref\n" +
            "        >Restore</a\n" +
            "      >\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <a\n" +
            '        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"\n' +
            '        href="#"\n' +
            "        data-te-dropdown-item-ref\n" +
            "        >Delete</a\n" +
            "      >\n" +
            "    </li>\n" +
            "  </ul>\n" +
            "</div>",
        },
        {
          id: 1,
          name: "Baker, Hannah",
          team: "Bravo",
          address: "Lingunan, Valenzuela City",
          age: 36,
          contact: "loremimpusm@gmail.com",
          actions:
            '<div class="relative" data-te-dropdown-ref>\n' +
            "  <button\n" +
            '    class="flex items-center whitespace-nowrap rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"\n' +
            '    type="button"\n' +
            '    id="dropdownMenuButton1"\n' +
            "    data-te-dropdown-toggle-ref\n" +
            '    aria-expanded="false"\n' +
            "    data-te-ripple-init\n" +
            '    data-te-ripple-color="light">\n' +
            "    SELECT\n" +
            '    <span class="ml-2 w-2">\n' +
            "      <svg\n" +
            '        xmlns="http://www.w3.org/2000/svg"\n' +
            '        viewBox="0 0 20 20"\n' +
            '        fill="currentColor"\n' +
            '        class="h-5 w-5">\n' +
            "        <path\n" +
            '          fill-rule="evenodd"\n' +
            '          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"\n' +
            '          clip-rule="evenodd" />\n' +
            "      </svg>\n" +
            "    </span>\n" +
            "  </button>\n" +
            "  <ul\n" +
            '    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"\n' +
            '    aria-labelledby="dropdownMenuButton1"\n' +
            "    data-te-dropdown-menu-ref>\n" +
            "    <li>\n" +
            "      <a\n" +
            '        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"\n' +
            '        href="#"\n' +
            "        data-te-dropdown-item-ref\n" +
            "        >Restore</a\n" +
            "      >\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <a\n" +
            '        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"\n' +
            '        href="#"\n' +
            "        data-te-dropdown-item-ref\n" +
            "        >Delete</a\n" +
            "      >\n" +
            "    </li>\n" +
            "  </ul>\n" +
            "</div>",
        },
        {
          id: 1,
          name: "Carter, James",
          team: "Alpha",
          address: "Maysan, Valenzuela City",
          age: 36,
          contact: "loremimpusm@gmail.com",
          actions:
            '<div class="relative" data-te-dropdown-ref>\n' +
            "  <button\n" +
            '    class="flex items-center whitespace-nowrap rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"\n' +
            '    type="button"\n' +
            '    id="dropdownMenuButton1"\n' +
            "    data-te-dropdown-toggle-ref\n" +
            '    aria-expanded="false"\n' +
            "    data-te-ripple-init\n" +
            '    data-te-ripple-color="light">\n' +
            "    SELECT\n" +
            '    <span class="ml-2 w-2">\n' +
            "      <svg\n" +
            '        xmlns="http://www.w3.org/2000/svg"\n' +
            '        viewBox="0 0 20 20"\n' +
            '        fill="currentColor"\n' +
            '        class="h-5 w-5">\n' +
            "        <path\n" +
            '          fill-rule="evenodd"\n' +
            '          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"\n' +
            '          clip-rule="evenodd" />\n' +
            "      </svg>\n" +
            "    </span>\n" +
            "  </button>\n" +
            "  <ul\n" +
            '    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"\n' +
            '    aria-labelledby="dropdownMenuButton1"\n' +
            "    data-te-dropdown-menu-ref>\n" +
            "    <li>\n" +
            "      <a\n" +
            '        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"\n' +
            '        href="#"\n' +
            "        data-te-dropdown-item-ref\n" +
            "        >Restore</a\n" +
            "      >\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <a\n" +
            '        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"\n' +
            '        href="#"\n' +
            "        data-te-dropdown-item-ref\n" +
            "        >Delete</a\n" +
            "      >\n" +
            "    </li>\n" +
            "  </ul>\n" +
            "</div>",
        },
        {
          id: 1,
          name: "Dickson, Joey",
          team: "Alpha",
          address: "Malinta, Valenzuela City",
          age: 36,
          contact: "loremimpusm@gmail.com",
          actions:
            '<div class="relative" data-te-dropdown-ref>\n' +
            "  <button\n" +
            '    class="flex items-center whitespace-nowrap rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"\n' +
            '    type="button"\n' +
            '    id="dropdownMenuButton1"\n' +
            "    data-te-dropdown-toggle-ref\n" +
            '    aria-expanded="false"\n' +
            "    data-te-ripple-init\n" +
            '    data-te-ripple-color="light">\n' +
            "    SELECT\n" +
            '    <span class="ml-2 w-2">\n' +
            "      <svg\n" +
            '        xmlns="http://www.w3.org/2000/svg"\n' +
            '        viewBox="0 0 20 20"\n' +
            '        fill="currentColor"\n' +
            '        class="h-5 w-5">\n' +
            "        <path\n" +
            '          fill-rule="evenodd"\n' +
            '          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"\n' +
            '          clip-rule="evenodd" />\n' +
            "      </svg>\n" +
            "    </span>\n" +
            "  </button>\n" +
            "  <ul\n" +
            '    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"\n' +
            '    aria-labelledby="dropdownMenuButton1"\n' +
            "    data-te-dropdown-menu-ref>\n" +
            "    <li>\n" +
            "      <a\n" +
            '        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"\n' +
            '        href="#"\n' +
            "        data-te-dropdown-item-ref\n" +
            "        >Restore</a\n" +
            "      >\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <a\n" +
            '        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"\n' +
            '        href="#"\n' +
            "        data-te-dropdown-item-ref\n" +
            "        >Delete</a\n" +
            "      >\n" +
            "    </li>\n" +
            "  </ul>\n" +
            "</div>",
        },
      ],
    };
  },
  created() {
    this.filteredRows = this.rows;
  },
  mounted() {
    initTE({ Ripple, Dropdown });
    this.role = this.$auth.user.role;
  },
};
</script>

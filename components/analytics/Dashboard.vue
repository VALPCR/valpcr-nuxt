<template>
  <div class="min-h-screen bg-[#EFEFEF]">
    <div class="m-1">
      <div class="p-4">
        <div class="grid grid-cols-5 gap-4">
          <!-- LOCATION -->
          <div class="col-span-1">
            <select v-model="location" data-te-select-init multiple>
              <option value="Other City">Other City</option>
              <option value="Arkong Bato">Arkong Bato</option>
              <option value="Bagbaguin">Bagbaguin</option>
              <option value="Balangkas">Balangkas</option>
              <option value="Bignay">Bignay</option>
              <option value="Bisig">Bisig</option>
              <option value="Canumay East">Canumay East</option>
              <option value="Canumay West">Canumay West</option>
              <option value="Coloong">Coloong</option>
              <option value="Dalandanan">Dalandanan</option>
              <option value="Gen T DeLeon">Gen T DeLeon</option>
              <option value="Isla">Isla</option>
              <option value="Karuhatan">Karuhatan</option>
              <option value="Lawang Bato">Lawang Bato</option>
              <option value="Lingunan">Lingunan</option>
              <option value="Mabolo">Mabolo</option>
              <option value="Malanday">Malanday</option>
              <option value="Malinta">Malinta</option>
              <option value="Mapulang Lupa">Mapulang Lupa</option>
              <option value="Marulas">Marulas</option>
              <option value="Maysan">Maysan</option>
              <option value="Palasan">Palasan</option>
              <option value="Parada">Parada</option>
              <option value="Pariancillo Villa">Pariancillo Villa</option>
              <option value="Paso De Blas">Paso De Blas</option>
              <option value="Pasolo">Pasolo</option>
              <option value="Poblacion">Poblacion</option>
              <option value="Pulo">Pulo</option>
              <option value="Punturin">Punturin</option>
              <option value="RinCon">RinCon</option>
              <option value="Tagalag">Tagalag</option>
              <option value="Ugong">Ugong</option>
              <option value="Viente Reales">Viente Reales</option>
              <option value="Wawang Pulo">Wawang Pulo</option>
            </select>
            <label data-te-select-label-ref>Location</label>
          </div>

          <!-- CASE -->
          <div class="col-span-1">
            <select v-model="emergencyCase" data-te-select-init multiple>
              <option value="ems">EMS</option>
              <option value="fire">FIRE</option>
              <option value="va">VA</option>
              <option value="mt">MT</option>
              <option value="sar">SAR</option>
            </select>
            <label data-te-select-label-ref>Case</label>
          </div>

          <!-- DATE RANGE -->
          <div class="col-span-1">
            <date-range
              ref="picker"
              :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy HH:mm:ss' }"
              :showWeekNumbers="true"
              :showDropdowns="true"
              :autoApply="true"
              v-model="dateRange"
            >
              <template v-slot:input="picker" style="min-width: 350px">
                {{ picker.startDate }} - {{ picker.endDate }}
              </template>
            </date-range>
          </div>

          <!-- TEAM -->
          <div class="col-span-1">
            <select v-model="team" data-te-select-init multiple>
              <option value="1">Alpha</option>
              <option value="2">Bravo</option>
              <option value="3">Charlie</option>
              <option value="4">Delta</option>
            </select>
            <label data-te-select-label-ref>Team</label>
          </div>

          <!-- GENDER -->
          <div class="col-span-1">
            <select v-model="gender" data-te-select-init multiple>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label data-te-select-label-ref>Gender</label>
          </div>
        </div>

        <button
          type="button"
          class="mt-4 inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          @click="filter"
        >
          Filter
        </button>

        <button
          type="button"
          class="mt-4 inline-block rounded bg-gray-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          @click="reset"
        >
          Reset
        </button>
      </div>

      <div class="container mx-auto p-4">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b border-gray-200">Location</th>
              <th class="py-2 px-4 border-b border-gray-200">
                Number of Cases
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in fetchedRows">
              <td class="py-2 px-4 border-b border-gray-200 text-center">
                {{ item.incident_location }}
              </td>
              <td class="py-2 px-4 border-b border-gray-200 text-center">
                {{ item.count }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Dropdown, Ripple, Select, initTE } from "tw-elements";
export default {
  components: { Ripple, Select, Dropdown },
  data() {
    return {
      dateRange: {
        startDate: null,
        endDate: null,
      },
      location: [
        "Other City",
        "Arkong Bato",
        "Bagbaguin",
        "Balangkas",
        "Bignay",
        "Bisig",
        "Canumay East",
        "Canumay West",
        "Coloong",
        "Dalandanan",
        "Gen T DeLeon",
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
        "RinCon",
        "Tagalag",
        "Ugong",
        "Viente Reales",
        "Wawang Pulo",
      ],
      emergencyCase: ["ems", "fire", "va", "mt", "sar"],
      gender: ["male", "female"],
      team: [1, 2, 3, 4],
      fetchedRows: [],
    };
  },
  fetch() {
    this.filter();
  },
  mounted() {
    initTE({ Ripple, Select, Dropdown });
  },
  methods: {
    filter() {
      const params = {
        location: this.location,
        emergencyCase: this.emergencyCase,
        gender: this.gender,
        team: this.team,
        dateRange: this.dateRange,
      };

      this.$axios.post(`pcr/report/filter`, params).then((response) => {
        this.fetchedRows = [];
        response.data.return.map((result) => {
          this.fetchedRows.push({
            incident_location: result.incident_location,
            count: result.count,
          });
        });
      });
    },
    reset() {
      this.dateRange = {
        startDate: null,
        endDate: null,
      };
      this.location = [
        "Other City",
        "Arkong Bato",
        "Bagbaguin",
        "Balangkas",
        "Bignay",
        "Bisig",
        "Canumay East",
        "Canumay West",
        "Coloong",
        "Dalandanan",
        "Gen T DeLeon",
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
        "RinCon",
        "Tagalag",
        "Ugong",
        "Viente Reales",
        "Wawang Pulo",
      ];
      this.emergencyCase = ["ems", "fire", "va", "mt", "sar"];
      this.gender = ["male", "female"];
      this.team = [1, 2, 3, 4];

      this.filter();
    },
  },
};
</script>

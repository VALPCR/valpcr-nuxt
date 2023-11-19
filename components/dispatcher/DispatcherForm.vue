<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-20 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="dispatcherModalXl"
    tabindex="-1"
    aria-labelledby="dispatcherModalXllLabel"
    aria-modal="true"
    role="dialog"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] z-1"
    >
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
      >
        <div
          class="flex flex-shrink-0 items-center bg-dark-blue text-white justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
        >
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-white dark:text-neutral-200"
            id="dispatcherModalXllLabel"
          >
            Dispatcher Registration
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative p-4">
          <form>
            <h6
              class="mb-3 mt-2 ml-1 text-base font-medium leading-tight text-secondary"
            >
              Basic Information
            </h6>
            <div
              class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"
            >
              <div class="relative mb-1" data-te-input-wrapper-init>
                <input
                  v-model="suffix"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="suffix"
                  aria-describedby="suffix"
                  placeholder="Suffix(e.g. Sr., Jr., III)"
                />
                <label
                  for="suffix"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Suffix(e.g. Sr., Jr., III)
                </label>
              </div>

              <div class="relative mb-1" data-te-input-wrapper-init>
                <input
                  v-model="first_name"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="firstName"
                  aria-describedby="firstName"
                  placeholder="First Name"
                  required
                />
                <label
                  for="firstName"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  First Name
                  <span class="text-red-600 font-bold"> * </span>
                </label>
              </div>

              <div class="relative mb-1" data-te-input-wrapper-init>
                <input
                  v-model="middle_name"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="midName"
                  aria-describedby="midName"
                  placeholder="Middle Name"
                  required
                />
                <label
                  for="midName"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Middle Name
                </label>
              </div>

              <div class="relative mb-1" data-te-input-wrapper-init>
                <input
                  v-model="last_name"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="lastName"
                  aria-describedby="lastName"
                  placeholder="Last Name"
                  required
                />
                <label
                  for="lastName"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Last Name
                  <span class="text-red-600 font-bold"> * </span>
                </label>
              </div>

              <select
                v-model="gender"
                data-te-select-init
                class="w-full bg-neutral-50"
                required
              >
                <option selected>
                  Gender
                  <span class="text-red-600 font-bold"> * </span>
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>

              <div
                class="relative mb-3"
                data-te-datepicker-init
                data-te-format="dd, mmm, yyyy"
                data-te-input-wrapper-init
              >
                <input
                  v-model="birthdate"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Select a date"
                  required
                />
                <label
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Birthdate
                  <span class="text-red-600 font-bold"> * </span>
                </label>
              </div>

              <div class="relative mb-3" data-te-input-wrapper-init>
                <input
                  v-model="age"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="age"
                  aria-describedby="age"
                  placeholder="Age"
                  required
                />
                <label
                  for="age"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Age
                  <span class="text-red-600 font-bold"> * </span>
                </label>
              </div>

              <select
                v-model="team_id"
                data-te-select-init
                class="w-full bg-neutral-50"
                required
              >
                <option selected value="1">
                  Team
                  <span class="text-red-600 font-bold"> * </span>
                </option>
                <option
                  v-for="(item, index) in teams"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>

              <select v-model="city" data-te-select-init class="bg-neutral-50">
                <option value="Valenzuela">City of Valenzuela</option>
              </select>

              <select
                v-model="barangay"
                data-te-select-init
                class="bg-neutral-50"
                required
              >
                <option selected value="1">
                  Select Barangay
                  <span class="text-red-600 font-bold"> * </span>
                </option>
                <option value="Arkong Bato">Arkong Bato</option>
                <option value="Bagbaguin">Bagbaguin</option>
                <option value="Balangkas">Balangkas</option>
                <option value="Bignay">Bignay</option>
                <option value="Canumay East">Canumay East</option>
                <option value="Canumay West">Canumay West</option>
                <option value="Coloong">Coloong</option>
                <option value="Dalandanan">Dalandanan</option>
                <option value="Gen T. De Leon">Gen T. De Leon</option>
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
                <option value="Rincon">Rincon</option>
                <option value="Tagalag">Tagalag</option>
                <option value="Ugong">Ugong</option>
                <option value="Viente Reales">Viente Reales</option>
                <option value="Wawang Pulo">Wawang Pulo</option>
              </select>

              <div class="relative mb-1 col-span-2" data-te-input-wrapper-init>
                <input
                  v-model="street"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="streetAddress"
                  aria-describedby="streetAddress"
                  placeholder="Street Address"
                  required
                />
                <label
                  for="streetAddress"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Street Address
                  <span class="text-red-600 font-bold"> * </span>
                </label>
              </div>

              <div
                class="relative mb-1 bg-neutral-50 flex flex-wrap items-stretch"
                required
              >
                <span
                  class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-2 py-[0.15rem] text-center text-sm font-normal leading-[1.3] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 md:text-sm"
                >
                  +63
                </span>
                <input
                  v-model="phone"
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-sm font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary md:text-sm"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  maxlength="11"
                  required
                />
              </div>

              <div class="relative mb-1 col-span-2" data-te-input-wrapper-init>
                <input
                  v-model="email"
                  type="email"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="email"
                  aria-describedby="email"
                  placeholder="Email"
                  required
                />
                <label
                  for="email"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Email
                  <span class="text-red-600 font-bold"> * </span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div
          class="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none"
        >
          <button
            @click="clear"
            type="button"
            class="ml-1 inline-block rounded border border-slate-400 bg-slate-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-dark-1 transition duration-150 ease-in-out hover:bg-slate-300 hover:border-slate-400 hover:bg-slate-300 focus:bg-slate-300 focus:shadow-[0_4px_9px_-4px_#3b71ca] focus:ring-0 active:bg-slate-300"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            CLEAR
          </button>
          <button
            @click="register"
            type="button"
            class="inline-block ml-4 rounded bg-[#30AD62] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-700 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal, initTE, Ripple, Input, Datepicker, Select } from "tw-elements";

export default {
  data() {
    return {
      role: "dispatcher",
      suffix: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      phone: "",
      birthdate: "",
      email: "",
      team_id: "1",
      city: "Valenzuela",
      barangay: "",
      street: "",
      age: "",
      teams: [],
    };
  },
  fetch() {
    this.$axios.get("team/list").then((response) => {
      response.data.return.map((team) =>
        this.teams.push({ id: team.id, name: this.capitalize(team.name) })
      );
    });
  },
  mounted() {
    initTE({ Ripple, Modal, Input, Datepicker, Select });
  },
  methods: {
    register() {
      const params = {
        team_id: parseInt(this.team_id),
        suffix: this.suffix,
        first_name: this.first_name,
        middle_name: this.middle_name,
        last_name: this.last_name,
        gender: this.gender,
        phone: this.phone,
        birthdate:
          this.birthdate !== ""
            ? new Date(this.birthdate).toLocaleDateString("en-US")
            : (this.birthdate = ""),
        age: this.age,
        role: this.role,
        email: this.email,
        city: this.city,
        barangay: this.barangay,
        street: this.street,
      };

      this.$nuxt.$loading.start();
      this.$axios
        .post("user/register", params)
        .then(() => {
          this.suffix = "";
          this.first_name = "";
          this.middle_name = "";
          this.last_name = "";
          this.gender = "";
          this.phone = "";
          this.birthdate = "";
          this.age = "";
          this.email = "";
          this.role = "dispatcher";
          this.team_id = "1";
          this.city = "Valenzuela";
          this.barangay = "";
          this.street = "";
          this.$emit("refresh");
          location.reload();
        })
        .finally(() => {
          this.$nuxt.$loading.finish();
        });
    },
    capitalize(word) {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    },
    clear() {
      this.suffix = "";
      this.first_name = "";
      this.middle_name = "";
      this.last_name = "";
      this.gender = "";
      this.phone = "";
      this.birthdate = "";
      this.age = "";
      this.email = "";
      this.role = "dispatcher";
      this.team_id = "1";
      this.city = "Valenzuela";
      this.barangay = "";
      this.street = "";
    },
  },
};
</script>

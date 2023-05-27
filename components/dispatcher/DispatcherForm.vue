<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-10 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
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
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
        >
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
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
            <div
              class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"
            >
              <!-- NAME -->
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
                />
                <label
                  for="firstName"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  First Name
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
                />
                <label
                  for="lastName"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Last Name
                </label>
              </div>
              <!-- END NAME -->
              <!-- SEX -->
              <select
                v-model="gender"
                data-te-select-init
                class="w-full bg-neutral-50"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              <label data-te-select-label-ref>Sex</label>
              <!-- END SEX -->
              <!-- BIRTHDATE -->
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
                />
                <label
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Birthdate
                </label>
              </div>

              <div class="relative mb-1" data-te-input-wrapper-init>
                <input
                  v-model="age"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="age"
                  aria-describedby="age"
                  placeholder="Age"
                />
                <label
                  for="age"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Age
                </label>
              </div>

              <!-- END BIRTHDATE -->
              <!-- TEAM -->
              <select
                v-model="team"
                data-te-select-init
                class="w-full bg-neutral-50"
              >
                <option value="alpha">Alpha</option>
                <option value="bravo">Bravo</option>
                <option value="charlie">Charlie</option>
                <option value="delta">Delta</option>
              </select>
              <label data-te-select-label-ref>Team</label>
              <!-- END TEAM -->
              <!-- ADDRESS -->

              <select v-model="city" data-te-select-init class="bg-neutral-50">
                <option value="----">Select City</option>
                <option selected value="valenzuela">City of Valenzuela</option>
              </select>

              <select
                v-model="barangay"
                data-te-select-init
                class="bg-neutral-50"
              >
                <option selected value="1">Select Barangay</option>
                <option value="2">Arkong Bato</option>
                <option value="3">Bagbaguin</option>
                <option value="4">Balangkas</option>
                <option value="5">Bignay</option>
                <option value="6">Canumay East (Canumay)</option>
                <option value="7">Canumay West (Canumay)</option>
                <option value="8">Coloong</option>
                <option value="9">Dalandanan</option>
                <option value="10">Gen T. De Leon</option>
                <option value="11">Isla</option>
                <option value="12">Karuhatan</option>
                <option value="13">Lawang Bato</option>
                <option value="14">Lingunan</option>
                <option value="15">Mabolo</option>
                <option value="16">Malanday</option>
                <option value="17">Malinta</option>
                <option value="18">Mapulang Lupa</option>
                <option value="19">Marulas</option>
                <option value="20">Maysan</option>
                <option value="21">Palasan</option>
                <option value="22">Parada</option>
                <option value="23">Pariancillo Villa</option>
                <option value="24">Paso De Blas</option>
                <option value="25">Pasolo</option>
                <option value="26">Poblacion</option>
                <option value="27">Pulo</option>
                <option value="28">Punturin</option>
                <option value="29">Rincon</option>
                <option value="30">Tagalag</option>
                <option value="31">Ugong</option>
                <option value="32">Viente Reales</option>
                <option value="33">Wawang Pulo</option>
              </select>
              <div class="col-span-2">
                <div class="relative mb-1" data-te-input-wrapper-init>
                  <input
                    v-model="street"
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="streetAddress"
                    aria-describedby="streetAddress"
                    placeholder="Street Address"
                  />
                  <label
                    for="streetAddress"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Street Address
                  </label>
                </div>
              </div>

              <!-- END ADDRESS -->
              <!-- CONTACT -->
              <div class="contact align-center">
                <div class="relative mb-1 bg-neutral-50">
                  <span
                    class="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
                  >
                    +63
                  </span>
                  <input
                    v-model="phone"
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    class="peer block min-h-[auto] w-full pl-10 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    maxlength="10"
                    required
                  />
                </div>
              </div>

              <!-- END CONTACT -->
              <!-- EMAIL -->
              <div class="email">
                <div class="relative mb-1" data-te-input-wrapper-init>
                  <input
                    v-model="email"
                    type="email"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="email"
                    aria-describedby="email"
                    placeholder="Email"
                  />
                  <label
                    for="email"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Email
                  </label>
                </div>
              </div>

              <div class="emazipil">
                <div class="relative mb-1" data-te-input-wrapper-init>
                  <input
                    v-model="zip"
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="zip"
                    aria-describedby="zip"
                    placeholder="Zip code"
                  />
                  <label
                    for="zip"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Zip code
                  </label>
                </div>
              </div>

              <!-- END EMAIL -->
            </div>
          </form>
        </div>

        <div
          class="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none"
        >
          <button
            data-te-modal-dismiss
            @click="register"
            type="button"
            class="inline-block ml-4 rounded bg-[#30AD62] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
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
      gender: "female",
      phone: "",
      birthdate: "",
      email: "",
      team: "alpha",
      city: "",
      barangay: "",
      street: "",
      zip: "",
      age: "",
    };
  },
  mounted() {
    initTE({ Ripple, Modal, Input, Datepicker, Select });
  },
  methods: {
    register() {
      const params = {
        role: this.role,
        suffix: this.suffix,
        first_name: this.first_name,
        middle_name: this.middle_name,
        last_name: this.last_name,
        gender: this.gender,
        phone: this.phone,
        birthdate: this.birthdate,
        email: this.email,
        team: this.team,
        city: this.city,
        barangay: this.barangay,
        street: this.street,
        zip: this.zip,
        age: this.age,
      };

      this.$axios.post("user/register", params).then(() => {
        this.role = "dispatcher";
        this.suffix = "";
        this.first_name = "";
        this.middle_name = "";
        this.last_name = "";
        this.gender = "";
        this.phone = "";
        this.birthdate = "";
        this.email = "";
        this.team = "";
        this.city = "";
        this.barangay = "";
        this.street = "";
        this.zip = "";
        this.age = "";
      });
    },
  },
};
</script>

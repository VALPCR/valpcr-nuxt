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
    <ToastMessage v-if="showToast" />
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-14 min-[576px]:max-w-[500px] min-[992px]:max-w-[950px] z-1"
    >
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
      >
        <div
          class="flex flex-shrink-0 items-center bg-dark-blue text-white justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
        >
          <!--Modal title-->
          <h5
            class="text-xl font-bold leading-normal text-white dark:text-neutral-200"
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
        <div class="relative p-8 min-h-[400px] gap-4">
          <h6
            class="mb-3 mt-2 ml-1 text-lg font-medium leading-tight text-dark-1 col-span-3"
          >
            Basic Information
          </h6>
          <small class="text-red-600 italic">All fields are required.</small>

          <div
            class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-6"
          >
            <div class="relative mb-1">
              <label
                for="firstName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >First Name</label
              >
              <input
                v-model="first_name"
                ref="first_name"
                type="text"
                pattern="[A-Za-z\s]+"
                oninput="this.value = this.value.replace(/[^A-Za-z\s]+/g, '');"
                id="firstName"
                placeholder="Juan"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div class="relative mb-1">
              <label
                for="midName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Middle Name
                <span class="text-gray-400">(Optional)</span></label
              >
              <input
                v-model="middle_name"
                type="text"
                pattern="[A-Za-z\s]+"
                oninput="this.value = this.value.replace(/[^A-Za-z\s]+/g, '');"
                id="midName"
                placeholder="Santos"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div class="relative mb-1">
              <label
                for="lastName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Surname</label
              >
              <input
                v-model="last_name"
                ref="last_name"
                type="text"
                pattern="[A-Za-z\s]+"
                oninput="this.value = this.value.replace(/[^A-Za-z\s]+/g, '');"
                id="lastName"
                placeholder="Dela Cruz"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div class="relative mb-1">
              <label
                for="suffix"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Suffix <span class="text-gray-400">(Optional)</span></label
              >
              <input
                v-model="suffix"
                type="text"
                pattern="[A-Za-z0-9\s]+"
                oninput="this.value = this.value.replace(/[^A-Za-z]+/g, '');"
                id="suffix"
                placeholder="Sr / Jr / III"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div class="flex-col relative mb-1">
              <label
                for="gender"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Gender</label
              >
              <select
                v-model="gender"
                id="gender"
                ref="gender"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="userGender" selected>Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>

            <div class="relative mb-1">
              <label
                for="birthdate"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Date of Birth</label
              >
              <input
                v-model="birthdate"
                ref="birthdate"
                type="date"
                id="birthdate"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                @input="calculateAge"
              />
            </div>

            <div class="relative mb-1">
              <label
                for="age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Age</label
              >
              <input
                v-model="age"
                type="text"
                id="age"
                pattern="[0-9]*"
                oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full p-2.5 cursor-not-allowed"
                required
                readonly
              />
            </div>

            <div class="flex-col relative mb-1">
              <label
                for="teamId"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Team</label
              >
              <select
                v-model="team_id"
                id="teamId"
                ref="team_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="selTeam" selected>Select Team</option>
                <option
                  v-for="(item, index) in teams"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <div class="flex-col relative mb-1">
              <label
                for="userCity"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >City</label
              >
              <select
                v-model="city"
                id="userCity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="Valenzuela">City of Valenzuela</option>
              </select>
            </div>

            <div class="flex-col relative mb-1">
              <label
                for="userBrgy"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Barangay</label
              >
              <select
                v-model="barangay"
                id="userBrgy"
                ref="barangay"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option selected value="1">Barangay</option>
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
            </div>

            <div class="relative mb-1 col-span-2">
              <label
                for="streetAddress"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Street Address</label
              >
              <input
                v-model="street"
                type="text"
                ref="street"
                id="streetAddress"
                placeholder="# Street/Subdivision"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div class="relative mb-1 col-span-2">
              <label
                for="phone-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Contact Number</label
              >
              <div class="flex items-center">
                <button
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  +63
                </button>
                <div class="relative w-full">
                  <input
                    v-model="phone"
                    ref="phone"
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                    id="phone-input"
                    maxlength="11"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="09123456789"
                    required
                  />
                </div>
              </div>
            </div>
            <form
              data-te-validation-init
              data-te-active-validation="true"
              @submit.prevent="submit"
              class="col-span-2"
            >
              <div class="relative mb-1">
                <label
                  for="input-group-1"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <div class="relative mb-6">
                  <div
                    class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path
                        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                      />
                      <path
                        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="email"
                    ref="email"
                    type="email"
                    id="input-group-1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@example.com"
                    data-te-validation-ruleset="isRequired|isEmail"
                    data-te-invalid-feedback="Invalid email address"
                  />
                </div>
                <p v-if="submitError" class="text-red-500 text-xs">{{ submitError }}</p>
              </div>
            </form>
          </div>
        </div>

        <div
          class="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none"
        >
          <button
            @click="clear"
            type="button"
            class="ml-1 inline-block rounded border border-slate-200 bg-slate-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-dark-1 transition duration-150 ease-in-out hover:bg-slate-300 hover:border-slate-400 hover:bg-slate-300 focus:bg-slate-300 focus:shadow-[0_4px_9px_-4px_#3b71ca] focus:ring-0 active:bg-slate-300"
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
import Swal from 'sweetalert2'
import ToastMessage from "../ToastMessage";
import {
  Validation,
  Toast,
  Modal,
  initTE,
  Ripple,
  Input,
  Datepicker,
  Select,
} from "tw-elements";

export default {
  components: {
    ToastMessage,
  },
  data() {
    return {
      showToast: false,
      id_address: "",
      role: "dispatcher",
      suffix: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "userGender",
      phone: "",
      birthdate: "",
      email: "",
      team_id: "selTeam",
      city: "Valenzuela",
      barangay: "1",
      street: "",
      age: "",
      teams: [],
      requiredFields: [
        "first_name",
        "last_name",
        "gender",
        "birthdate",
        "team_id",
        "city",
        "barangay",
        "street",
        "phone",
        "email",
      ],
      submitError: null,
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
    initTE({ Validation, Toast, Ripple, Modal, Input, Datepicker, Select });
  },
  methods: {
    register() {
      // Check for missing required fields
      const missingFields = this.requiredFields.filter(field => !this[field]);

      // Highlight missing fields with red outlines
      if (missingFields.length > 0) {
        missingFields.forEach(field => {
          // Add red outline class
          this.$refs[field].classList.add('border-red-500');

          // Remove red outline class when the user starts typing
          this.$refs[field].addEventListener('input', () => {
            this.$refs[field].classList.remove('border-red-500');
          });
        });

        // Show an error message to the user
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill in all required fields.',
        });
        return; // Do not proceed with registration if required fields are missing
      }

      fetch("https://ipinfo.io/json?token=5d9e0b426ac4f6")
        .then((response) => response.json())
        .then((response) => {
          this.ip_address = response.ip;

          const params = {
            user_name: this.$auth.user.email,
            user_role: this.$auth.user.role,
            ip_address: this.id_address,
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
            .then((response) => {
              if (response.data.status === "Error" && response.data.code === 422) {
                if (
                  response.data.data &&
                  response.data.data.email &&
                  response.data.data.email.length > 0
                ) {
                  // Email already exists
                  this.submitError = response.data.data.email[0];
                } else {
                  // Other validation errors or logic
                  this.submitError = "Registration failed. Please check your input.";
                }
              } else {
                // Registration successful or other logic
                this.submitError = null;

                this.ip_address = "";
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
                this.team_id = "selTeam";
                this.city = "Valenzuela";
                this.barangay = "";
                this.street = "";

                this.showToast = true;
                this.$store.commit(
                  "setToastMessage",
                  "Account successfully created!"
                );

                setTimeout(() => {
                  this.$emit("refresh");
                  location.reload();
                }, 2000);
                // ... your logic for successful registration
              }
            })
            .catch((e) => {
              // Handle API request error
              if (e.response && e.response.status === 422) {
                this.submitError = "The email has already been taken.";
              } else {
                this.submitError = "Registration failed. Please try again later.";
                console.error("Submit Error:", e.response ? e.response.data.message : e.message);
              }
            })
            .finally(() => {
              this.$nuxt.$loading.finish();
            });
        })
        .catch((error) => console.error("Error fetching IP address:", error));
    },
    capitalize(word) {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    },
    toast() {
      return;
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
      this.team_id = "selTeam";
      this.city = "Valenzuela";
      this.barangay = "";
      this.street = "";
    },
    calculateAge: function () {
      if (this.birthdate) {
        const today = new Date();
        const birthdate = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear();

        // Check if the birthdate for this year has not occurred yet
        if (
          today.getMonth() < birthdate.getMonth() ||
          (today.getMonth() === birthdate.getMonth() &&
            today.getDate() < birthdate.getDate())
        ) {
          age--;
        }

        // Convert age to string before assigning to this.age
        this.age = age.toString();

        // Update the age input field
        document.getElementById("age").value = this.age;
      } else {
        this.age = null;

        // Clear the age input field
        document.getElementById("age").value = "";
      }
    },
  },
};
</script>

<style scoped>
/* Add this style to highlight missing fields */
.border-red-500 {
  border-color: rgb(244 63 94) !important;
  border-width: 1.5px;
}
</style>

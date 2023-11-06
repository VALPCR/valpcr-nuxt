<template>
  <div
    data-te-modal-init
    data-te-backdrop="static"
    data-te-keyboard="false"
    class="fixed left-0 top-20 z-[1055] hidden h-[85%] w-full overflow-y-auto overflow-x-hidden outline-none"
    id="patientFormMobile"
    tabindex="-1"
    aria-labelledby="exampleModalXlLabel"
    aria-modal="true"
    role="dialog"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out max-w-90% mr-4 ml-4 z-1"
    >
      <div
        class="pointer-events-auto relative flex flex-wrap p-4 w-full overflow-x-auto flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
      >
        <!-- Start of Dispatch Data -->
        <div class="flex justify-between mt-2">
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-dark-blue font-bold dark:text-neutral-200"
            id="exampleModalXlLabel"
          />
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none relative bottom-3.5"
            data-te-modal-dismiss
            aria-label="Close"
            @click="hideModal"
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
        <div id="accordionFlushExample">
          <div
            class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          >
            <h2 class="mb-0" id="flush-headingOne">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Dispatch Data
                <span
                  class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="!visible border-0"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="flush-headingOne"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4 mt-7 mb-7">
                <form>
                  <div
                    class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4"
                  >
                    <!-- FIRST DISPATCH DATA COLUMN -->
                    <div
                      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4"
                    >
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="dispatch_date"
                          type="date"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="date"
                        />
                        <label
                          for="date"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Date
                        </label>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="call_source"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="callSource"
                          aria-describedby="emailHelp124"
                          placeholder="Call Source"
                        />
                        <label
                          for="callSource"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Call Source
                        </label>
                      </div>

                      <div
                        class="relative col-span-2"
                        data-te-input-wrapper-init
                      >
                        <input
                          v-model="incident_location"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="incidentLocation"
                          aria-describedby="incidentLocation"
                          placeholder="Incident Location"
                        />
                        <label
                          for="incidentLocation"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Incident Location
                        </label>
                      </div>

                      <!-- <label class="left-5 top-5 mb-0 font-bold">
                          Type of Response:
                        </label> -->
                      <div class="relative mt-1 mb-1 col-span-2">
                        <select
                          v-model="ems_location_a"
                          data-te-select-init
                          class="bg-neutral-50"
                          id="emsLocationA"
                          required
                        >
                          <option value="tor">Type of Response</option>
                          <option value="ems">Emergency Medical Service</option>
                          <option value="fire">Fire</option>
                          <option value="sar">Search and Rescue</option>
                          <option value="va">Vehicular Accident</option>
                          <option value="mt">Medical Transport</option>
                        </select>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="ems_location_b"
                          type="text"
                          :class="`peer block min-h-[auto] w-full ${
                            ems_location_a === 'tor' ||
                            ems_location_a === 'va' ||
                            ems_location_a === 'mt'
                              ? 'bg-gray-100 cursor-not-allowed'
                              : 'bg-transparent'
                          } rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
                          id="emsLocationB"
                          aria-describedby="emsLocationB"
                          placeholder="Location"
                          :disabled="
                            ems_location_a === 'tor' ||
                            ems_location_a === 'va' ||
                            ems_location_a === 'mt'
                          "
                        />
                        <label
                          for="emsLocationB"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Location
                        </label>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="barangay_b"
                          type="text"
                          :class="`peer block min-h-[auto] w-full rounded border-0 ${
                            ems_location_a === 'tor' ||
                            ems_location_a === 'va' ||
                            ems_location_a === 'mt'
                              ? 'bg-gray-100 cursor-not-allowed'
                              : 'bg-transparent'
                          } px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
                          id="barangayB"
                          aria-describedby="barangayB"
                          placeholder="Barangay"
                          :disabled="
                            ems_location_a === 'tor' ||
                            ems_location_a === 'va' ||
                            ems_location_a === 'mt'
                          "
                        />
                        <label
                          for="barangayB"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Barangay
                        </label>
                      </div>

                      <div
                        class="relative mb-1 flex flex-wrap items-stretch col-span-2"
                      >
                        <input
                          v-model="mt_from"
                          type="text"
                          :class="`relative m-0 block w-1/4 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 ${
                            ems_location_a !== 'mt'
                              ? 'bg-gray-100 cursor-not-allowed'
                              : 'bg-transparent'
                          } bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary`"
                          placeholder="MT From"
                          aria-label="mtFrom"
                          :disabled="ems_location_a !== 'mt'"
                        />
                        <span
                          class="flex items-center whitespace-nowrap border border-x-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        >
                          To
                        </span>
                        <input
                          v-model="mt_barangay"
                          type="text"
                          :class="`relative m-0 block text-right w-1/4 min-w-0 flex-auto rounded-r border border-solid border-neutral-300 ${
                            ems_location_a !== 'mt'
                              ? 'bg-gray-100 cursor-not-allowed'
                              : 'bg-transparent'
                          } bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary`"
                          placeholder="Barangay"
                          aria-label="barangay"
                          :disabled="ems_location_a !== 'mt'"
                        />
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="va_location"
                          type="text"
                          :class="`peer block min-h-[auto] w-full rounded border-0 ${
                            ems_location_a !== 'va'
                              ? 'bg-gray-100 cursor-not-allowed'
                              : 'bg-transparent'
                          } px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
                          id="vaLocation"
                          aria-describedby="vaLocation"
                          placeholder="V.A Location"
                          :disabled="ems_location_a !== 'va'"
                        />
                        <label
                          for="vaLocation"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          V.A Location
                        </label>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="va_location_barangay"
                          type="text"
                          :class="`peer block min-h-[auto] w-full rounded border-0 ${
                            ems_location_a !== 'va'
                              ? 'bg-gray-100 cursor-not-allowed'
                              : 'bg-transparent'
                          } px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
                          id="vaLocationBarangay"
                          aria-describedby="vaLocationBarangay"
                          placeholder="Barangay"
                          :disabled="ems_location_a !== 'va'"
                        />
                        <label
                          for="vaLocationBarangay"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Barangay
                        </label>
                      </div>

                      <div
                        class="relative mb-1 flex flex-wrap items-stretch col-span-2"
                      >
                        <input
                          v-model="involved_vehicles_a"
                          type="text"
                          :class="`relative m-0 block w-1/4 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 ${
                            ems_location_a !== 'va'
                              ? 'bg-gray-100 cursor-not-allowed'
                              : 'bg-transparent'
                          } bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary`"
                          placeholder="Involved Vehicle(s)"
                          aria-label="involvedVehicles"
                          :disabled="ems_location_a !== 'va'"
                        />
                        <span
                          class="flex items-center whitespace-nowrap border border-x-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        >
                          VS
                        </span>
                        <input
                          v-model="involved_vehicles_b"
                          type="text"
                          :class="`relative m-0 block text-right w-1/4 min-w-0 flex-auto rounded-r border border-solid border-neutral-300 ${
                            ems_location_a !== 'va'
                              ? 'bg-gray-100 cursor-not-allowed'
                              : 'bg-transparent'
                          } bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary`"
                          placeholder="Involved Vehicle(s)"
                          aria-label="involvedVehicles"
                          :disabled="ems_location_a !== 'va'"
                        />
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="plate_number"
                          type="text"
                          :class="`peer block min-h-[auto] w-full rounded border-0 ${
                            ems_location_a !== 'va'
                              ? 'bg-gray-100 cursor-not-allowed'
                              : 'bg-transparent'
                          } px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
                          id="plateNumber"
                          aria-describedby="plateNumber"
                          placeholder="Plate Number"
                          :disabled="ems_location_a !== 'va'"
                        />
                        <label
                          for="plateNumber"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Plate Number
                        </label>
                      </div>

                      <div
                        class="relative mb-1 col-span-2 flex md:inline-block"
                      >
                        <label class="left-5 top-5 mb-0 font-bold md:text-5">
                          Patient:
                        </label>
                        <div
                          class="relative mb-1 col-span-2 flex ml-3 justify-left md:mt-2 md:ml-2"
                        >
                          <div
                            class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]"
                          >
                            <input
                              v-model="driver"
                              :class="`${
                                ems_location_a !== 'va'
                                  ? 'bg-gray-100 cursor-not-allowed'
                                  : 'bg-transparent'
                              } relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]`"
                              type="radio"
                              id="driver"
                              name="patientRadio"
                              value="driver"
                              :disabled="ems_location_a !== 'va'"
                            />
                            <label
                              class="inline-block pl-[0.15rem] hover:cursor-pointer"
                              for="driver"
                            >
                              Driver
                            </label>
                          </div>

                          <div
                            class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]"
                          >
                            <input
                              v-model="pedestrian"
                              :class="`${
                                ems_location_a !== 'va'
                                  ? 'bg-gray-100 cursor-not-allowed'
                                  : 'bg-transparent'
                              } relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]`"
                              type="radio"
                              id="pedestrian"
                              name="patientRadio"
                              value="pedestrian"
                              :disabled="ems_location_a !== 'va'"
                            />
                            <label
                              class="inline-block pl-[0.15rem] hover:cursor-pointer"
                              for="pedestrian"
                            >
                              Pedestrian
                            </label>
                          </div>

                          <div
                            class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]"
                          >
                            <input
                              v-model="passenger"
                              :class="`${
                                ems_location_a !== 'va'
                                  ? 'bg-gray-100 cursor-not-allowed'
                                  : 'bg-transparent'
                              } relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]`"
                              type="radio"
                              id="passenger"
                              name="patientRadio"
                              value="passenger"
                              :disabled="ems_location_a !== 'va'"
                            />
                            <label
                              class="inline-block pl-[0.15rem] hover:cursor-pointer"
                              for="passenger"
                            >
                              Passenger
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="relative mb-1 col-span-2">
                        <label class="left-5 top-5 mb-0 font-bold">
                          MCI/ Transport Priority
                        </label>
                        <div class="grid grid-cols-2 justify-center md:mt-2">
                          <div class="grid-cols-2 ml-7 mt-4">
                            <input
                              v-model="priority"
                              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              id="red"
                              name="priorityRadio"
                              value="red"
                            />
                            <label
                              class="inline-block pl-[0.15rem] hover:cursor-pointer"
                              for="red"
                            >
                              Priority#1(Red)
                            </label>
                          </div>

                          <div class="grid-cols-2 ml-7 mt-4">
                            <input
                              v-model="priority"
                              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              id="yellow"
                              name="priorityRadio"
                              value="yellow"
                            />
                            <label
                              class="inline-block pl-[0.15rem] hover:cursor-pointer"
                              for="yellow"
                            >
                              Priority#2(Yellow)
                            </label>
                          </div>

                          <div class="grid-cols-2 ml-7 mt-4">
                            <input
                              v-model="priority"
                              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              id="green"
                              name="priorityRadio"
                              value="green"
                            />
                            <label
                              class="inline-block pl-[0.15rem] hover:cursor-pointer"
                              for="green"
                            >
                              Priority#3(Green)
                            </label>
                          </div>

                          <div class="grid-cols-2 ml-7 mt-4">
                            <input
                              v-model="priority"
                              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              id="black"
                              name="priorityRadio"
                              value="black"
                            />
                            <label
                              class="inline-block pl-[0.15rem] hover:cursor-pointer"
                              for="black"
                            >
                              Priority#4(Black)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- SECOND DISPATCH DATA COLUMN -->
                    <div
                      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4"
                    >
                      <div
                        class="relative mb-1"
                        data-te-input-wrapper-init
                        data-te-timepicker-init
                        @click.stop="setCallReceived"
                      >
                        <input
                          v-model="call_receive"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.16rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="callReceive"
                          aria-describedby="callReceive"
                          placeholder="Call Received"
                        />
                        <label
                          for="callReceive"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-neutral peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                        >
                          Call Received
                        </label>
                      </div>

                      <div class="relative text-center mt-2 mb-1">
                        <label class="mb-0 font-bold"> Responders: </label>
                      </div>

                      <div
                        class="relative mb-1"
                        data-te-timepicker-init
                        data-te-input-wrapper-init
                        @click.stop="setResponded"
                      >
                        <input
                          v-model="responded"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="responded"
                          aria-describedby="responded"
                          placeholder="Responded"
                        />
                        <label
                          for="responded"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-neutral peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                        >
                          Responded
                        </label>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="t_o"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="tO"
                          aria-describedby="tO"
                          placeholder="T/O"
                        />
                        <label
                          for="tO"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          T/O
                        </label>
                      </div>

                      <div
                        class="relative mb-1"
                        data-te-timepicker-init
                        data-te-input-wrapper-init
                        @click.stop="setArrivedScene"
                      >
                        <input
                          v-model="arrive_at_scene"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="arriveAtScene"
                          aria-describedby="arriveAtScene"
                          placeholder="Arrived at scene"
                        />
                        <label
                          for="arriveAtScene"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-neutral peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                        >
                          Arrived at scene
                        </label>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="t_l"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="tL"
                          aria-describedby="tL"
                          placeholder="T/L"
                        />
                        <label
                          for="tL"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          T/L
                        </label>
                      </div>

                      <div
                        class="relative mb-1"
                        data-te-timepicker-init
                        data-te-input-wrapper-init
                        @click.stop="setEnRoute"
                      >
                        <input
                          v-model="en_route_to"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="enRouteTo"
                          aria-describedby="enRouteTo"
                          placeholder="En route to"
                        />
                        <label
                          for="enRouteTo"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-neutral peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                        >
                          En route to
                        </label>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="tx_o"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="tXO"
                          aria-describedby="tXO"
                          placeholder="TX/O"
                        />
                        <label
                          for="tXO"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          TX/O
                        </label>
                      </div>

                      <div
                        class="relative mb-1"
                        data-te-timepicker-init
                        data-te-input-wrapper-init
                        @click.stop="setArrivedAt"
                      >
                        <input
                          v-model="arrived_at"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="arrivedAt"
                          aria-describedby="arrivedAt"
                          placeholder="Arrived at"
                        />
                        <label
                          for="arrivedAt"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-neutral peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                        >
                          Arrived at
                        </label>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="l_o"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="lO"
                          aria-describedby="lO"
                          placeholder="L/O"
                        />
                        <label
                          for="lO"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          L/O
                        </label>
                      </div>

                      <div
                        class="relative mb-1"
                        data-te-timepicker-init
                        data-te-input-wrapper-init
                        @click.stop="setDeparted"
                      >
                        <input
                          v-model="departed"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="departed"
                          aria-describedby="departed"
                          placeholder="Departed"
                        />
                        <label
                          for="departed"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-neutral peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                        >
                          Departed
                        </label>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="station"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="station"
                          aria-describedby="station"
                          placeholder="Station"
                        />
                        <label
                          for="station"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Station
                        </label>
                      </div>

                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="ambulance"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="ambulance"
                          aria-describedby="ambulance"
                          placeholder="Ambulance"
                        />
                        <label
                          for="ambulance"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Ambulance
                        </label>
                      </div>

                      <select
                        v-model="team_id"
                        data-te-select-init
                        class="w-full bg-neutral-50"
                        disabled
                      >
                        <option>Team</option>
                        <option
                          v-for="(item, index) in teams"
                          :key="index"
                          :value="item.id"
                        >
                          {{ item.name }}
                        </option>
                      </select>

                      <div
                        class="relative mb-1 mt-3 col-span-2"
                        data-te-input-wrapper-init
                      >
                        <textarea
                          v-model="remarks"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="remarks"
                          rows="9"
                          aria-describedby="remarks"
                        />
                        <label
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Remarks
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          >
            <h2 class="mb-0" id="flush-headingTwo">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Patient Information
                <span
                  class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingTwo"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4 mt-7 mb-7">
                <form>
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
                        v-model="surname"
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

                    <!-- GENDER -->
                    <select
                      data-te-select-init
                      class="w-full bg-neutral-50"
                      v-model="gender"
                    >
                      <option value="patientGender">Gender</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>

                    <!-- BIRTHDATE -->
                    <div class="relative mb-1" data-te-input-wrapper-init>
                      <input
                        v-model="birthdate"
                        type="date"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="Select a date"
                        @input="calculateAge"
                      />
                      <label
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Birthdate
                      </label>
                    </div>
                  
                    <!-- AGE -->
                    <div class="relative mb-1" data-te-input-wrapper-init>
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
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-neutral peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                      >
                        Age
                      </label>
                    </div>

                    <div>
                      <select
                        data-te-select-init
                        v-model="status"
                        class="bg-neutral-50"
                      >
                        <option selected value="2">Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="annulled">Annulled</option>
                        <option value="separated">Separated</option>
                        <option value="cohabiting">Cohabiting</option>
                        <option value="notSpecified">Not Specified</option>
                      </select>
                    </div>

                    <div>
                      <select
                        data-te-select-init
                        v-model="religion"
                        class="bg-neutral-50"
                      >
                        <option selected value="3">Religion</option>
                        <option value="roman catholic">Roman Catholic</option>
                        <option value="islam">Islam</option>
                        <option value="iglesia ni cristo">
                          Iglesia ni Cristo
                        </option>
                        <option value="aglipay">Aglipay</option>
                        <option value="iglesia filipina independiente">
                          Iglesia Filipina Independiente
                        </option>
                        <option value="bible baptist church">
                          Bible Baptist Church
                        </option>
                        <option
                          value="united church of christ in the philippines"
                        >
                          United Church of Christ in the Philippines
                        </option>
                        <option value="jehovas witness">
                          Jehovah's Witness
                        </option>
                        <option value="church of christ">
                          Church of Christ
                        </option>
                        <option value="others">Others</option>
                        <option value="none">None</option>
                      </select>
                    </div>

                    <div class="relative mb-1 col-span-2" data-te-input-wrapper-init>
                      <input
                        v-model="companion"
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="pntCompanion"
                        aria-describedby="pntCompanion"
                        placeholder="Relative/Companion"
                      />
                      <label
                        for="pntCompanion"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Relative/Companion Name
                      </label>
                    </div>

                    <div
                      class="relative mb-1 bg-neutral-50 flex flex-wrap items-stretch"
                    >
                      <span
                        class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-2 py-[0.15rem] text-center text-sm font-normal leading-[1.3] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 md:text-sm"
                      >
                        +63
                      </span>
                      <input
                        v-model="phone"
                        type="tel"
                        id="pntContactNumber"
                        name="pntContactNumber"
                        class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-sm font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary md:text-sm"
                        pattern="[0-9]*"
                        inputmode="numeric"
                        maxlength="10"
                        required
                      />
                    </div>

                    <!-- ADDRESS -->
                    <select
                      data-te-select-init
                      class="bg-neutral-50"
                      v-model="pnt_city"
                    >
                      <option selected value="City">Select City</option>
                      <option value="Valenzuela">Valenzuela City</option>
                      <option value="Others">Others, please specify</option>
                      <!-- Expected input box here -->
                    </select>

                    <div>
                      <select
                        data-te-select-init
                        class="bg-neutral-50"
                        v-model="pnt_brgy"
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
                        <option value="Pariancillo Villa">
                          Pariancillo Villa
                        </option>
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

                    <div
                      class="relative mb-1 col-span-2"
                      data-te-input-wrapper-init
                    >
                      <input
                        v-model="pnt_st"
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

                    <div class="s/sx-chief complaint col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="complaint"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="s/sx-chief complaint"
                          aria-describedby="s/sx-chief complaint"
                          placeholder="s/sx-chief complaint"
                        />
                        <label
                          for="s/sx-chief complaint"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          S/SX-Chief Complaint
                        </label>
                      </div>
                    </div>

                    <!-- ONSET-->
                    <div class="col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="onset"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="onset"
                          aria-describedby="zis/sx-chief complaint"
                          placeholder="onset"
                        />
                        <label
                          for="onset"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Onset
                        </label>
                      </div>
                    </div>

                    <!-- ALLERGIES-->
                    <div class="col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="allergies"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="allergies"
                          aria-describedby="allergies"
                          placeholder="allergies"
                        />
                        <label
                          for="allergies"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Allergies
                        </label>
                      </div>
                    </div>

                    <!-- PROVOCATION-->
                    <div class="col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="provocation"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="provocation"
                          aria-describedby="provocation"
                          placeholder="provocation"
                        />
                        <label
                          for="provocation"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Provocation
                        </label>
                      </div>
                    </div>

                    <!-- MEDICATION-->
                    <div class="col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="medication"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="medication"
                          aria-describedby="medication"
                          placeholder="medication"
                        />
                        <label
                          for="medication"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Medication
                        </label>
                      </div>
                    </div>

                    <!-- QUALITY-->
                    <div class="col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="quality"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="quality"
                          aria-describedby="quality"
                          placeholder="quality"
                        />
                        <label
                          for="quality"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Quality
                        </label>
                      </div>
                    </div>

                    <!-- PAST MEDICAL HISTORY-->
                    <div class="col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="medical_history"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="pmh"
                          aria-describedby="pmh"
                          placeholder="pmh"
                        />
                        <label
                          for="pmh"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Past Medical History
                        </label>
                      </div>
                    </div>

                    <!-- RADIATION-->
                    <div class="col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="radiation"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="radiation"
                          aria-describedby="radiation"
                          placeholder="radiation"
                        />
                        <label
                          for="radiation"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Radiation
                        </label>
                      </div>
                    </div>

                    <!-- LAST ORAL INTAKE -->
                    <div class="col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="last_oral_intake"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="loi"
                          aria-describedby="loi"
                          placeholder="loi"
                        />
                        <label
                          for="loi"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Last Oral Intake
                        </label>
                      </div>
                    </div>

                    <!--SEVERITY-->
                    <div class="col-span-2">
                      <select
                        data-te-select-init
                        class="w-full bg-neutral-50 text-gray"
                        v-model="severity"
                      >
                        <option value="severity">Severity</option>
                        <option value="mild">Mild (1)</option>
                        <option value="moderate">Moderate (5)</option>
                        <option value="severe">Severe (10)</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    <!-- EVENTS LEADING TO INJURY -->
                    <div class="events col-span-2">
                      <div class="relative mb-1" data-te-input-wrapper-init>
                        <input
                          v-model="event_leading_to_injury"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="events"
                          aria-describedby="events"
                          placeholder="events"
                        />
                        <label
                          for="events"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Events Leading to Injury
                        </label>
                      </div>
                    </div>

                    <!-- TIME -->
                    <div class="time col-span-2">
                      <div
                        class="relative mb-1"
                        data-te-input-wrapper-init
                        data-te-timepicker-init
                        @click.stop="setTimePatient"
                      >
                        <input
                          v-model="time_taken"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="time"
                          aria-describedby="time"
                          placeholder="time"
                        />
                        <label
                          for="time"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Time
                        </label>
                      </div>
                    </div>
                    <!-- EVENTS LEADING TO INJURY -->
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          >
            <h2 class="mb-0" id="flush-headingThree">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Vital Signs
                <span
                  class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingThree"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4 mt-6 mb-5">
                <form>
                  <div class="grid grid-cols-6 gap-4">
                    <div class="">
                      <h4 class="mb-3 font-bold">Time</h4>
                      <div
                        class="relative mb-2"
                        data-te-input-wrapper-init
                        data-te-timepicker-init
                        @click.stop="setTimeA"
                      >
                        <input
                          v-model="time_a"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          aria-describedby="vTime"
                        />
                      </div>
                      <div
                        class="relative mb-2"
                        data-te-input-wrapper-init
                        data-te-timepicker-init
                        @click.stop="setTimeB"
                      >
                        <input
                          v-model="time_b"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          aria-describedby="vTime"
                        />
                      </div>
                      <div
                        class="relative mb-2"
                        data-te-input-wrapper-init
                        data-te-timepicker-init
                        @click.stop="setTimeC"
                      >
                        <input
                          v-model="time_c"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          aria-describedby="vTime"
                        />
                      </div>
                      <div
                        class="relative mb-2"
                        data-te-input-wrapper-init
                        data-te-timepicker-init
                        @click.stop="setTimeD"
                      >
                        <input
                          v-model="time_d"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          aria-describedby="vTime"
                        />
                      </div>
                      <div
                        class="relative mb-2"
                        data-te-input-wrapper-init
                        data-te-timepicker-init
                        @click.stop="setTimeE"
                      >
                        <input
                          v-model="time_e"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          aria-describedby="vTime"
                        />
                      </div>
                    </div>
                    <div class="">
                      <h4 class="mb-3 font-bold">BP (mmHg)</h4>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="bp_a"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="bp_b"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="bp_c"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="bp_d"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="bp_e"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                    </div>
                    <div class="">
                      <h4 class="mb-3 font-bold md:text-sm sm:text-sm">PR
                        <small>(beats/min)</small>
                      </h4>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="pr_a"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="pr_b"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="pr_c"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="pr_d"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="pr_e"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                    </div>
                    <div class="">
                      <h4 class="mb-3 font-bold">RR (BPM)
                      </h4>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="rr_a"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="rr_b"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="rr_c"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="rr_d"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="rr_e"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                    </div>
                    <div class="">
                      <h4 class="mb-3 font-bold">Temp.(°C)</h4>
                      <div class="relative mb-2 flex flex-wrap items-stretch" data-te-input-wrapper-init>
                        <input
                          v-model="tempt_a"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                       
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="tempt_b"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="tempt_c"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="tempt_d"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="tempt_e"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                    </div>
                    <div class="">
                      <h4 class="mb-3 font-bold">SpO2 (%)</h4>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="spo2_a"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="spo2_b"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="spo2_c"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="spo2_d"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                      <div class="relative mb-2" data-te-input-wrapper-init>
                        <input
                          v-model="spo2_e"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-10">
                    <div>
                      <h4 class="mb-3 font-bold">Pupil</h4>
                      <h5
                        class="relative mb-1 font-small col-span-1 text-gray-700"
                      >
                        Pearl
                      </h5>
                      <h5
                        class="relative mb-1 font-small col-span-1 text-gray-700"
                      >
                        Dilated
                      </h5>
                      <h5
                        class="relative mb-1 font-small col-span-1 text-gray-700"
                      >
                        Constricted
                      </h5>
                      <h5
                        class="relative mb-1 font-small col-span-1 text-gray-700"
                      >
                        Non-reactive
                      </h5>
                      <h5
                        class="relative mb-1 font-small col-span-1 text-gray-700"
                      >
                        Cataract
                      </h5>
                    </div>
                    <div>
                      <h4 class="mb-4 font-bold text-center">Left</h4>
                      <div class="relative mb-3 col-span-1">
                        <input
                          v-model="left_pearl"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                      <div class="relative mb-4 col-span-1">
                        <input
                          v-model="left_dilated"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                      <div class="relative mb-4 col-span-1">
                        <input
                          v-model="left_constrict"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                      <div class="relative mb-4 col-span-1">
                        <input
                          v-model="left_non_reactive"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                      <div class="relative mb-4 col-span-1">
                        <input
                          v-model="left_cataract"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-3 font-bold text-center">Right</h4>
                      <div class="relative mb-4 col-span-1">
                        <input
                          v-model="right_pearl"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                      <div class="relative mb-4 col-span-1">
                        <input
                          v-model="right_dilated"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                      <div class="relative mb-4 col-span-1">
                        <input
                          v-model="right_constrict"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                      <div class="relative mb-4 col-span-1">
                        <input
                          v-model="right_non_reactive"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                      <div class="relative mb-4 col-span-1">
                        <input
                          v-model="right_cataract"
                          type="checkbox"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.33rem] text-xs leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 transform scale-150"
                        />
                      </div>
                    </div>

                    <div class="relative mr-1 left-2 top-4 col-span-2">
                      <select
                        data-te-select-init
                        v-model="skin_color"
                        class="bg-neutral-50"
                      >
                        <option selected value="2">Skin Color</option>
                        <option value="normal">Normal</option>
                        <option value="cyanotic">Cyanotic</option>
                        <option value="pale">Pale</option>
                        <option value="flushed">Flushed</option>
                        <option value="jaundice">Jaundice</option>
                      </select>
                    </div>

                    <div class="relative mr-2 left-3 top-4 col-span-1">
                      <select
                        data-te-select-init
                        v-model="eyes"
                        class="bg-neutral-50"
                      >
                        <option selected value="2">Eyes</option>
                        <option value="spontaneous">4 - Spontaneous</option>
                        <option value="verbal">3 - Verbal</option>
                        <option value="pain">2 - Pain</option>
                        <option value="none">1 - None</option>
                      </select>
                    </div>

                    <div class="relative mr-2 left-3 top-4 col-span-2">
                      <select
                        data-te-select-init
                        v-model="verbal"
                        class="bg-neutral-50"
                      >
                        <option selected value="2">Verbal</option>
                        <option value="oriented">5 - Oriented</option>
                        <option value="confused">4 - Confused</option>
                        <option value="inappropriate word">
                          3 - Inappropriate words
                        </option>
                        <option value="incomprehensible sounds">
                          2 - Incomprehensible sounds
                        </option>
                        <option value="none">1 - None</option>
                      </select>
                    </div>

                    <div
                      class="relative mr-2 left-3 top-4 col-span-2 place-content-start"
                    >
                      <select
                        data-te-select-init
                        v-model="motor"
                        class="bg-neutral-50"
                      >
                        <option selected value="2">Motor</option>
                        <option value="obeys command">6 - Obeys Command</option>
                        <option value="localize pain">5 - Localize Pain</option>
                        <option value="withdraws to pain">
                          4 - Withdraws to Pain
                        </option>
                        <option value="abnormal flexion">
                          3 - Abnormal Flexion
                        </option>
                        <option value="abnormal extension">
                          2 - Abnormal Extension
                        </option>
                        <option value="none">1 - None</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          >
            <h2 class="mb-0" id="flush-headingFour">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Body Injuries
                <span
                  class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingFour"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                <form>
                  <h4 class="mb-4 font-bold">Anterior</h4>
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Head</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="anterior_head_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Chest/Lungs</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="anterior_chest_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Pelvis/GU</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="anterior_pelvis_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Left Arm</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="anterior_left_arm_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Right Arm</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="anterior_right_arm_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Left Leg</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="anterior_left_leg_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Right Leg</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="anterior_right_leg_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Genitalia</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="anterior_genitalia_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <h4 class="mb-4 font-bold">Posterior</h4>
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Head</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="posterior_head_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Chest/Lungs</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="posterior_chest_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Pelvis/GU</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="posterior_pelvis_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Left Arm</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="posterior_left_arm_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Right Arm</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="posterior_right_arm_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Left Leg</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="posterior_left_leg_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Right Leg</label>
                    </div>
                    <div class="relative mb-3 w-4/5">
                      <select
                        v-model="posterior_right_leg_injury"
                        data-te-select-init
                        multiple
                        class="w-full"
                      >
                        <option value="Deformity">Deformity</option>
                        <option value="Contusion">Contusion</option>
                        <option value="Abrasion">Abrasion</option>
                        <option value="Puncture">Puncture</option>
                        <option value="Burn">Burn</option>
                        <option value="Tenderness">Tenderness</option>
                        <option value="Laceration">Laceration</option>
                        <option value="Swelling">Swelling</option>
                        <option value="Edema">Edema</option>
                        <option value="Battle Sign">Battle Sign</option>
                        <option value="Racoon Eye">Racoon Eye</option>
                        <option value="Gunshot">Gunshot</option>
                        <option value="JVD">JVD</option>
                        <option value="Bleeding">Bleeding</option>
                        <option value="Pain">Pain</option>
                      </select>
                      <label data-te-select-label-ref
                        >Select as many items as apply</label
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          >
            <h2 class="mb-0" id="flush-headingFive">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Burn Percentage
                <span
                  class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingFive"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                <form>
                  <h4 class="mb-4 font-bold">Anterior</h4>
                  <!-- Anterior Head Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Head</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          anterior_head_degree =
                            anterior_head_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_head_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_head_degree =
                            anterior_head_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_head_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_head_degree =
                            anterior_head_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_head_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="anterior_head_degree"
                        name="anterior_head_degree"
                      />
                    </div>
                  </div>

                  <!-- Anterior Chest/Lungs Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Chest/Lungs</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          anterior_chest_degree =
                            anterior_chest_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_chest_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_chest_degree =
                            anterior_chest_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_chest_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_chest_degree =
                            anterior_chest_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_chest_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="anterior_chest_degree"
                        name="anterior_chest_degree"
                      />
                    </div>
                  </div>

                  <!-- Anterior Pelvis/GU Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Pelvis/GU</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          anterior_pelvis_degree =
                            anterior_pelvis_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_pelvis_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_pelvis_degree =
                            anterior_pelvis_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_pelvis_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_pelvis_degree =
                            anterior_pelvis_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_pelvis_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="anterior_pelvis_degree"
                        name="anterior_pelvis_degree"
                      />
                    </div>
                  </div>

                  <!-- Anterior Left Arm Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Left Arm</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          anterior_left_arm_degree =
                            anterior_left_arm_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_left_arm_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_left_arm_degree =
                            anterior_left_arm_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_left_arm_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_left_arm_degree =
                            anterior_left_arm_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_left_arm_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="anterior_left_arm_degree"
                        name="anterior_left_arm_degree"
                      />
                    </div>
                  </div>

                  <!-- Anterior Right Arm Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Right Arm</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          anterior_right_arm_degree =
                            anterior_right_arm_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_right_arm_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_right_arm_degree =
                            anterior_right_arm_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_right_arm_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_right_arm_degree =
                            anterior_right_arm_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_right_arm_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="anterior_right_arm_degree"
                        name="anterior_right_arm_degree"
                      />
                    </div>
                  </div>

                  <!-- Anterior Left Leg Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Left Leg</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          anterior_left_leg_degree =
                            anterior_left_leg_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_left_leg_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_left_leg_degree =
                            anterior_left_leg_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_left_leg_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_left_leg_degree =
                            anterior_left_leg_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_left_leg_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="anterior_left_leg_degree"
                        name="anterior_left_leg_degree"
                      />
                    </div>
                  </div>

                  <!-- Anterior Right Leg Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Right Leg</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          anterior_right_leg_degree =
                            anterior_right_leg_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_right_leg_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_right_leg_degree =
                            anterior_right_leg_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_right_leg_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_right_leg_degree =
                            anterior_right_leg_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_right_leg_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="anterior_right_leg_degree"
                        name="anterior_right_leg_degree"
                      />
                    </div>
                  </div>

                  <!-- Anterior Genitalia Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Genitalia</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          anterior_genitalia_degree =
                            anterior_genitalia_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_genitalia_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_genitalia_degree =
                            anterior_genitalia_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_genitalia_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          anterior_genitalia_degree =
                            anterior_genitalia_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          anterior_genitalia_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="anterior_genitalia_degree"
                        name="anterior_genitalia_degree"
                      />
                    </div>
                  </div>

                  <!-- Posterior Head Degree -->
                  <h4 class="mb-4 font-bold">Posterior</h4>
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Head</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          posterior_head_degree =
                            posterior_head_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_head_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_head_degree =
                            posterior_head_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_head_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_head_degree =
                            posterior_head_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_head_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="posterior_head_degree"
                        name="posterior_head_degree"
                      />
                    </div>
                  </div>

                  <!-- Posterior Chest/Lungs Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Chest/Lungs</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          posterior_chest_degree =
                            posterior_chest_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_chest_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_chest_degree =
                            posterior_chest_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_chest_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_chest_degree =
                            posterior_chest_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_chest_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="posterior_chest_degree"
                        name="posterior_chest_degree"
                      />
                    </div>
                  </div>

                  <!-- Posterior Pelvis/GU Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Pelvis/GU</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          posterior_pelvis_degree =
                            posterior_pelvis_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_pelvis_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_pelvis_degree =
                            posterior_pelvis_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_pelvis_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_pelvis_degree =
                            posterior_pelvis_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_pelvis_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="posterior_pelvis_degree"
                        name="posterior_pelvis_degree"
                      />
                    </div>
                  </div>

                  <!-- Posterior Left Arm Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Left Arm</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          posterior_left_arm_degree =
                            posterior_left_arm_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_left_arm_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_left_arm_degree =
                            posterior_left_arm_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_left_arm_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_left_arm_degree =
                            posterior_left_arm_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_left_arm_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="posterior_left_arm_degree"
                        name="posterior_left_arm_degree"
                      />
                    </div>
                  </div>

                  <!-- Posterior Right Arm Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Right Arm</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          posterior_right_arm_degree =
                            posterior_right_arm_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_right_arm_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_right_arm_degree =
                            posterior_right_arm_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_right_arm_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_right_arm_degree =
                            posterior_right_arm_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_right_arm_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="posterior_right_arm_degree"
                        name="posterior_right_arm_degree"
                      />
                    </div>
                  </div>

                  <!-- Posterior Left Leg Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Left Leg</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          posterior_left_leg_degree =
                            posterior_left_leg_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_left_leg_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_left_leg_degree =
                            posterior_left_leg_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_left_leg_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_left_leg_degree =
                            posterior_left_leg_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_left_leg_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="posterior_left_leg_degree"
                        name="posterior_left_leg_degree"
                      />
                    </div>
                  </div>

                  <!-- Posterior Right Leg Degree -->
                  <div class="flex items-center">
                    <div class="text-center mb-3 w-1/5">
                      <label class="mb-0">Right Leg</label>
                    </div>
                    <div class="relative mb-3 grid grid-cols-3 gap-4 w-full">
                      <button
                        type="button"
                        @click="
                          posterior_right_leg_degree =
                            posterior_right_leg_degree === '1st Degree'
                              ? ''
                              : '1st Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_right_leg_degree === '1st Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        1st Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_right_leg_degree =
                            posterior_right_leg_degree === '2nd Degree'
                              ? ''
                              : '2nd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_right_leg_degree === '2nd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        2nd Degree
                      </button>
                      <button
                        type="button"
                        @click="
                          posterior_right_leg_degree =
                            posterior_right_leg_degree === '3rd Degree'
                              ? ''
                              : '3rd Degree'
                        "
                        :class="[
                          'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none',
                          posterior_right_leg_degree === '3rd Degree'
                            ? 'text-white bg-blue-800 border border-blue-800 hover:bg-blue-700 hover:text-white'
                            : 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-800 hover:text-white',
                        ]"
                      >
                        3rd Degree
                      </button>
                      <input
                        type="hidden"
                        v-model="posterior_right_leg_degree"
                        name="posterior_right_leg_degree"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          >
            <h2 class="mb-0" id="flush-headingSix">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Obstetric History
                <span
                  class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingSix"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                <form>
                  <div
                    class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"
                  >
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        v-model="prenatal_checkup"
                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="prenCheckup"
                      />
                      <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="prenCheckup"
                      >
                        Prenatal Checkup
                      </label>
                    </div>

                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        v-model="labor_pains"
                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="labPains"
                      />
                      <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="labPains"
                      >
                        Labor Pains
                      </label>
                    </div>

                    <div class="relative mb-1" data-te-input-wrapper-init>
                      <input
                        v-model="last_menstrual_period"
                        type="date"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="lastMens"
                        aria-describedby="lastMens"
                        placeholder="Last Menstrual Period"
                      />
                      <label
                        for="lastMens"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Last Menstrual Period
                      </label>
                    </div>

                    <div class="relative mb-1" data-te-input-wrapper-init>
                      <input
                        v-model="estimated_date_of_delivery"
                        type="date"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="estDateDelivery"
                        aria-describedby="estDateDelivery"
                        placeholder="Estimated Date of Delivery"
                      />
                      <label
                        for="estDateDelivery"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Estimated Date of Delivery
                      </label>
                    </div>

                    <!-- MISSING AGE OF GESTATION FIELD -->

                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        v-model="gravidity"
                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="gravidity"
                      />
                      <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="gravidity"
                      >
                        Gravidity
                      </label>
                    </div>

                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        v-model="parity"
                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="parity"
                      />
                      <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="parity"
                      >
                        Parity
                        <div
                          class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                        >
                          <input
                            v-model="term_of_birth"
                            class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox"
                            value=""
                            id="termBirth"
                          />
                          <label
                            class="inline-block pl-[0.15rem] hover:cursor-pointer"
                            for="termBirth"
                          >
                            term birth
                          </label>
                        </div>

                        <div
                          class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                        >
                          <input
                            v-model="pre_term"
                            class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox"
                            value=""
                            id="preTerm"
                          />
                          <label
                            class="inline-block pl-[0.15rem] hover:cursor-pointer"
                            for="termBirth"
                          >
                            pre term
                          </label>
                        </div>

                        <div
                          class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                        >
                          <input
                            v-model="abortion"
                            class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox"
                            value=""
                            id="abortion"
                          />
                          <label
                            class="inline-block pl-[0.15rem] hover:cursor-pointer"
                            for="abortion"
                          >
                            abortion
                          </label>
                        </div>

                        <div
                          class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                        >
                          <input
                            v-model="living"
                            class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox"
                            value=""
                            id="living"
                          />
                          <label
                            class="inline-block pl-[0.15rem] hover:cursor-pointer"
                            for="living"
                          >
                            living
                          </label>
                        </div>
                      </label>
                    </div>

                    <div
                      class="relative mb-1 col-span-2 row-span-2"
                      data-te-input-wrapper-init
                    >
                      <textarea
                        v-model="obs_remarks"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="remarks"
                        aria-describedby="remarks"
                      >
                      </textarea>
                      <label
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Remarks
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          >
            <h2 class="mb-0" id="flush-headingSeven">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseSeven"
                aria-expanded="false"
                aria-controls="flush-collapseSeven"
              >
                Treatment Intervention
                <span
                  class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              class="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingSeven"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                <form>
                  <h4 class="mb-3 font-bold">O2 Given Via:</h4>
                  <div
                    class="grid grid-col-5 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"
                  >
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        v-model="nasal"
                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="nasal"
                      />
                      <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="nasal"
                      >
                        Nasal
                      </label>
                    </div>

                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        v-model="o2_mask"
                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value="o2_mask"
                        id="o2mask"
                      />
                      <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="o2mask"
                      >
                        O2 Mask
                      </label>
                    </div>

                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        v-model="bvm"
                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value="bvm"
                        id="bvm"
                      />
                      <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="bvm"
                      >
                        BVM at
                      </label>
                    </div>

                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        v-model="lpm"
                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value="lpm"
                        id="lpm"
                      />
                      <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="lpm"
                      >
                        LPM
                      </label>
                    </div>

                    <div class="grid grid-rows-6">
                      <div
                        class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                      >
                        <input
                          v-model="wound_care"
                          class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value="wound_care"
                          id="woundCare"
                        />
                        <label
                          class="inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="woundCare"
                        >
                          Wound Care
                        </label>
                      </div>

                      <div
                        class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                      >
                        <input
                          v-model="splinting_applied"
                          class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value="splinting_applied"
                          id="splintingApplied"
                        />
                        <label
                          class="inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="splintingApplied"
                        >
                          Splinting Applied
                        </label>
                      </div>

                      <div
                        class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                      >
                        <input
                          v-model="control_bleeding"
                          class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value="control_bleeding"
                          id="contBleeding"
                        />
                        <label
                          class="inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="contBleeding"
                        >
                          Control Bleeding
                        </label>
                      </div>

                      <div
                        class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                      >
                        <input
                          v-model="vital_sign_taken"
                          class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value="vital_sign_taken"
                          id="vitRecorded"
                        />
                        <label
                          class="inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="vitRecorded"
                        >
                          Vital Sign Taken and Recorded
                        </label>
                      </div>

                      <div
                        class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                      >
                        <input
                          v-model="applied_cpr"
                          class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value="applied_cpr"
                          id="appCpr"
                        />
                        <label
                          class="inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="appCpr"
                        >
                          Applied CPR
                        </label>
                      </div>

                      <div
                        class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                      >
                        <input
                          v-model="applied_aed"
                          class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value="applied_aed"
                          id="appAed"
                        />
                        <label
                          class="inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="appAed"
                        >
                          Applied AED
                        </label>
                      </div>
                    </div>
                    <div />

                    <div
                      class="relative mb-1 col-span-2 row-span-2"
                      data-te-input-wrapper-init
                    >
                      <textarea
                        v-model="problems"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="problems"
                        aria-describedby="problems"
                      >
                      </textarea>
                      <label
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Problems
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
          >
            <h2 class="mb-0" id="flush-headingEight">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseEight"
                aria-expanded="false"
                aria-controls="flush-collapseEight"
              >
                Signature
                <span
                  class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseEight"
              class="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingEight"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                <form>
                  <div class="grid grid-col-2 sm:grid-cols-2 gap-4">
                    <div class="relative mb-1" data-te-input-wrapper-init>
                      <input
                        v-model="received_by"
                        type="text"
                        class="peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="receivedBy"
                        aria-describedby="receivedBy"
                        placeholder="Received By"
                      />
                      <label
                        for="receivedBy"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Received By
                      </label>
                    </div>

                    <div class="relative mb-3">
                      <vue-signature
                        ref="received_by_signature"
                        :w="'600px'"
                        :h="'200px'"
                      />
                      <label
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Signature Here
                      </label>
                      <button
                        class="ml-1 inline-block rounded border border-slate-400 bg-slate-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-dark-1 transition duration-150 ease-in-out hover:bg-slate-300 hover:border-slate-400 hover:bg-slate-300 focus:bg-slate-300 focus:shadow-[0_4px_9px_-4px_#3b71ca] focus:ring-0 active:bg-slate-300"
                        @click="$refs.received_by_signature.clear()"
                      >
                        Clear
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 class="mb-3 mt-7 font-bold">
                      R.A. 8344 REFUSAL TO ADMIT
                    </h4>

                    <div class="grid grid-col-2 sm:grid-cols-2 gap-4">
                      <div class="relative mb-5" data-te-input-wrapper-init>
                        <input
                          v-model="medical_facility"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="medFac"
                          aria-describedby="receivedBy"
                          placeholder="Medical Facility"
                        />
                        <label
                          for="medFac"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Medical Facility
                        </label>
                      </div>

                      <div class="relative mb-3">
                        <vue-signature
                          ref="medical_facility_signature"
                          :w="'600px'"
                          :h="'200px'"
                        />
                        <label
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >Signature Here
                        </label>
                        <button
                          class="ml-1 inline-block rounded border border-slate-400 bg-slate-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-dark-1 transition duration-150 ease-in-out hover:bg-slate-300 hover:border-slate-400 hover:bg-slate-300 focus:bg-slate-300 focus:shadow-[0_4px_9px_-4px_#3b71ca] focus:ring-0 active:bg-slate-300"
                          @click="$refs.medical_facility_signature.clear()"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-col-2 sm:grid-cols-2 gap-4">
                    <div class="relative mb-1" data-te-input-wrapper-init>
                      <input
                        v-model="team_leader"
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="teamLead"
                        aria-describedby="teamLead"
                        placeholder="Team Leader"
                      />
                      <label
                        for="teamLead"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Team Leader
                      </label>
                    </div>

                    <div class="relative mb-3">
                      <vue-signature
                        ref="team_leader_signature"
                        :w="'600px'"
                        :h="'200px'"
                      />
                      <label
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Signature Here
                      </label>
                      <button
                        class="ml-1 inline-block rounded border border-slate-400 bg-slate-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-dark-1 transition duration-150 ease-in-out hover:bg-slate-300 hover:border-slate-400 hover:bg-slate-300 focus:bg-slate-300 focus:shadow-[0_4px_9px_-4px_#3b71ca] focus:ring-0 active:bg-slate-300"
                        @click="$refs.team_leader_signature.clear()"
                      >
                        Clear
                      </button>
                    </div>
                  </div>

                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <h4 class="mb-3 mt-7 font-bold">SUPPLIES USED</h4>
                    <div class="grid grid-cols-4 space-x-2">
                      <div
                        class="relative mb-3 col-span-1"
                        data-te-input-wrapper-init
                      >
                        <input
                          v-model="gloves"
                          type="number"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="gloves"
                          placeholder="Gloves"
                        />
                        <label
                          for="gloves"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >Gloves
                        </label>
                      </div>

                      <div
                        class="relative mb-3 col-span-1"
                        data-te-input-wrapper-init
                      >
                        <input
                          v-model="gauze"
                          type="number"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="gauze"
                          placeholder="gauze"
                        />
                        <label
                          for="gauze"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >Gauze
                        </label>
                      </div>

                      <div
                        class="relative mb-3 col-span-1"
                        data-te-input-wrapper-init
                      >
                        <input
                          v-model="mask"
                          type="number"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="mask"
                          placeholder="mask"
                        />
                        <label
                          for="mask"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >Mask
                        </label>
                      </div>

                      <div
                        class="relative mb-3 col-span-1"
                        data-te-input-wrapper-init
                      >
                        <input
                          v-model="others"
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="others"
                          aria-describedby="others"
                          placeholder="others"
                        />
                        <label
                          for="others"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Others:
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Modal,
  initTE,
  Ripple,
  Stepper,
  Input,
  Datepicker,
  Select,
  Timepicker,
  Collapse,
} from "tw-elements";

export default {
  mounted() {
    initTE({ Ripple, Modal, Input, Datepicker, Select, Timepicker, Collapse });

    // Function to update the date field
    function updateDateField() {
      this.dispatch_date = new Date().toISOString().split("T")[0];
    }

    // Initial call to set the date on component mount
    updateDateField.call(this);

    // Schedule the update to occur once per day (24 hours)
    setInterval(updateDateField.bind(this), 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  },
  data() {
    return {
      teams: [],
      dispatch_date: "",
      category: "dispatch data",
      call_source: "",
      call_receive: "",
      incident_location: "",
      responded: "",
      t_o: "",
      va_location: "",
      va_location_barangay: "",
      arrive_at_scene: "",
      t_l: "",
      involved_vehicles_a: "",
      involved_vehicles_b: "",
      en_route_to: "",
      tx_o: "",
      plate_number: "",
      arrived_at: "",
      l_o: "",
      driver: "",
      pedestrian: "",
      passenger: "",
      departed: "",
      station: "",
      ems_location_a: "tor",
      ambulance: "",
      team_id: "1",
      mt_from: "",
      mt_barangay: "",
      ems_location_b: "",
      barangay_b: "",
      priority: "",
      remarks: "",
      cp_age: "",
      suffix: "",
      first_name: "",
      middle_name: "",
      surname: "",
      gender: "",
      birthdate: "",
      age: "",
      status: "",
      religion: "",
      companion: "",
      phone: "",
      pnt_city: "City",
      pnt_brgy: "",
      pnt_st: "",
      complaint: "",
      onset: "",
      allergies: "",
      provocation: "",
      medication: "",
      quality: "",
      medical_history: "",
      radiation: "",
      last_oral_intake: "",
      event_leading_to_injury: "",
      severity: "",
      time_taken: "",
      time_a: "",
      time_b: "",
      time_c: "",
      time_d: "",
      time_e: "",
      bp_a: "",
      bp_b: "",
      bp_c: "",
      bp_d: "",
      bp_e: "",
      pr_a: "",
      pr_b: "",
      pr_c: "",
      pr_d: "",
      pr_e: "",
      rr_a: "",
      rr_b: "",
      rr_c: "",
      rr_d: "",
      rr_e: "",
      tempt_a: "",
      tempt_b: "",
      tempt_c: "",
      tempt_d: "",
      tempt_e: "",
      spo2_a: "",
      spo2_b: "",
      spo2_c: "",
      spo2_d: "",
      spo2_e: "",
      right_pearl: "",
      right_dilated: "",
      right_constrict: "",
      right_non_reactive: "",
      right_cataract: "",
      left_pearl: "",
      left_dilated: "",
      left_constrict: "",
      left_non_reactive: "",
      left_cataract: "",
      prenatal_checkup: "",
      labor_pains: "",
      last_menstrual_period: "",
      estimated_date_of_delivery: "",
      gravidity: "",
      parity: "",
      term_of_birth: "",
      pre_term: "",
      abortion: "",
      living: "",
      obs_remarks: "",
      nasal: "",
      o2_mask: "",
      bvm: "",
      lpm: "",
      wound_care: "",
      splinting_applied: "",
      control_bleeding: "",
      vital_sign_taken: "",
      applied_cpr: "",
      applied_aed: "",
      problems: "",
      skin_color: "",
      eyes: "",
      verbal: "",
      motor: "",
      received_by: "",
      received_by_signature: "",
      medical_facility: "",
      medical_facility_signature: "",
      team_leader: "",
      team_leader_signature: "",
      gloves: "",
      mask: "",
      gauze: "",
      others: "",
      anterior_head_injury: [],
      anterior_chest_injury: [],
      anterior_pelvis_injury: [],
      anterior_left_arm_injury: [],
      anterior_right_arm_injury: [],
      anterior_left_leg_injury: [],
      anterior_right_leg_injury: [],
      anterior_genitalia_injury: [],
      posterior_head_injury: [],
      posterior_chest_injury: [],
      posterior_pelvis_injury: [],
      posterior_left_arm_injury: [],
      posterior_right_arm_injury: [],
      posterior_left_leg_injury: [],
      posterior_right_leg_injury: [],
      anterior_head_degree: "",
      anterior_chest_degree: "",
      anterior_pelvis_degree: "",
      anterior_left_arm_degree: "",
      anterior_right_arm_degree: "",
      anterior_left_leg_degree: "",
      anterior_right_leg_degree: "",
      anterior_genitalia_degree: "",
      posterior_head_degree: "",
      posterior_chest_degree: "",
      posterior_pelvis_degree: "",
      posterior_left_arm_degree: "",
      posterior_right_arm_degree: "",
      posterior_left_leg_degree: "",
      posterior_right_leg_degree: "",
    };
  },
  fetch() {
    this.team_id = this.$auth.user.team_id;
    this.$axios.get("team/list").then((response) => {
      response.data.return.map((team) =>
        this.teams.push({ id: team.id, name: this.capitalize(team.name) })
      );
    });
  },
  watch: {
    "$store.state.addPatientStepperForm"() {
      if (this.$store.getters["getAddPatientStepperForm"]) {
        initTE({ Stepper });
      }
    },
  },
  methods: {
    hideModal() {
      this.$store.commit("setAddPatientStepperForm", false);
    },
    formattedDateTime() {
      const currentDate = new Date();
      return currentDate.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
      });
    },
    setCallReceived() {
      this.call_receive = this.formattedDateTime();
    },
    setResponded() {
      this.responded = this.formattedDateTime();
    },
    setArrivedScene() {
      this.arrive_at_scene = this.formattedDateTime();
    },
    setArrivedAt() {
      this.arrived_at = this.formattedDateTime();
    },
    setEnRoute() {
      this.en_route_to = this.formattedDateTime();
    },
    setDeparted() {
      this.departed = this.formattedDateTime();
    },
    setTimeA() {
      this.time_a = this.formattedDateTime();
    },
    setTimeB() {
      this.time_b = this.formattedDateTime();
    },
    setTimeC() {
      this.time_c = this.formattedDateTime();
    },
    setTimeD() {
      this.time_d = this.formattedDateTime();
    },
    setTimeE() {
      this.time_e = this.formattedDateTime();
    },
    setTimePatient() {
      this.time_taken = this.formattedDateTime();
    },
    capitalize(word) {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    },
    calculateAge: function() {
      if (this.birthdate) {
        const today = new Date();
        const birthdate = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear();
        
        // Check if the birthdate for this year has not occurred yet
        if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
          age--;
        }
        
        this.age = age;

        // Update the age input field
        document.getElementById("age").value = age;
      } else {
        this.age = null;

        // Clear the age input field
        document.getElementById("age").value = '';
      }
    },
    clear() {
      this.category = "";
      this.call_source = "";
      this.call_receive = "";
      this.incident_location = "";
      this.responded = "";
      this.t_o = "";
      this.va_location = "";
      this.va_location_barangay = "";
      this.arrive_at_scene = "";
      this.t_l = "";
      this.involved_vehicles_a = "";
      this.involved_vehicles_b = "";
      this.en_route_to = "";
      this.tx_o = "";
      this.plate_number = "";
      this.arrived_at = "";
      this.l_o = "";
      this.driver = "";
      this.pedestrian = "";
      this.passenger = "";
      this.departed = "";
      this.station = "";
      this.ems_location_a = "tor";
      this.ambulance = "";
      this.team_id = "";
      this.mt_from = "";
      this.mt_barangay = "";
      this.ems_location_b = "";
      this.barangay_b = "";
      this.priority = "";
      this.cp_age = "";
      this.remarks = "";
      this.suffix = "";
      this.first_name = "";
      this.middle_name = "";
      this.surname = "";
      this.gender = "";
      this.birthdate = "";
      this.age = "";
      this.status = "";
      this.religion = "";
      this.companion = "";
      this.phone = "";
      this.pnt_city = "City";
      this.pnt_brgy = "";
      this.pnt_st = "";
      this.complaint = "";
      this.onset = "";
      this.allergies = "";
      this.provocation = "";
      this.medication = "";
      this.quality = "";
      this.medical_history = "";
      this.radiation = "";
      this.last_oral_intake = "";
      this.event_leading_to_injury = "";
      this.severity = "";
      this.time_taken = "";
      this.time_a = "";
      this.time_b = "";
      this.time_c = "";
      this.time_d = "";
      this.time_e = "";
      this.bp_a = "";
      this.bp_b = "";
      this.bp_c = "";
      this.bp_d = "";
      this.bp_e = "";
      this.pr_a = "";
      this.pr_b = "";
      this.pr_c = "";
      this.pr_d = "";
      this.pr_e = "";
      this.rr_a = "";
      this.rr_b = "";
      this.rr_c = "";
      this.rr_d = "";
      this.rr_e = "";
      this.tempt_a = "";
      this.tempt_b = "";
      this.tempt_c = "";
      this.tempt_d = "";
      this.tempt_e = "";
      this.spo2_a = "";
      this.spo2_b = "";
      this.spo2_c = "";
      this.spo2_d = "";
      this.spo2_e = "";
      this.left_pearl = "";
      this.left_dilated = "";
      this.left_constrict = "";
      this.left_non_reactive = "";
      this.left_cataract = "";
      this.right_pearl = "";
      this.right_dilated = "";
      this.right_constrict = "";
      this.right_non_reactive = "";
      this.right_cataract = "";
      this.skin_color = "";
      this.eyes = "";
      this.verbal = "";
      this.motor = "";
      this.prenatal_checkup = "";
      this.labor_pains = "";
      this.last_menstrual_period = "";
      this.estimated_date_of_delivery = "";
      this.gravidity = "";
      this.parity = "";
      this.term_of_birth = "";
      this.pre_term = "";
      this.abortion = "";
      this.living = "";
      this.obs_remarks = "";
      this.nasal = "";
      this.o2_mask = "";
      this.bvm = "";
      this.lpm = "";
      this.wound_care = "";
      this.splinting_applied = "";
      this.control_bleeding = "";
      this.vital_sign_taken = "";
      this.applied_cpr = "";
      this.applied_aed = "";
      this.problems = "";
      this.received_by = "";
      this.received_by_signature = "";
      this.medical_facility = "";
      this.medical_facility_signature = "";
      this.team_leader = "";
      this.team_leader_signature = "";
      this.gloves = "";
      this.mask = "";
      this.gauze = "";
      this.others = "";
      this.anterior_head_injury = [];
      this.anterior_chest_injury = [];
      this.anterior_pelvis_injury = [];
      this.anterior_left_arm_injury = [];
      this.anterior_right_arm_injury = [];
      this.anterior_left_leg_injury = [];
      this.anterior_right_leg_injury = [];
      this.anterior_genitalia_injury = [];
      this.posterior_head_injury = [];
      this.posterior_chest_injury = [];
      this.posterior_pelvis_injury = [];
      this.posterior_left_arm_injury = [];
      this.posterior_right_arm_injury = [];
      this.posterior_left_leg_injury = [];
      this.posterior_right_leg_injury = [];
      this.anterior_head_degree = "";
      this.anterior_chest_degree = "";
      this.anterior_pelvis_degree = "";
      this.anterior_left_arm_degree = "";
      this.anterior_right_arm_degree = "";
      this.anterior_left_leg_degree = "";
      this.anterior_right_leg_degree = "";
      this.anterior_genitalia_degree = "";
      this.posterior_head_degree = "";
      this.posterior_chest_degree = "";
      this.posterior_pelvis_degree = "";
      this.posterior_left_arm_degree = "";
      this.posterior_right_arm_degree = "";
      this.posterior_left_leg_degree = "";
      this.posterior_right_leg_degree = "";
    },
    register() {
      const params = {
        emrId: this.$auth.user.id,
        dispatch_date: this.dispatch_date,
        category: "dispatch data",
        call_source: this.call_source,
        call_receive: this.call_receive,
        incident_location: this.incident_location,
        responded: this.responded,
        t_o: this.t_o,
        va_location: this.va_location,
        va_location_barangay: this.va_location_barangay,
        arrive_at_scene: this.arrive_at_scene,
        t_l: this.t_l,
        involved_vehicles_a: this.involved_vehicles_a,
        involved_vehicles_b: this.involved_vehicles_b,
        en_route_to: this.en_route_to,
        tx_o: this.tx_o,
        plate_number: this.plate_number,
        arrived_at: this.arrived_at,
        l_o: this.l_o,
        driver: this.driver,
        pedestrian: this.pedestrian,
        passenger: this.passenger,
        departed: this.departed,
        station: this.station,
        ems_location_a: this.ems_location_a,
        ems_location_b: this.ems_location_b,
        barangay_b: this.barangay_b,
        ambulance: this.ambulance,
        team_id: this.team_id,
        mt_from: this.mt_from,
        mt_barangay: this.mt_barangay,
        remarks: this.remarks,
        priority: this.priority,
        suffix: this.suffix,
        first_name: this.first_name,
        middle_name: this.middle_name,
        surname: this.surname,
        gender: this.gender,
        birthdate: this.birthdate,
        age: this.age,
        status: this.status,
        religion: this.religion,
        companion: this.companion,
        phone: this.phone,
        pnt_city: this.pnt_city,
        pnt_brgy: this.pnt_brgy,
        pnt_st: this.pnt_st,
        complaint: this.complaint,
        onset: this.onset,
        allergies: this.allergies,
        provocation: this.provocation,
        medication: this.medication,
        quality: this.quality,
        medical_history: this.medical_history,
        radiation: this.radiation,
        last_oral_intake: this.last_oral_intake,
        event_leading_to_injury: this.event_leading_to_injury,
        severity: this.severity,
        time_taken: this.time_taken,
        time_a: this.time_a,
        time_b: this.time_b,
        time_c: this.time_c,
        time_d: this.time_d,
        time_e: this.time_e,
        bp_a: this.bp_a,
        bp_b: this.bp_b,
        bp_c: this.bp_c,
        bp_d: this.bp_d,
        bp_e: this.bp_e,
        pr_a: this.pr_a,
        pr_b: this.pr_b,
        pr_c: this.pr_c,
        pr_d: this.pr_d,
        pr_e: this.pr_e,
        rr_a: this.rr_a,
        rr_b: this.rr_b,
        rr_c: this.rr_c,
        rr_d: this.rr_d,
        rr_e: this.rr_e,
        tempt_a: this.tempt_a,
        tempt_b: this.tempt_b,
        tempt_c: this.tempt_c,
        tempt_d: this.tempt_d,
        tempt_e: this.tempt_e,
        spo2_a: this.spo2_a,
        spo2_b: this.spo2_b,
        spo2_c: this.spo2_c,
        spo2_d: this.spo2_d,
        spo2_e: this.spo2_e,
        left_pearl: this.left_pearl,
        left_dilated: this.left_dilated,
        left_constrict: this.left_constrict,
        left_non_reactive: this.left_non_reactive,
        left_cataract: this.left_cataract,
        right_pearl: this.right_pearl,
        right_dilated: this.right_dilated,
        right_constrict: this.right_constrict,
        right_non_reactive: this.right_non_reactive,
        right_cataract: this.right_cataract,
        skin_color: this.skin_color,
        eyes: this.eyes,
        verbal: this.verbal,
        motor: this.motor,
        prenatal_checkup: this.prenatal_checkup,
        labor_pains: this.labor_pains,
        last_menstrual_period: this.last_menstrual_period,
        estimated_date_of_delivery: this.estimated_date_of_delivery,
        gravidity: this.gravidity,
        parity: this.parity,
        term_of_birth: this.term_of_birth,
        pre_term: this.pre_term,
        abortion: this.abortion,
        living: this.living,
        obs_remarks: this.obs_remarks,
        nasal: this.nasal,
        o2_mask: this.o2_mask,
        bvm: this.bvm,
        lpm: this.lpm,
        wound_care: this.wound_care,
        splinting_applied: this.splinting_applied,
        control_bleeding: this.control_bleeding,
        vital_sign_taken: this.vital_sign_taken,
        applied_cpr: this.applied_cpr,
        applied_aed: this.applied_aed,
        problems: this.problems,
        received_by: this.received_by,
        received_by_signature: this.$refs.received_by_signature.save(),
        medical_facility: this.medical_facility,
        medical_facility_signature:
          this.$refs.medical_facility_signature.save(),
        team_leader: this.team_leader,
        team_leader_signature: this.$refs.team_leader_signature.save(),
        gloves: this.gloves,
        mask: this.mask,
        gauze: this.gauze,
        others: this.others,
        anterior_head_injury: this.anterior_head_injury,
        anterior_chest_injury: this.anterior_chest_injury,
        anterior_pelvis_injury: this.anterior_pelvis_injury,
        anterior_left_arm_injury: this.anterior_left_arm_injury,
        anterior_right_arm_injury: this.anterior_right_arm_injury,
        anterior_left_leg_injury: this.anterior_left_leg_injury,
        anterior_right_leg_injury: this.anterior_right_leg_injury,
        anterior_genitalia_injury: this.anterior_genitalia_injury,
        posterior_head_injury: this.posterior_head_injury,
        posterior_chest_injury: this.posterior_chest_injury,
        posterior_pelvis_injury: this.posterior_pelvis_injury,
        posterior_left_arm_injury: this.posterior_left_arm_injury,
        posterior_right_arm_injury: this.posterior_right_arm_injury,
        posterior_left_leg_injury: this.posterior_left_leg_injury,
        posterior_right_leg_injury: this.posterior_right_leg_injury,
        anterior_head_degree: this.anterior_head_degree,
        anterior_chest_degree: this.anterior_chest_degree,
        anterior_pelvis_degree: this.anterior_pelvis_degree,
        anterior_left_arm_degree: this.anterior_left_arm_degree,
        anterior_right_arm_degree: this.anterior_right_arm_degree,
        anterior_left_leg_degree: this.anterior_left_leg_degree,
        anterior_right_leg_degree: this.anterior_right_leg_degree,
        anterior_genitalia_degree: this.anterior_genitalia_degree,
        posterior_head_degree: this.posterior_head_degree,
        posterior_chest_degree: this.posterior_chest_degree,
        posterior_pelvis_degree: this.posterior_pelvis_degree,
        posterior_left_arm_degree: this.posterior_left_arm_degree,
        posterior_right_arm_degree: this.posterior_right_arm_degree,
        posterior_left_leg_degree: this.posterior_left_leg_degree,
        posterior_right_leg_degree: this.posterior_right_leg_degree,
      };

      this.$axios.post("pcr/emr/register", params).then(() => {
        this.dispatch_date = "";
        this.category = "";
        this.call_source = "";
        this.call_receive = "";
        this.incident_location = "";
        this.responded = "";
        this.t_o = "";
        this.va_location = "";
        this.va_location_barangay = "";
        this.arrive_at_scene = "";
        this.t_l = "";
        this.involved_vehicles_a = "";
        this.involved_vehicles_b = "";
        this.en_route_to = "";
        this.tx_o = "";
        this.plate_number = "";
        this.arrived_at = "";
        this.l_o = "";
        this.driver = "";
        this.pedestrian = "";
        this.passenger = "";
        this.departed = "";
        this.station = "";
        this.ems_location_a = "tor";
        this.ambulance = "";
        this.team_id = "";
        this.mt_from = "";
        this.mt_barangay = "";
        this.ems_location_b = "";
        this.barangay_b = "";
        this.priority = "";
        this.cp_age = "";
        this.remarks = "";
        this.suffix = "";
        this.first_name = "";
        this.middle_name = "";
        this.surname = "";
        this.gender = "";
        this.birthdate = "";
        this.age = "";
        this.status = "";
        this.religion = "";
        this.companion = "";
        this.phone = "";
        this.pnt_city = "City";
        this.pnt_brgy = "";
        this.pnt_st = "";
        this.complaint = "";
        this.onset = "";
        this.allergies = "";
        this.provocation = "";
        this.medication = "";
        this.quality = "";
        this.medical_history = "";
        this.radiation = "";
        this.last_oral_intake = "";
        this.event_leading_to_injury = "";
        this.severity = "";
        this.time_a = "";
        this.time_b = "";
        this.time_c = "";
        this.time_d = "";
        this.time_e = "";
        this.bp_a = "";
        this.bp_b = "";
        this.bp_c = "";
        this.bp_d = "";
        this.bp_e = "";
        this.pr_a = "";
        this.pr_b = "";
        this.pr_c = "";
        this.pr_d = "";
        this.pr_e = "";
        this.rr_a = "";
        this.rr_b = "";
        this.rr_c = "";
        this.rr_d = "";
        this.rr_e = "";
        this.tempt_a = "";
        this.tempt_b = "";
        this.tempt_c = "";
        this.tempt_d = "";
        this.tempt_e = "";
        this.spo2_a = "";
        this.spo2_b = "";
        this.spo2_c = "";
        this.spo2_d = "";
        this.spo2_e = "";
        this.left_pearl = "";
        this.left_dilated = "";
        this.left_constrict = "";
        this.left_non_reactive = "";
        this.left_cataract = "";
        this.right_pearl = "";
        this.right_dilated = "";
        this.right_constrict = "";
        this.right_non_reactive = "";
        this.right_cataract = "";
        this.skin_color = "";
        this.eyes = "";
        this.verbal = "";
        this.motor = "";
        this.prenatal_checkup = "";
        this.labor_pains = "";
        this.last_menstrual_period = "";
        this.estimated_date_of_delivery = "";
        this.gravidity = "";
        this.parity = "";
        this.term_of_birth = "";
        this.pre_term = "";
        this.abortion = "";
        this.living = "";
        this.obs_remarks = "";
        this.nasal = "";
        this.o2_mask = "";
        this.bvm = "";
        this.lpm = "";
        this.wound_care = "";
        this.splinting_applied = "";
        this.control_bleeding = "";
        this.vital_sign_taken = "";
        this.applied_cpr = "";
        this.applied_aed = "";
        this.problems = "";
        this.received_by = "";
        this.received_by_signature = "";
        this.medical_facility = "";
        this.medical_facility_signature = "";
        this.team_leader = "";
        this.team_leader_signature = "";
        this.gloves = "";
        this.mask = "";
        this.gauze = "";
        this.others = "";
        this.anterior_head_injury = [];
        this.anterior_chest_injury = [];
        this.anterior_pelvis_injury = [];
        this.anterior_left_arm_injury = [];
        this.anterior_right_arm_injury = [];
        this.anterior_left_leg_injury = [];
        this.anterior_right_leg_injury = [];
        this.anterior_genitalia_injury = [];
        this.posterior_head_injury = [];
        this.posterior_chest_injury = [];
        this.posterior_pelvis_injury = [];
        this.posterior_left_arm_injury = [];
        this.posterior_right_arm_injury = [];
        this.posterior_left_leg_injury = [];
        this.posterior_right_leg_injury = [];
        this.anterior_head_degree = "";
        this.anterior_chest_degree = "";
        this.anterior_pelvis_degree = "";
        this.anterior_left_arm_degree = "";
        this.anterior_right_arm_degree = "";
        this.anterior_left_leg_degree = "";
        this.anterior_right_leg_degree = "";
        this.anterior_genitalia_degree = "";
        this.posterior_head_degree = "";
        this.posterior_chest_degree = "";
        this.posterior_pelvis_degree = "";
        this.posterior_left_arm_degree = "";
        this.posterior_right_arm_degree = "";
        this.posterior_left_leg_degree = "";
        this.posterior_right_leg_degree = "";
        location.reload();
      });
    },
  },
};
</script>

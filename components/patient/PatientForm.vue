<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-10 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="patientForm"
    tabindex="-1"
    aria-labelledby="exampleModalXlLabel"
    aria-modal="true"
    role="dialog"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px] z-1"
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
          >
            Dispatch Data
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
              <div class="relative mb-1" data-te-input-wrapper-init>
                <input
                  v-model="dispatch_date"
                  type="date"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="date"
                  aria-describedby="emailHelp123"
                  placeholder="First name"
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
                class="relative mb-1"
                data-te-timepicker-init
                data-te-input-wrapper-init
                @click.stop="setCallReceived"
              >
                <input
                  v-model="call_receive"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="callReceive"
                  aria-describedby="callReceive"
                  placeholder="Call Received"
                />
                <label
                  for="callReceive"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                >
                  Call Received
                </label>
              </div>

              <div class="relative mb-1" data-te-input-wrapper-init>
                <input
                  v-model="barangay"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="barangay"
                  aria-describedby="barangay"
                  placeholder="Barangay"
                />
                <label
                  for="barangay"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Barangay
                </label>
              </div>

              <div class="relative mb-1 col-span-2" data-te-input-wrapper-init>
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
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
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

              <div class="relative mb-1" data-te-input-wrapper-init>
                <input
                  v-model="va_location"
                  type="text"
                  :class="`peer block min-h-[auto] w-full rounded border-0 ${ems_location_a !== 'va' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
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
                  :class="`peer block min-h-[auto] w-full rounded border-0 ${ems_location_a !== 'va' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
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
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
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
                class="relative mb-1 flex flex-wrap items-stretch col-span-2"
              >
                <input
                  v-model="involved_vehicles_a"
                  type="text"
                  :class="`relative m-0 block w-1/4 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 ${ems_location_a !== 'va' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary`"
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
                  :class="`relative m-0 block w-1/4 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 ${ems_location_a !== 'va' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary`"
                  placeholder="Involved Vehicle(s)"
                  aria-label="involvedVehicles"
                  :disabled="ems_location_a !== 'va'"
                />
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
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
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

              <div class="relative mb-1" data-te-input-wrapper-init>
                <input
                  v-model="plate_number"
                  type="text"
                  :class="`peer block min-h-[auto] w-full rounded border-0 ${ems_location_a !== 'va' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
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

              <div />

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
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
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

              <div class="relative mb-1 col-span-2 flex">
                <label class="left-5 top-5 mb-0 font-bold"> Patient: </label>
                <div class="relative mb-1 col-span-2 flex ml-3 justify-left">
                  <div
                    class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]"
                  >
                    <input
                      v-model="driver"
                      :class="`${ems_location_a !== 'va' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]`"
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
                      :class="`${ems_location_a !== 'va' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]`"
                      type="radio"
                      id="pedestrian"
                      name="patientRadio"
                      value="driver"
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
                      :class="`${ems_location_a !== 'va' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]`"
                      type="radio"
                      id="passenger"
                      name="patientRadio"
                      value="driver"
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
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
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

              <div class="col-span-4 inline-flex">
                <div class="grid grid-cols-4 gap-x-1">
                  <select
                    v-model="ems_location_a"
                    data-te-select-init
                    class="bg-neutral-50 mb-1"
                    id="emsLocationA"
                    required
                  >
                    <option value="ems">EMS</option>
                    <option value="fire">FIRE</option>
                    <option value="sar">SAR</option>
                    <option value="va">V.A</option>
                    <option value="mt">M.T</option>
                  </select>

                  <div
                    class="relative mb-1 col-span-2"
                    data-te-input-wrapper-init
                  >
                    <input
                      v-model="ems_location_b"
                      type="text"
                      :class="`peer block min-h-[auto] w-full ${ems_location_a === 'va' || ems_location_a === 'mt' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
                      id="emsLocationB"
                      aria-describedby="emsLocationB"
                      placeholder="Location"
                      :disabled="ems_location_a === 'va' || ems_location_a === 'mt'"
                    />
                    <label
                      for="emsLocationB"
                      class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Location
                    </label>
                  </div>

                  <div
                    class="relative mb-1 col-span-1 mr-2"
                    data-te-input-wrapper-init
                  >
                    <input
                      v-model="barangay_b"
                      type="text"
                      :class="`peer block min-h-[auto] w-full rounded border-0 ${ems_location_a === 'va' || ems_location_a === 'mt' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`"
                      id="barangayB"
                      aria-describedby="barangayB"
                      placeholder="Barangay"
                      :disabled="ems_location_a === 'va' || ems_location_a === 'mt'"
                    />
                    <label
                      for="barangayB"
                      class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Barangay
                    </label>
                  </div>
                </div>

                <div class="grid grid-cols-4 space-x-2">
                  <div
                    class="relative mb-1 col-span-2"
                    data-te-input-wrapper-init
                  >
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
                    class="w-full bg-neutral-50 col-span-3"
                  >
                    <option selected value="1">Team</option>
                    <option
                      v-for="(item, index) in teams"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div
                class="relative mb-1 flex flex-wrap items-stretch col-span-2"
              >
                <input
                  v-model="mt_from"
                  type="text"
                  :class="`relative m-0 block w-1/4 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 ${ems_location_a !== 'mt' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary`"
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
                  :class="`relative m-0 block text-right w-1/4 min-w-0 flex-auto rounded-r border border-solid border-neutral-300 ${ems_location_a !== 'mt' ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent' } bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary`"
                  placeholder="Barangay"
                  aria-label="barangay"
                  :disabled="ems_location_a !== 'mt'"
                />
              </div>

              <div
                class="relative mb-1 col-span-2 row-span-2"
                data-te-input-wrapper-init
              >
                <textarea
                  v-model="remarks"
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

              <div class="relative mb-1 col-span-2">
                <label class="left-5 top-5 mb-0 font-bold">
                  MCI/ Transport Priority
                </label>
                <div class="grid grid-cols-2 justify-center">
                  <div class="grid-cols-2 ml-9 mt-4">
                    <input
                      v-model="red"
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

                  <div class="grid-cols-2 ml-9 mt-4">
                    <input
                      v-model="yellow"
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

                  <div class="grid-cols-2 ml-9 mt-4">
                    <input
                      v-model="green"
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

                  <div class="grid-cols-2 ml-9 mt-4">
                    <input
                      v-model="black"
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
              <div />
              <div />

              <div class="relative mb-3">
                <label>
                  EMR
                </label>
                <select
                  v-model="assignedEmr"
                  data-te-select-init
                  id="assignedEmr"
                  class="bg-neutral-50 mb-1"
                  required
                >
                  <option
                    v-for="(item, index) in emrs"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>

              <!-- <vue-good-table :columns="filterColumns"> </vue-good-table> -->
            </div>
          </form>
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
        >
          <button
            @click="clear"
            type="button"
            class="ml-1 inline-block rounded border border-slate-400 bg-slate-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-dark-1 transition duration-150 ease-in-out hover:bg-slate-300 hover:border-slate-400 hover:bg-slate-300 focus:bg-slate-300 focus:shadow-[0_4px_9px_-4px_#3b71ca] focus:ring-0 active:bg-slate-300"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Clear
          </button>
          <button
            @click="register"
            type="button"
            class="ml-1 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-700]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal, initTE, Ripple, Input, Select, Timepicker, Stepper, Datepicker} from "tw-elements";

export default {
  data() {
    return {
      teams: [],
      emrs: [],
      dispatch_date: "",
      category: "dispatch data",
      call_source: "",
      call_receive: "",
      barangay: "",
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
      ems_location_a: "ems",
      ambulance: "",
      team_id: "1",
      mt_from: "",
      mt_barangay: "",
      ems_location_b: "",
      barangay_b: "",
      priority: "",
      remarks: "",
      red: "",
      yellow: "",
      green: "",
      black: "",
      assignedEmr: "",
    };
  },

  fetch() {
    this.$axios.get("team/list").then((response) => {
      response.data.return.map((team) =>
        this.teams.push({ id: team.id, name: this.capitalize(team.name) })
      );
    });
    this.$axios.get("user/list" + "?role=emr").then((response) => {
      response.data.return.map((emr) =>
        this.emrs.push({ id: emr.id, name: `${emr.first_name !== null ? emr.first_name : ''} ${emr.middle_name !== null ? emr.middle_name : '' } ${emr.last_name !== null ? emr.last_name : ''}`})
      );
    });
  },
  mounted() {
    initTE({ Ripple, Modal, Input, Stepper, Datepicker, Select, Timepicker });

    // Function to update the date field
    function updateDateField() {
      this.dispatch_date = new Date().toISOString().split('T')[0];
    }

    // Initial call to set the date on component mount
    updateDateField.call(this);

    // Schedule the update to occur once per day (24 hours)
    setInterval(updateDateField.bind(this), 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  },
  methods: {
    setCallReceived(){
      const currentDate = new Date();
      this.call_receive = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
      console.log(this.call_receive);
    },
    setResponded(){
      const currentDate = new Date();
      this.responded = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    setArrivedScene(){
      const currentDate = new Date();
      this.arrive_at_scene = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    setArrivedAt(){
      const currentDate = new Date();
      this.arrived_at = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    setEnRoute(){
      const currentDate = new Date();
      this.en_route_to = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    setDeparted(){
      const currentDate = new Date();
      this.departed = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    setTimeA(){
      const currentDate = new Date();
      this.time_a = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    setTimeB(){
      const currentDate = new Date();
      this.time_b = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    setTimeC(){
      const currentDate = new Date();
      this.time_c = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    setTimeD(){
      const currentDate = new Date();
      this.time_d = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    setTimeE(){
      const currentDate = new Date();
      this.time_e = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
      });
    },
    capitalize(word) {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    },
    clear() {
      this.dispatch_date = "";
      this.category = "";
      this.call_source = "";
      this.call_receive = "";
      this.barangay = "";
      this.incident_location = "";
      this.responded = "";
      this.t_o = "";
      this.va_location = "";
      this.location = "";
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
      this.ems_location_a = "ems";
      this.ambulance = "";
      this.team_id = "";
      this.mt_from = "";
      this.mt_barangay = "";
      this.ems_location_b = "";
      this.barangay_b = "";
      this.priority = "";
      this.remarks = "";
      this.assignedEmr = "";
    },

    register() {
      const params = {
        dispatch_date: this.dispatch_date,
        category: "dispatch data",
        call_source: this.call_source,
        call_receive: this.call_receive,
        barangay: this.barangay,
        incident_location: this.incident_location,
        location: this.location,
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
        barangay_b: this.barangay_b,
        ambulance: this.ambulance,
        team_id: this.team_id,
        mt_from: this.mt_from,
        mt_barangay: this.mt_barangay,
        remarks: this.remarks,
        red: this.red,
        yellow: this.yellow,
        green: this.green,
        black: this.black,
        assignedEmr: this.assignedEmr,
      };

      this.$axios.post("pcr/register", params).then(() => {
        this.dispatch_date = "";
        this.category = "dispatch data";
        this.call_source = "";
        this.call_receive = "";
        this.barangay = "";
        this.incident_location = "";
        this.responded = "";
        this.t_o = "";
        this.va_location = "";
        this.location = "";
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
        this.ems_location_a = "ems";
        this.ambulance = "";
        this.team_id = "1";
        this.mt_from = "";
        this.mt_barangay = "";
        this.ems_location_b = "";
        this.barangay_b = "";
        this.priority = "";
        this.remarks = "";
        this.assignedEmr = "";
        location.reload();
      });
    },
  },
};
</script>

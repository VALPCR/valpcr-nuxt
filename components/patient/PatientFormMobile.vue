<template>
  <div
    data-te-modal-init
    data-te-backdrop="static"
    data-te-keyboard="false"
    class="fixed left-0 top-20 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="patientFormMobile"
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
        class="pointer-events-auto relative flex flex-wrap space-x-4 p-4 w-full overflow-x-auto flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
      >
        <!-- Start of Dispatch Data -->
        <div class="flex justify-between mx-4 mt-4">
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
            id="exampleModalXlLabel"
          >
            Dispatch Data Mobile
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
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

        <div class="mx-4">

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
  Input,
  Stepper,
  Datepicker,
  Select,
  Timepicker,
} from "tw-elements";

export default {
  mounted() {
    initTE({ Ripple, Modal, Input, Datepicker, Select, Timepicker });

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
      pnt_zip: "",
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
    setTimePatient(){
      this.time_taken = this.formattedDateTime();
    },
    capitalize(word) {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    },
    clear() {
      this.category = "";
      this.call_source = "";
      this.call_receive = "";
      this.barangay = "";
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
      this.ems_location_a = "ems";
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
      this.pnt_zip = "";
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
        barangay: this.barangay,
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
        pnt_zip: this.pnt_zip,
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
        this.barangay = "";
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
        this.ems_location_a = "ems";
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
        this.pnt_zip = "";
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

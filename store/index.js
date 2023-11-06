export const state = () => ({
  isSidebarOpen: true,
  addPatientStepperForm: false,
  editPatientStepperForm: false,
  editPatientStepperFormFields: [],
  editPatientStepperFormArg: undefined,
  editEmrModalXl: false,
  editEmrModalXlFields: [],
  editEmrModalXlArg: undefined,
  editDispatcherModalXl: false,
  editDispatcherModalXlFields: [],
  editDispatcherModalXlArg: undefined,
});

export const getters = {
  getSideBarState(state) {
    return state.isSidebarOpen;
  },
  getAddPatientStepperForm(state) {
    return state.addPatientStepperForm;
  },
  getEditPatientStepperForm(state) {
    return state.editPatientStepperForm;
  },
  getEditPatientStepperFormFields(state) {
    return state.editPatientStepperFormFields;
  },
  getEditPatientStepperFormArg(state) {
    return state.editPatientStepperFormArg;
  },
  getEditEmrModalXlArg(state) {
    return state.editEmrModalXlArg;
  },
  getEditEmrModalXlFields(state) {
    return state.editEmrModalXlFields;
  },
  getEditDispatcherModalXlArg(state) {
    return state.editDispatcherModalXlArg;
  },
  getEditDispatcherModalXlFields(state) {
    return state.editDispatcherModalXlFields;
  },
};

export const mutations = {
  setSideBarState(state, value) {
    state.isSidebarOpen = value;
  },
  setAddPatientStepperForm(state, value) {
    state.addPatientStepperForm = value;
  },
  setEditPatientStepperForm(state, value) {
    state.editPatientStepperForm = value;
  },
  setEditPatientStepperFormFields(state, value) {
    state.editPatientStepperFormFields = value;
  },
  setEditPatientStepperFormArg(state, value) {
    state.editPatientStepperFormArg = value;
  },
  setEditEmrModalXl(state, value) {
    state.editEmrModalXl = value;
  },
  setEditEmrModalXlFields(state, value) {
    state.editEmrModalXlFields = value;
  },
  setEditEmrModalXlArg(state, value) {
    state.editEmrModalXlArg = value;
  },
  setEditDispatcherModalXl(state, value) {
    state.editDispatcherModalXl = value;
  },
  setEditDispatcherModalXlFields(state, value) {
    state.editDispatcherModalXlFields = value;
  },
  setEditDispatcherModalXlArg(state, value) {
    state.editDispatcherModalXlArg = value;
  },
};

export const actions = {
  getSinglePcr(context, params) {
    return this.$axios
      .get("pcr/single?id=" + params.id + "&emrId=" + params.emrId +  "&viewableByAllEmrs=" + params.viewableByAllEmrs)
      .then((response) => {
        const pcr = response.data.return;
        context.commit("setEditPatientStepperFormFields", pcr);
      });
  },
  getSingleEmr(context, params) {
    return this.$axios.get("user/single?id=" + params.id).then((response) => {
      const user = response.data.return;
      context.commit("setEditEmrModalXlFields", user);
    });
  },
  getSingleDispatcher(context, params) {
    return this.$axios.get("user/single?id=" + params.id).then((response) => {
      const user = response.data.return;
      context.commit("setEditDispatcherModalXlFields", user);
    });
  },
};

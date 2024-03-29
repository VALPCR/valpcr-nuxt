export const state = () => ({
  isSidebarOpen: true,
  addPatientStepperForm: false,
  editPatientStepperForm: false,
  editPatientStepperFormFields: [],
  editPatientStepperFormArg: undefined,
  editEmrModalXl: false,
  editEmrModalXlFields: [],
  editEmrModalXlArg: undefined,
  editHeadModal: false,
  editHeadModalFields: [],
  editHeadModalArg: undefined,
  editDispatcherModalXl: false,
  editDispatcherModalXlFields: [],
  editDispatcherModalXlArg: undefined,
  newlyCreatedPcr: [],
  pcrId: '',
  toastMessage: '',
});

export const getters = {
  getToastMessage(state) {
    return state.toastMessage;
  },
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
  getEditHeadModalArg(state) {
    return state.editHeadModalArg;
  },
  getEditHeadModalFields(state) {
    return state.editHeadModalFields;
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
  getNewlyCreatedPcr(state) {
    return state.newlyCreatedPcr;
  },
  getPcrId(state) {
    return state.pcrId;
  },
};

export const mutations = {
  setToastMessage(state, value) {
    state.toastMessage = value;
  },
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
  setEditHeadModal(state, value) {
    state.editHeadModal = value;
  },
  setEditHeadModalArg(state, value) {
    state.editHeadModalArg = value;
  },
  setEditHeadModalFields(state, value) {
    state.editHeadModalFields = value;
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
  setNewlyCreatedPcr(state, value) {
    state.newlyCreatedPcr = value;
  },
  setPcrId(state, value) {
    state.pcrId = value;
  },
};

export const actions = {
  getSinglePcr(context, params) {
    return this.$axios
      .get(
        "pcr/single?id=" +
          params.id +
          "&emrId=" +
          params.emrId +
          "&viewableByAllEmrs=" +
          params.viewableByAllEmrs
      )
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
  getSingleHead(context, params) {
    return this.$axios.get("user/single?id=" + params.id).then((response) => {
      const user = response.data.return;
      context.commit("setEditHeadModalFields", user);
    });
  },
};

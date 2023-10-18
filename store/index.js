export const state = () => ({
  addPatientStepperForm: false,
  editPatientStepperForm: false,
  editPatientStepperFormFields: [],
  editPatientStepperFormArg: undefined,
  editEmrModalXl: false,
  editEmrModalXlFields: [],
  editEmrModalXlArg: undefined,
})


export const getters = {
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
};

export const mutations = {
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
  }
}

export const actions = {
  getSinglePcr(context, params) {
    return this.$axios
      .get('pcr/single?id=' + params.id + '&emrId=' + params.emrId)
      .then((response) => {
        const pcr = response.data.return;
          context.commit('setEditPatientStepperFormFields', pcr)
      })
  },
  getSingleUser(context, params) {
    return this.$axios
      .get('user/single?id=' + params.id)
      .then((response) => {
        const user = response.data.return;
        context.commit('setEditEmrModalXlFields', user)
      })
  }
}

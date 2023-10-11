export const state = () => ({
  addPatientStepperForm: false,
  editPatientStepperForm: false,
  editPatientStepperFormFields: [],
  editPatientStepperFormArg: undefined,
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
  }
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
  }
}

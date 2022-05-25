const state = () => ({
  message: null,
})

const mutations = {
  VALIDATION_MESSAGE(state, payload) {
    state.message = payload;
  }
}
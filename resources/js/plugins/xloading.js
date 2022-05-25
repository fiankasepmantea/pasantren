export default({ store } ,inject) => {
  inject('processLoading', {
    SET_LOADING ({ isLoading = true }) {
      store.commit('loading/SET_LOADING', { loadingMessage: loadingMessage, isLoading: isLoading })
    },

    SHOW({  }) {
      store.commit('loading/SET_LOADING', { loadingMessage: loadingMessage, isLoading: true })
    },

    HIDE({  }) {
      store.commit('loading/SET_LOADING', { loadingMessage: loadingMessage, isLoading: false })
    },
  })
}
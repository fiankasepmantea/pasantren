import { reject } from 'lodash'
import $axios from '../api.js'

const state = () => ({
  banks:{ 
    data : [] 
  },
  bank: {
    id: '',
    nama: '',
    no_rekening: '',
  },
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.banks = payload
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  ASSIGN_FORM(state, payload) {
    state.bank = {
      no_rekening: payload.no_rekening,
      nama: payload.nama,
    }
  },
  CLEAR_FORM(state) {
    state.bank = {
      id: '',
      nama: '',
      no_rekening: '',
    }
  },
}

const actions = {
  getBanks({ commit, state }, payload) {
    let search = typeof payload != 'undefined' ? payload: ''
    return new Promise((resolve, reject) => {
      $axios.get('/bank', {

      })
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  },
  submitBank({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      $axios.post(`/bank`, state.bank)
      .then((response) => {
        dispatch('getBanks').then(() => {
          resolve(response.data)
        })
      })
      .catch((error) => {
        if (error.response.status == 422) {
          commit('SET_ERRORS', error.response.data.error, { root: true })
        }
      })
    })
  },
  editBank({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`/bank/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.data)
        resolve(response.data)
      })
    })
  },
  updateBank({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.put(`/bank/${payload}`, state.bank)
      .then((response) => {
        commit('CLEAR_FORM')
        resolve(response.data)
      })
    })
  },
  removeBank({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      $axios.delete(`/bank/${payload}`)
      .then((response) => {
        dispatch('getBanks').then(() => resolve())
      })
    })
  },
}

export default { 
  namespaced: true,
  state,
  actions,
  mutations
}
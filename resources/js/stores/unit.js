import { reject } from 'lodash'
import $axios from '../api.js'

const state = () => ({
  units:{ 
    data : [] 
  },
  unit: {
    id: '',
    nama: '',
    keterangan: '',
  },
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.units = payload
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  ASSIGN_FORM(state, payload) {
    state.unit = {
      nama: payload.nama,
      keterangan: payload.keterangan,
    }
  },
  CLEAR_FORM(state) {
    state.unit = {
      id: '',
      nama: '',
      keterangan: '',
    }
  },
}

const actions = {
  getUnits({ commit, state }, payload) {
    let search = typeof payload != 'undefined' ? payload: ''
    return new Promise((resolve, reject) => {
      $axios.get('/unit', {

      })
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  },
  submitUnit({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      $axios.post(`/unit`, state.unit)
      .then((response) => {
        dispatch('getUnits').then(() => {
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
  editUnit({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`/unit/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.data)
        resolve(response.data)
      })
    })
  },
  updateUnit({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.put(`/unit/${payload}`, state.unit)
      .then((response) => {
        commit('CLEAR_FORM')
        resolve(response.data)
      })
    })
  },
  removeUnit({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      $axios.delete(`/unit/${payload}`)
      .then((response) => {
        dispatch('getUnits').then(() => resolve())
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
import { reject } from 'lodash'
import $axios from '../api.js'

const state = () => ({
  groups:{ 
    data : [] 
  },
  group: {
    id: '',
    nama: '',
    muhaffizh_id: '',
  },
  group_muhaffizh: [],
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.groups = payload
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  ASSIGN_FORM(state, payload) {
    state.group = {
      nama: payload.nama,
      muhaffizh_id: payload.muhaffizh_id,
    }
  },
  CLEAR_FORM(state) {
    state.group = {
      id: '',
      nama: '',
      muhaffizh_id: '',
    }
  },

  ASSIGN_MUHAFFIZH(state, payload) {
    state.group_muhaffizh = payload
  },
  APPEND_MUHAFFIZH(state, payload){
    state.group_muhaffizh.push(payload)
  },
  CLEAR_MUHAFFIZH(state) {
    state.group_muhaffizh = [];
  },
}

const actions = {
  getGroups({ commit, state }, payload) {
    let listParams = {}

    if (payload) {
        listParams = payload
    } 
    return new Promise((resolve, reject) => {
      $axios.get('/group', {
        params: listParams
      })
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  },
  submitGroup({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      $axios.post(`/group`, state.group)
      .then((response) => {
        dispatch('getGroups').then(() => {
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
  editGroup({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`/group/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.data)
        resolve(response.data)
      })
    })
  },
  updateGroup({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.put(`/group/${payload}`, state.group)
      .then((response) => {
        commit('CLEAR_FORM')
        resolve(response.data)
      })
    })
  },
  removeGroup({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      $axios.delete(`/group/${payload}`)
      .then((response) => {
        dispatch('getGroups').then(() => resolve())
      })
    })
  },
  getMuhaffizh({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/group/groupmuhaffizh`)
        .then((response) => {
            commit('CLEAR_MUHAFFIZH') 
            response.data.data.forEach(item=>{
              commit('APPEND_MUHAFFIZH', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
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
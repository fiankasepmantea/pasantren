import { reject } from 'lodash'
import $axios from '../api.js'

const state = () => ({
  users: {
    data: []
  },
  user: {
    id: '',
    name:'',
    departement_id: '',
    level_id: '',
    username: '',
    password: '',
    nik: '',
  },
  departement_name: [],
  user_level: [],
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.users = payload
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  ASSIGN_FORM(state, payload) {
    state.user = {
      name: payload.name,
      departement_id: payload.departement_id,
      level_id: payload.level_id,
      password: payload.password,
      username: payload.username,
      nik: payload.nik,
    }
  },
  CLEAR_FORM(state) {
    state.user = {
      id: '',
      name:'',
      departement_id: '',
      level_id: '',
      username: '',
      password: '',
      nik: '',
    }
  },
  ASSIGN_DEPARTEMENT_NAME(state, payload) {
        state.departement_name = payload
  },
  ASSIGN_LEVEL(state, payload) {
        state.user_level = payload
  },
  APPEND_DEPARTEMENT(state, payload){
        state.departement_name.push(payload)
  },
  APPEND_LEVEL(state, payload){
        state.user_level.push(payload)
  },
  CLEAR_DEPARTEMENT(state) {
    state.departement_name = [];
  },
  CLEAR_LEVEL(state) {
    state.user_level = [];
  },

}

const actions = {
  getUsers({ commit, state }, payload) {
    let search = typeof payload != 'undefined' ? payload: ''
    return new Promise((resolve, reject) => {
      $axios.get('/user', {

      })
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  },
  submitUser({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      $axios.post(`/user`, state.user)
      .then((response) => {
        dispatch('getUsers').then(() => {
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
  editUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`/user/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.data)
        resolve(response.data)
      })
    })
  },
  updateUser({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.put(`/user/${payload}`, state.user)
      .then((response) => {
        commit('CLEAR_FORM')
        resolve(response.data)
      })
    })
  },
  removeUser({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      $axios.delete(`/user/${payload}`)
      .then((response) => {
        dispatch('getUsers').then(() => resolve())
      })
    })
  },
  getDepartementName({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/user/departement_name`)
        .then((response) => {
            commit('CLEAR_DEPARTEMENT') 
            response.data.data.forEach(item=>{
              commit('APPEND_DEPARTEMENT', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
        })
    })
  },
  getLevel({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/user/user_level`)
        .then((response) => {
            commit('CLEAR_LEVEL') 
            response.data.data.forEach(item=>{
              commit('APPEND_LEVEL', {value:item.id, text:item.nama})              
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
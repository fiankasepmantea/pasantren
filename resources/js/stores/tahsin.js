import { reject } from 'lodash'
import $axios from '../api.js'

const state = () => ({
  tahsins: {
    data: []
  },
  tahsin: {
    id: '',
    buku:'',
    halaman: '',
    sertifikat_proses: '',
    santri_id: '',
    muhaffizh_id: '',
    group_id: '',
  },
  tahsin_unit: [],
  tahsin_group: [],
  tahsin_muhaffizh: [],
  tahsin_santri: [],
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.tahsins = payload
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  ASSIGN_FORM(state, payload) {
    state.tahsin = {
      buku: payload.buku,
      halaman: payload.halaman,
      sertifikat_proses: payload.sertifikat_proses,
      muhaffizh_id: payload.muhaffizh_id,
      santri_id: payload.santri_id,
      group_id: payload.group_id,
    }
  },
  CLEAR_FORM(state) {
    state.tahsin = {
      id: '',
      buku: '',
      halaman: '',
      sertifikat_proses: '',
      muhaffizh_id: '',
      santri_id: '',
      group_id: '',
    }
  },
  ASSIGN_MUHAFFIZH(state, payload) {
    state.tahsin_muhaffizh = payload
  },
  APPEND_MUHAFFIZH(state, payload){
    state.tahsin_muhaffizh.push(payload)
  },
  CLEAR_MUHAFFIZH(state) {
    state.tahsin_muhaffizh = [];
  },

  ASSIGN_SANTRI(state, payload) {
    state.tahsin_santri = payload
  },
  APPEND_SANTRI(state, payload){
    state.tahsin_santri.push(payload)
  },
  CLEAR_SANTRI(state) {
    state.tahsin_santri = [];
  },

  ASSIGN_UNIT(state, payload) {
    state.tahsin_unit = payload
  },
  APPEND_UNIT(state, payload){
    state.tahsin_unit.push(payload)
  },
  CLEAR_UNIT(state) {
    state.tahsin_unit = [];
  },

  ASSIGN_GROUP(state, payload) {
    state.tahsin_group = payload
  },
  APPEND_GROUP(state, payload){
    state.tahsin_group.push(payload)
  },
  CLEAR_GROUP(state) {
    state.tahsin_group = [];
  },
}

const actions = {
  getTahsins({ commit, state }, payload) {
    let search = typeof payload != 'undefined' ? payload: ''
    return new Promise((resolve, reject) => {
      $axios.get('/tahsin', {

      })
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  },
  submitTahsin({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      $axios.post(`/tahsin`, state.tahsin)
      .then((response) => {
        dispatch('getTahsins').then(() => {
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
  editTahsin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`/tahsin/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.data)
        resolve(response.data)
      })
    })
  },
  updateTahsin({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.put(`/tahsin/${payload}`, state.tahsin)
      .then((response) => {
        commit('CLEAR_FORM')
        resolve(response.data)
      })
    })
  },
  removeTahsin({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      $axios.delete(`/tahsin/${payload}`)
      .then((response) => {
        dispatch('getTahsins').then(() => resolve())
      })
    })
  },
  getGroup({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/tahsin/tahsingroup`)
        .then((response) => {
            commit('CLEAR_GROUP') 
            response.data.data.forEach(item=>{
              commit('APPEND_GROUP', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
        })
    })
  },
  getMuhaffizh({ commit }, payload=null) {
    return new Promise((resolve, reject) => {
        if(payload){
            $axios.get(`/tahsin/tahsinmuhaffizh`,{
              params: {
                group_id : payload,
              }
            
            })
            .then((response) => { 
            commit('CLEAR_MUHAFFIZH') 
            response.data.data.forEach(item=>{
              commit('APPEND_MUHAFFIZH', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
          })
        }else{
          $axios.get(`/tahsin/tahsinmuhaffizh`)
          .then((response) => {
              commit('CLEAR_MUHAFFIZH') 
              response.data.data.forEach(item=>{
                commit('APPEND_MUHAFFIZH', {value:item.id, text:item.nama})              
              });
              resolve(response.data)
          })
        }
        
    })
  },
  getSantri({ commit }, payload=null) {
    return new Promise((resolve, reject) => {
        if(payload){
            $axios.get(`/tahsin/tahsinsantri`,{
              params: {
                group_id : payload,
              }
            })
            .then((response) => {
            commit('CLEAR_SANTRI') 
            response.data.data.forEach(item=>{
              commit('APPEND_SANTRI', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
          })
        }else{
          $axios.get(`/tahsin/tahsinsantri`)
          .then((response) => {
              commit('CLEAR_SANTRI') 
              response.data.data.forEach(item=>{
                commit('APPEND_SANTRI', {value:item.id, text:item.nama})              
              });
              resolve(response.data)
          })
        }
        
    })
  },
}

export default { 
  namespaced: true,
  state,
  actions,
  mutations
}
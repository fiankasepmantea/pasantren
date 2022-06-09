import { reject } from 'lodash'
import $axios from '../api.js'

const state = () => ({
  setorans: {
    data: []
  },
  setoran: {
    id: '',
    juz:'',
    halaman: '',
    baris: '',
    total_setoran: '',
    santri_id: '',
    muhaffizh_id: '',
    unit_id: '',
    group_id: '',
  },
  setoran_unit: [],
  setoran_group: [],
  setoran_muhaffizh: [],
  setoran_santri: [],
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.setorans = payload
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  ASSIGN_FORM(state, payload) {
    state.setoran = {
      juz: payload.juz,
      halaman: payload.halaman,
      baris: payload.baris,
      total_setoran: payload.total_setoran,
      muhaffizh_id: payload.muhaffizh_id,
      santri_id: payload.santri_id,
      unit_id: payload.unit_id,
      group_id: payload.group_id,
    }
  },
  CLEAR_FORM(state) {
    state.setoran = {
      id: '',
      juz: '',
      halaman: '',
      baris: '',
      total_setoran: '',
      muhaffizh_id: '',
      santri_id: '',
      unit_id: '',
      group_id: '',
    }
  },
  ASSIGN_MUHAFFIZH(state, payload) {
    state.setoran_muhaffizh = payload
  },
  APPEND_MUHAFFIZH(state, payload){
    state.setoran_muhaffizh.push(payload)
  },
  CLEAR_MUHAFFIZH(state) {
    state.setoran_muhaffizh = [];
  },

  ASSIGN_SANTRI(state, payload) {
    state.setoran_santri = payload
  },
  APPEND_SANTRI(state, payload){
    state.setoran_santri.push(payload)
  },
  CLEAR_SANTRI(state) {
    state.setoran_santri = [];
  },

  ASSIGN_UNIT(state, payload) {
    state.setoran_unit = payload
  },
  APPEND_UNIT(state, payload){
    state.setoran_unit.push(payload)
  },
  CLEAR_UNIT(state) {
    state.setoran_unit = [];
  },

  ASSIGN_GROUP(state, payload) {
    state.setoran_group = payload
  },
  APPEND_GROUP(state, payload){
    state.setoran_group.push(payload)
  },
  CLEAR_GROUP(state) {
    state.setoran_group = [];
  },
}

const actions = {
  getSetorans({ commit, state }, payload) {
    let search = typeof payload != 'undefined' ? payload: ''
    return new Promise((resolve, reject) => {
      $axios.get('/setoran', {

      })
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  },
  submitSetoran({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      $axios.post(`/setoran`, state.setoran)
      .then((response) => {
        dispatch('getSetorans').then(() => {
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
  editSetoran({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`/setoran/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.data)
        resolve(response.data)
      })
    })
  },
  updateSetoran({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.put(`/setoran/${payload}`, state.setoran)
      .then((response) => {
        commit('CLEAR_FORM')
        resolve(response.data)
      })
    })
  },
  removeSetoran({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      $axios.delete(`/setoran/${payload}`)
      .then((response) => {
        dispatch('getSetorans').then(() => resolve())
      })
    })
  },
  getUnit({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/setoran/setoranunit`)
        .then((response) => {
            commit('CLEAR_UNIT') 
            response.data.data.forEach(item=>{
              commit('APPEND_UNIT', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
        })
    })
  },
  getGroup({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/setoran/setorangroup`)
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
            $axios.get(`/setoran/setoranmuhaffizh`,{
              params: {
                group_id : payload,
              }
            
            })
            .then((response) => { console.log('response:',response);
            commit('CLEAR_MUHAFFIZH') 
            response.data.data.forEach(item=>{
              commit('APPEND_MUHAFFIZH', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
          })
        }else{
          $axios.get(`/setoran/setoranmuhaffizh`)
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
            $axios.get(`/setoran/setoransantri`,{
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
          $axios.get(`/setoran/setoransantri`)
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
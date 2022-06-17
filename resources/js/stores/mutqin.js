import { reject } from 'lodash'
import $axios from '../api.js'

const state = () => ({
  mutqins: {
    data: []
  },
  mutqin: {
    id: '',
    juz:'',
    halaman: '',
    baris: '',
    total_mutqin: '',
    santri_id: '',
    muhaffizh_id: '',
    group_id: '',
  },
  mutqin_group: [],
  mutqin_muhaffizh: [],
  mutqin_santri: [],
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.mutqins = payload
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  ASSIGN_FORM(state, payload) {
    state.mutqin = {
      juz: payload.juz,
      halaman: payload.halaman,
      baris: payload.baris,
      total_mutqin: payload.total_mutqin,
      muhaffizh_id: payload.muhaffizh_id,
      santri_id: payload.santri_id,
      group_id: payload.group_id,
    }
  },
  CLEAR_FORM(state) {
    state.mutqin = {
      id: '',
      juz: '',
      halaman: '',
      baris: '',
      total_mutqin: '',
      muhaffizh_id: '',
      santri_id: '',
      group_id: '',
    }
  },
  ASSIGN_MUHAFFIZH(state, payload) {
    state.mutqin_muhaffizh = payload
  },
  APPEND_MUHAFFIZH(state, payload){
    state.mutqin_muhaffizh.push(payload)
  },
  CLEAR_MUHAFFIZH(state) {
    state.mutqin_muhaffizh = [];
  },

  ASSIGN_SANTRI(state, payload) {
    state.mutqin_santri = payload
  },
  APPEND_SANTRI(state, payload){
    state.mutqin_santri.push(payload)
  },
  CLEAR_SANTRI(state) {
    state.mutqin_santri = [];
  },

  ASSIGN_GROUP(state, payload) {
    state.mutqin_group = payload
  },
  APPEND_GROUP(state, payload){
    state.mutqin_group.push(payload)
  },
  CLEAR_GROUP(state) {
    state.mutqin_group = [];
  },
}

const actions = {
  getMutqins({ commit, state }, payload =null) {
    let listParams = {}

    if (payload) {
        listParams = payload
    } 
  
    return new Promise((resolve, reject) => {
      $axios.get('/mutqin', {
        params: listParams
      })
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  },
  submitMutqin({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      $axios.post(`/mutqin`, state.mutqin)
      .then((response) => {
        dispatch('getMutqins').then(() => {
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
  editMutqin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`/mutqin/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.data)
        resolve(response.data)
      })
    })
  },
  updateMutqin({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.put(`/mutqin/${payload}`, state.mutqin)
      .then((response) => {
        commit('CLEAR_FORM')
        resolve(response.data)
      })
    })
  },
  removeMutqin({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      $axios.delete(`/mutqin/${payload}`)
      .then((response) => {
        dispatch('getMutqins').then(() => resolve())
      })
    })
  },
  getMuhaffizh({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/mutqin/mutqinmuhaffizh`)
        .then((response) => {
            commit('CLEAR_MUHAFFIZH') 
            response.data.data.forEach(item=>{
              commit('APPEND_MUHAFFIZH', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
        })
    })
  },
  getGroup({ commit }, payload=null) {
    return new Promise((resolve, reject) => {
        if(payload){
            $axios.get(`/mutqin/mutqingroup`,{
              params: {
                muhaffizh_id : payload,
              }
            
            })
            .then((response) => { 
            commit('CLEAR_GROUP') 
            response.data.data.forEach(item=>{
              commit('APPEND_GROUP', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
          })
        }else{
          $axios.get(`/mutqin/mutqingroup`)
          .then((response) => {
              commit('CLEAR_GROUP') 
              response.data.data.forEach(item=>{
                commit('APPEND_GROUP', {value:item.id, text:item.nama})              
              });
              resolve(response.data)
          })
        }
        
    })
  },
  getSantri({ commit }, payload=null) {
    return new Promise((resolve, reject) => {
        if(payload){
            $axios.get(`/mutqin/mutqinsantri`,{
              params: {
                group_id : payload,
              }
            })
            .then((response) => {console.log('res:',response);
            commit('CLEAR_SANTRI') 
            response.data.data.forEach(item=>{
              commit('APPEND_SANTRI', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
          })
        }else{
          $axios.get(`/mutqin/mutqinsantri`)
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
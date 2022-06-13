import { reject } from 'lodash'
import $axios from '../api.js'

const state = () => ({
  muhaffizhs: {
    data: []
  },
  muhaffizh: {
    id: '',
    nomor_induk:'',
    nama: '',
    alamat: '',
    tempat_lahir: '',
    tanggal_lahir:'',
    no_hp: '',
    pendidikan_terakhir:'',
    mulai_bertugas: '',
    angkatan_kelas: '',
    status: '',
    unit_id: '',
    group_id: '',
  },
  muhaffizh_unit: [],
  muhaffizh_group: [],
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.muhaffizhs = payload
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  ASSIGN_FORM(state, payload) {
    state.muhaffizh = {
      nomor_induk: payload.nomor_induk,
      nama: payload.nama,
      alamat: payload.alamat,
      tempat_lahir: payload.tempat_lahir,
      tanggal_lahir: payload.tanggal_lahir,
      no_hp: payload.no_hp,
      mulai_bertugas: payload.mulai_bertugas,
      angkatan_kelas: payload.angkatan_kelas,
      status: payload.status,
      pendidikan_terakhir: payload.pendidikan_terakhir,
      unit_id: payload.unit_id,
      group_id: payload.group_id,
    }
  },
  CLEAR_FORM(state) {
    state.muhaffizh = {
      id: '',
      nomor_induk: '',
      nama: '',
      alamat: '',
      tempat_lahir: '',
      tanggal_lahir: '',
      no_hp: '',
      mulai_bertugas: '',
      angkatan_kelas: '',
      status: '',
      pendidikan_terakhir: '',
      unit_id: '',
      group_id: '',
    }
  },
  ASSIGN_UNIT(state, payload) {
    state.muhaffizh_unit = payload
  },
  APPEND_UNIT(state, payload){
    state.muhaffizh_unit.push(payload)
  },
  CLEAR_UNIT(state) {
    state.muhaffizh_unit = [];
  },

  ASSIGN_GROUP(state, payload) {
    state.muhaffizh_group = payload
  },
  APPEND_GROUP(state, payload){
    state.muhaffizh_group.push(payload)
  },
  CLEAR_GROUP(state) {
    state.muhaffizh_group = [];
  },

}

const actions = {
  getMuhaffizhs({ commit, state }, payload) {
    let search = typeof payload != 'undefined' ? payload: ''
    return new Promise((resolve, reject) => {
      $axios.get('/muhaffizh', {

      })
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  },
  submitMuhaffizh({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      $axios.post(`/muhaffizh`, state.muhaffizh)
      .then((response) => {
        dispatch('getMuhaffizhs').then(() => {
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
  editMuhaffizh({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`/muhaffizh/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.data)
        resolve(response.data)
      })
    })
  },
  updateMuhaffizh({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.put(`/muhaffizh/${payload}`, state.muhaffizh)
      .then((response) => {
        commit('CLEAR_FORM')
        resolve(response.data)
      })
    })
  },
  removeMuhaffizh({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      $axios.delete(`/muhaffizh/${payload}`)
      .then((response) => {
        dispatch('getMuhaffizhs').then(() => resolve())
      })
    })
  },
  getUnit({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/muhaffizh/muhaffizhunit`)
        .then((response) => {
            commit('CLEAR_UNIT') 
            response.data.data.forEach(item=>{
              commit('APPEND_UNIT', {value:item.id, text:item.nama})              
            });
            resolve(response.data)
        })
    })
  },

  getGroup({ commit }, payload=null) {
    return new Promise((resolve, reject) => {
        if(payload){
            $axios.get(`/muhaffizh/muhaffizhgroup`,{
              params: {
                unit_id : payload,
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
          $axios.get(`/muhaffizh/muhaffizhgroup`)
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
}

export default { 
  namespaced: true,
  state,
  actions,
  mutations
}
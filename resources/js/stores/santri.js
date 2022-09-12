import { reject } from 'lodash'
import $axios from '../api.js'

const state = () => ({
  santris: {
    data: []
  },
  santri: {
    id: '',
    nomor_induk:'',
    nama: '',
    alamat: '',
    tempat_lahir: '',
    tanggal_lahir:'',
    gender: '',
    no_hp: '',
    nama_ibu:'',
    nama_ayah:'',
    mulai_belajar: '',
    angkatan_kelas: '',
    muhaffizh_id: '',
    group_id: '',
    grade_id: '',
    levelsantri_id: '',
    foto: '',
    file_foto: [],
  },
  santri_muhaffizh: [],
  santri_group: [],
  santri_grade: [],
  santri_level: [],
  santri_gender: ['Laki','Perempuan'],
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.santris = payload
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  ASSIGN_FORM(state, payload) {
    state.santri = {
      nomor_induk: payload.nomor_induk,
      nama: payload.nama,
      alamat: payload.alamat,
      tempat_lahir: payload.tempat_lahir,
      tanggal_lahir: payload.tanggal_lahir,
      gender: payload.gender,
      no_hp: payload.no_hp,
      mulai_belajar: payload.mulai_belajar,
      angkatan_kelas: payload.angkatan_kelas,
      nama_ibu: payload.nama_ibu,
      nama_ayah: payload.nama_ayah,
      muhaffizh_id: payload.muhaffizh_id,
      group_id: payload.group_id,
      grade_id: payload.grade_id,
      levelsantri_id: payload.levelsantri_id,
      foto: payload.foto,
      file_foto: [],
    }
  },
  CLEAR_FORM(state) {
    state.santri = {
      id: '',
      nomor_induk: '',
      nama: '',
      alamat: '',
      tempat_lahir: '',
      tanggal_lahir: '',
      gender: '',
      no_hp: '',
      mulai_belajar: '',
      angkatan_kelas: '',
      nama_ibu: '',
      nama_ayah: '',
      muhaffizh_id: '',
      group_id: '',
      grade_id: '',
      levelsantri_id: '',
      foto: '',
      file_foto: [],
    }
  },

  ASSIGN_GROUP(state, payload) {
    state.santri_group = payload
  },
  APPEND_GROUP(state, payload){
    state.santri_group.push(payload)
  },
  CLEAR_GROUP(state) {
    state.santri_group = [];
  },
  
  ASSIGN_MUHAFFIZH(state, payload) {
    state.santri_muhaffizh = payload
  },
  APPEND_MUHAFFIZH(state, payload){
    state.santri_muhaffizh.push(payload)
  },
  CLEAR_MUHAFFIZH(state) {
    state.santri_muhaffizh = [];
  },

  ASSIGN_GRADE(state, payload) {
    state.santri_grade = payload
  },
  APPEND_GRADE(state, payload){
    state.santri_grade.push(payload)
  },
  CLEAR_GRADE(state) {
    state.santri_grade = [];
  },

  ASSIGN_LEVEL(state, payload) {
    state.santri_level = payload
  },
  APPEND_LEVEL(state, payload){
    state.santri_level.push(payload)
  },
  CLEAR_LEVEL(state) {
    state.santri_level = [];
  },

}

const actions = {
  getSantris({ commit, state }, payload) {
    let search = typeof payload != 'undefined' ? payload: ''
    return new Promise((resolve, reject) => {
      $axios.get('/santri', {

      })
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  },
  submitSantri({ dispatch, commit, state }) {
    return new Promise((resolve, reject) => {
      if(state.santri.file_foto instanceof File) {
        const fr = new FileReader();
        let data = {};
        Object.assign(data,state.santri);
        fr.onloadend = function() {
          data.foto_b64 = fr.result.replace(/^data:.+;base64,/, '');
          $axios.post(`/santri`, data)
          .then((response) => {
            dispatch('getSantris').then(() => {
              resolve(response.data)
            })
          })
          .catch((error) => {
            if (error.response.status == 422) {
              commit('SET_ERRORS', error.response.data.error, { root: true })
            }
          })
        }
        fr.readAsDataURL(state.santri.file_foto);
        
      } else {
        $axios.post(`/santri`, state.santri)
        .then((response) => {
          dispatch('getSantris').then(() => {
            resolve(response.data)
          })
        })
        .catch((error) => {
          if (error.response.status == 422) {
            commit('SET_ERRORS', error.response.data.error, { root: true })
          }
        })
      }
    })
  },
  editSantri({ commit }, payload) {
    return new Promise((resolve, reject) => {
      $axios.get(`/santri/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.data)
        resolve(response.data)
      })
    })
  },
  updateSantri({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      if(state.santri.file_foto instanceof File) {
        const fr = new FileReader();
        let data = {};
        Object.assign(data,state.santri);
        fr.onloadend = function() {
          data.foto_b64 = fr.result.replace(/^data:.+;base64,/, '');
          $axios.put(`/santri/${payload}`, data)
          .then((response) => {
            commit('CLEAR_FORM')
            resolve(response.data)
          })
        }
        fr.readAsDataURL(state.santri.file_foto);
      } else {
        $axios.put(`/santri/${payload}`, state.santri)
        .then((response) => {
          commit('CLEAR_FORM')
          resolve(response.data)
        })
      }
    })
  },
  removeSantri({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      $axios.delete(`/santri/${payload}`)
      .then((response) => {
        dispatch('getSantris').then(() => resolve())
      })
    })
  },
  getMuhaffizh({ commit }, payload=null) {
    return new Promise((resolve, reject) => {
        $axios.get(`/santri/santrimuhaffizh`)
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
      console.log('payload:',payload);
        if(payload){
            $axios.get(`/santri/santrigroup`,{
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
          $axios.get(`/santri/santrigroup`)
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
  getGrade({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/santri/santrigrade`)
        .then((response) => {
            commit('CLEAR_GRADE') 
            response.data.data.forEach(item=>{
              commit('APPEND_GRADE', {value:item.id, text:item.grade})              
            });
            resolve(response.data)
        })
    })
  },
  getLevel({ commit }) {
    return new Promise((resolve, reject) => {
        $axios.get(`/santri/santrilevel`)
        .then((response) => {
            commit('CLEAR_LEVEL') 
            response.data.data.forEach(item=>{
              commit('APPEND_LEVEL', {value:item.id, text:item.level})              
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
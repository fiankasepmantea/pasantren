import $axios from '../api.js'

const state = () => ({

})

const mutations = {
    
}

const actions = {
    submit({ commit }, payload) {
        localStorage.setItem('token', null) //RESET LOCAL STORAGE MENJADI NULL
        commit('SET_TOKEN', null, { root: true }) //RESET STATE TOKEN MENJADI NULL
        //KARENA MUTATIONS SET_TOKEN BERADA PADA ROOT STORES, MAKA DITAMBAHKAN PARAMETER
        //{ root: true }
      
        //KITA MENGGUNAKAN PROMISE AGAR FUNGSI SELANJUTNYA BERJALAN KETIKA FUNGSI INI SELESAI
        return new Promise((resolve, reject) => {
            //MENGIRIM REQUEST KE SERVER DENGAN URI /login 
            //DAN PAYLOAD ADALAH DATA YANG DIKIRIMKAN DARI COMPONENT LOGIN.VUE
            $axios.post('/auth/login', { email: payload.username, password: payload.password })
            .then((response) => {
                if (response.data && response.data.access_token) {
                    //MAKA LOCAL STORAGE DAN STATE TOKEN AKAN DISET MENGGUNAKAN
                    //API DARI SERVER RESPONSE
                    localStorage.setItem('token', response.data.access_token)
                    commit('SET_TOKEN', response.data.access_token, { root: true })
                } else {
                    commit('SET_ERRORS', { invalid: 'Username/Password Salah' }, { root: true })
                }

                //JANGAN LUPA UNTUK MELAKUKAN RESOLVE AGAR DIANGGAP SELESAI
                resolve(response.data)
            })
            .catch((error) => {
                resolve(error)
                if (error.response.status == 401) {
                    commit('SET_ERRORS', error.response.data.error, { root: true })
                }
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
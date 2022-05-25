import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted);

let success = {
  position : 'top-center',
  type :  'success',
  duration: 5000,
  keepOnHover: true,
}

let failed = {
  position: 'top-center',
  type: 'error',
  duration: 5000,
  keepOnHover: true,
}

Vue.toasted.register('success_toast', (payload) => {
  if(!payload.message) {
    return "Data berhasil di input.."
  }

  return payload.message;
  },
    success 
);

Vue.toasted.register('failed_toast', (payload) => {
  if(!payload.message) {
    return "Gagal untuk menginput data.."
  }

  return payload.message;
  },
    failed  
);
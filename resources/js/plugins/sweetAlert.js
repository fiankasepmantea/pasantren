import Vue from 'vue'
import VueSweetAlert from 'vue-sweetalert2'

const options = {
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Hapus',
  cancelButtonText: 'Batal',
  cancelButtonColor: '#d33',
};

Vue.use(VueSweetAlert, options)
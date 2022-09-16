import { required, confirmed } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: 'Kolom ini harus diisi.'
});

extend('confirmed', {
  ...confirmed,
  message: 'password yang di masukan tidak sesuai.'
})

extend('min', {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ['length'],
  message: 'minimal memiliki {length} karakter.'
})

extend('max', {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ['length'],
  message: 'maksimal memiliki {length} karakter.'
})

extend("cekSantri", {
  validate: (field,args) => function(){
    return new Promise((resolve, reject) => {
  
          $axios.get(`/santri/checksantri`,{
            params: {
              user_id : args.user_id,
              nama : args.nama,
            }
          })
          .then((response) => { 
            
            resolve(response.data)
        })
      
  })},
  getMessage: (field, args) => 'Nama santri sudah ada'
});
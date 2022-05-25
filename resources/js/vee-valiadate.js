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
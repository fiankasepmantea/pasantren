import axios from 'axios';
import router from './router/index.js'

const $axios = axios.create({
    baseURL: '/api',
    headers: {
        Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token'):'',
        'Content-Type': 'application/json'
    }
});

$axios.interceptors.request.use (
    function (config) {
        const token = localStorage.getItem('token') != 'null' ? localStorage.getItem('token') : ''
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        return Promise.reject (error);
    }
);

$axios.interceptors.response.use(
    response => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    }, error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem('token');
                    router.push({ name: 'login' });
                    break;
            }
            return Promise.reject(error.response);
        }
    }
);
     

export default $axios;
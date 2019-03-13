import axios from 'axios';

const axiosHandler = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    xsrfHeaderName : "X-CSRFTOKEN",
    xsrfCookieName : "csrftoken"
})

export default axiosHandler
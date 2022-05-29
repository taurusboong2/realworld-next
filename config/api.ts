import axios from 'axios';

const api = axios.create({
  baseURL: 'https://boong-realworld-api.herokuapp.com/api',
  headers: {
    'Content-Type': ' application/json; charset=utf-8',
  },
  timeout: 1500,
});

// api.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response.status === 401) {
//       return;
//     }
//     return Promise.reject(error);
//   }
// );

export default api;

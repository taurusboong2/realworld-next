import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://boong-realworld-api.herokuapp.com/api',
  headers: {
    'Content-Type': ' application/json; charset=utf-8',
  },
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

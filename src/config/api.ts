import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://boong-realworld-api.herokuapp.com/api',
  headers: {
    'Content-Type': ' application/json; charset=utf-8',
  },
});

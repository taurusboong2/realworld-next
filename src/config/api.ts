import axios from 'axios';
import { getTokenStorage } from '../commons/tokenStorage';

const localStorageToken = getTokenStorage();

export const api = axios.create({
  baseURL: 'https://boong-realworld-api.herokuapp.com/api',
  headers: {
    'Content-Type': ' application/json; charset=utf-8',
  },
});

export const apiWithAuth = axios.create({
  baseURL: 'https://boong-realworld-api.herokuapp.com/api',
  headers: {
    'Content-Type': ' application/json; charset=utf-8',
    Authorization: `Token ${localStorageToken}`,
  },
});

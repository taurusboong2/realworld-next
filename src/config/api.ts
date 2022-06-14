import axios from 'axios';
import { getStorageUserToken } from '../commons/userStorage';

export const api = (() => {
  const userToken = getStorageUserToken();

  return axios.create({
    baseURL: 'https://boong-realworld-api.herokuapp.com/api',
    headers: {
      'Content-Type': ' application/json; charset=utf-8',
      Authorization: `Token ${userToken}`,
    },
  });
})();

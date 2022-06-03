import { api } from '../config/api';
import { ServerData, LoginInputValue } from '../src/types/realWorld';

export const getLoginToken = async (id?: number | string) => {
  const response = await api.get<ServerData>('user', {
    headers: {
      Authorization: `Token ${id}`,
    },
  });
  const data = response.data.user;
  return data;
};

export const getLogin = async (inputValue: LoginInputValue) => {
  const response = await api.post(`/users/login`, inputValue);
  const token = response.data.user.token;
  return token;
};

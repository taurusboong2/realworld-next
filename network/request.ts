import { api } from '../config/api';
import { ServerData } from '../src/types/realWorld';

export const getLogin = async (id?: number | string) => {
  const response = await api.get<ServerData>('user', {
    headers: {
      Authorization: `Token ${id}`,
    },
  });
  const data = response.data.user;
  return data;
};

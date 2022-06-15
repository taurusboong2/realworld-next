import { getItem, setItem, removeItem } from './localStorage';

export const getTokenStorage = () => {
  return getItem('token');
};

export const setTokenStorage = (newToken: string) => {
  setItem('token', newToken);
};

export const removeTokenStorage = () => {
  removeItem('user');
};
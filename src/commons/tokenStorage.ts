import { getItem, setItem, removeItem } from './localStorage';

export const getTokenFromStorage = () => {
  return getItem('token');
};

export const setTokenFromStorage = (newToken: string) => {
  return setItem('token', newToken);
};

export const removeTokenFromStorage = () => {
  return removeItem('token');
};

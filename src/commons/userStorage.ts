import { setItem, getItem, removeItem } from './localStorage';

const STORAGE_TOKEN_KEY = 'boongUserToken';

export const setStorageUserToken = (newToken: string) => {
  setItem(STORAGE_TOKEN_KEY, newToken);
};

export const getStorageUserToken = () => {
  return getItem(STORAGE_TOKEN_KEY);
};

export const removeStorageUserToken = () => {
  removeItem(STORAGE_TOKEN_KEY);
};

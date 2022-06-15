import { api, apiWithAuth } from '../config/api';
import { getItem } from '../commons/localStorage';
import { LoginInputValue, SignUpInput, UpdateInput, UserData } from '../../src/types/auth';
import { removeTokenFromStorage, getTokenFromStorage } from '../commons/tokenStorage';

export const login = async (inputValue: LoginInputValue) => {
  try {
    const { status, data } = await api.post<UserData>(`/users/login`, inputValue);
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const logout = () => {
  removeTokenFromStorage();
};

export const createUser = async (signUpValue: SignUpInput) => {
  try {
    const { status, data } = await api.post(`/users`, signUpValue);
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const patchUser = async (updateData: UpdateInput) => {
  try {
    const { status, data } = await apiWithAuth.put(`/user`, updateData);
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const getProfile = async () => {
  const user: any = getItem('user');
  if (!user) return;
  const parsedUser = JSON.parse(user);
  return parsedUser;
};

export const getUserInfo = async () => {
  const response = await apiWithAuth.get<UserData>(`/user`);
  const data = response.data;
  return data;
};

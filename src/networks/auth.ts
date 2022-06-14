import { api } from '../config/api';
import { removeStorageUserToken, setStorageUserToken } from '../commons/userStorage';
import { LoginInputValue, SignUpInput, UpdateInput, UserData } from '../../src/types/auth';

export const login = async (inputValue: LoginInputValue) => {
  try {
    const { status, data } = await api.post<UserData>(`/users/login`, inputValue);
    if (status === 200) {
      setStorageUserToken(data?.user.token as string);
      alert('로그인이 성공하셨습니다.');
    }
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const logout = () => {
  removeStorageUserToken();
};

export const createUser = async (signUpValue: SignUpInput) => {
  try {
    const { status, data } = await api.post(`/users`, signUpValue);
    if (status === 200) {
      alert('회원가입이 성공적으로 완료되었습니다.');
    }
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const patchUser = async (updateData: UpdateInput) => {
  try {
    const { status, data } = await api.put<UserData>(`/user`, updateData);
    if (status === 200) {
      alert('회원정보가 성공적으로 변경되었습니다.');
    }
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const getUserInfo = async () => {
  const response = await api.get<UserData>(`/user`);

  const data = response.data;
  return data;
};

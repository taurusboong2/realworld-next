import { api } from '../config/api';
import { getItem, removeItem, setItem } from '../commons/localStorage';
import { LoginInputValue, SignUpInput, UpdateInput, UserData } from '../../src/types/auth';

export const getLogin = async (inputValue: LoginInputValue) => {
  try {
    const { status, data } = await api.post(`/users/login`, inputValue);
    if (status === 200) {
      setItem('user', JSON.stringify(data.user));
      alert('로그인이 성공하셨습니다.');
    }
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const getSignUp = async (signUpValue: SignUpInput) => {
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
  const user: any = getItem('user');
  const parsedUser = JSON.parse(user);
  const token = parsedUser.token;
  try {
    const { status, data } = await api.put(`/user`, updateData, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    if (status === 200) {
      alert('회원정보가 성공적으로 변경되었습니다.');
      removeItem('user');
      setItem('user', JSON.stringify(data.user));
    }
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
  const user = getItem(`user`);
  let token;
  if (user !== null) {
    const parsedUser = JSON.parse(user);
    token = user && parsedUser.token;
  }
  const response = await api.get<UserData>(`/user`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  const data = response.data;
  return data;
};

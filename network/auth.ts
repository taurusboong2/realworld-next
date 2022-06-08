import { api } from '../config/api';
import { getItem, removeItem, setItem } from '../common/localStorage';
import { LoginInputValue, SignUpInput, UpdateInput } from '../src/types/realWorld';

export const fetchCurrentUser = async () => {
  const user: any = getItem('user');
  const parsedUser = JSON.parse(user);
  const token = parsedUser.token;
  try {
    const response = await api.get(`/user`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response;
  } catch (error) {
    return { error };
  }
};

export const login = async (inputValue: LoginInputValue) => {
  try {
    const { status, data } = await api.post(`/users/login`, inputValue);
    if (status === 200) {
      setItem('user', JSON.stringify(data.user));
      confirm('로그인이 성공하셨습니다.');
    }
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const signUp = async (signUpValue: SignUpInput) => {
  try {
    const { status, data } = await api.post(`/users`, signUpValue);
    if (status === 200) {
      confirm('회원가입이 성공적으로 완료되었습니다.');
    }
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const updateProfile = async (updateData: UpdateInput) => {
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
      confirm('회원정보가 성공적으로 변경되었습니다.');
      removeItem('user');
      setItem('user', JSON.stringify(data.user));
    }
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const fetchProfile = async () => {
  const user: any = getItem('user');
  if (!user) return;
  const parsedUser = JSON.parse(user);
  return parsedUser;
};

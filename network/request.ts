import { api } from '../config/api';
import { getItem } from '../common/localStorage';
import {
  ServerData,
  LoginInputValue,
  UserData,
  SignUpInput,
  CreateArticleData,
  SignUpResponse,
} from '../src/types/realWorld';

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
  const response = await api.post<UserData>(`/users/login`, inputValue);
  const userData = response.data.user;
  return { userData };
};

export const fetchSignUp = async (data: SignUpInput) => {
  const response = await api.post<SignUpResponse>(`/users`, data);
  return response;
};

export const fetchArticle = async (userdata: CreateArticleData, token: string) => {
  const { data, status } = await api.post('/articles', userdata, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return {
    data,
    status,
  };
};

export const getFeedsArticles = async () => {
  const response = await api.get(`/articles/sad-7`);
  console.log(response);
};

export const getUserProfile = async (userName: string | string[] | undefined, token: string) => {
  const response = await api.get(`/profiles/${userName}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return response.data;
};

export const getUserInfo = async () => {
  const user = getItem(`user`);
  const token = user && user.token;

  const response = await api(`/user`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

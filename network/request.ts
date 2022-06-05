import axios from 'axios';
import { api } from '../config/api';
import {
  ServerData,
  LoginInputValue,
  Token,
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
  const response = await api.post<Token>(`/users/login`, inputValue);
  const token = response.data.user.token;
  return token;
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

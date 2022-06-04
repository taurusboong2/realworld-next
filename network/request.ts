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
  const response = await api.post(`/users`, data);
  return response;
};

export const fetchArticle = async (data: CreateArticleData) => {
  const response = await api.post<SignUpResponse>(`/articles`, data);
  console.log(response);
};

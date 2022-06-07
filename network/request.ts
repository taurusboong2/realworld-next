import { api } from '../config/api';
import { getItem, setItem } from '../common/localStorage';
import {
  ServerData,
  LoginInputValue,
  UserData,
  SignUpInput,
  CreateArticleData,
  SignUpResponse,
  SingleArticle,
} from '../src/types/realWorld';

export const Auth = {
  login: async (inputValue: LoginInputValue) => {
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
  },

  signUp: async (signUpValue: SignUpInput) => {
    try {
      const { status, data } = await api.post(`/users`, signUpValue);
      if (status === 200) {
        confirm('회원가입이 성공적으로 완료되었습니다.');
      }
      return { status, data };
    } catch (error) {
      return { error };
    }
  },
};

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

export const getArticleList = async (token?: string) => {
  const response = await api.get(`/articles`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response;
};

export const fetchSingleArticle = async (slug: string) => {
  const response = await api.get<SingleArticle>(`articles/${slug}`);
  const data = response.data;
  return data;
};

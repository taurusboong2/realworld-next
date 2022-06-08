import { api } from '../config/api';
import { getItem, removeItem, setItem } from '../common/localStorage';
import {
  LoginInputValue,
  UserData,
  SignUpInput,
  CreateArticleData,
  SingleArticle,
  UpdateInput,
  UpdataArticle,
} from '../src/types/realWorld';

export const Auth = {
  current: async () => {
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
  },

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

  update: async (updateData: UpdateInput) => {
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
  },

  getProfile: async () => {
    const user: any = getItem('user');
    if (!user) return;
    const parsedUser = JSON.parse(user);
    return parsedUser;
  },
};

export const Article = {
  create: async (articleData: CreateArticleData) => {
    const user: any = getItem('user');
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token;
    try {
      const { status } = await api.post('/articles', articleData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (status === 200) {
        confirm('게시글이 성공적으로 생성되었습니다.');
      }
    } catch (error) {
      return { error };
    }
  },

  list: async () => {
    const user: any = getItem('user');
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token;
    try {
      const { data } = await api.get(`/articles`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return { data };
    } catch (error) {
      return { error };
    }
  },

  delete: async (slug: string) => {
    const user: any = getItem('user');
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token;
    try {
      await api.delete(`/articles/${slug}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
    } catch (error) {
      return { error };
    }
  },

  update: async (slug: string, updateValue: UpdataArticle) => {
    const user: any = getItem('user');
    const parsedUser = JSON.parse(user);
    const token = parsedUser.token;
    try {
      const { status, data } = await api.put(`articles/${slug}`, updateValue, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (status === 200) {
        confirm('게시글이 성공적으로 수정되었습니다.');
      }
      return { status, data };
    } catch (error) {
      return { error };
    }
  },
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

  console.log('response : ', response.data);
  const data = response.data;
  return data;
};

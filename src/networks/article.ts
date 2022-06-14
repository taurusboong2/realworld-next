import { api } from '../config/api';
import { getItem } from '../commons/localStorage';
import { CreateArticleData, SingleArticle, UpdataArticle } from '../../src/types/article';

export const Article = {};

export const createNewArticle = async (articleData: CreateArticleData) => {
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
      alert('게시글이 성공적으로 생성되었습니다.');
    }
  } catch (error) {
    return { error };
  }
};

export const getList = async () => {
  const user: any = getItem('user');
  const parsedUser = JSON.parse(user);
  const token = parsedUser?.token;
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
};

export const patchArticle = async (slug: string, updateValue: UpdataArticle) => {
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
      alert('게시글이 성공적으로 수정되었습니다.');
    }
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const removeArticle = async (slug: string) => {
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

export const fetchSingleArticle = async (slug: string) => {
  const response = await api.get<SingleArticle>(`articles/${slug}`);
  const data = response.data;
  return data;
};

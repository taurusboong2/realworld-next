import { api, apiWithAuth } from '../config/api';
import { CreateArticleData, SingleArticle, UpdataArticle, FeedOpt } from '../../src/types/article';
import { getTokenFromStorage } from '../commons/tokenStorage';

export const Article = {};

export const createNewArticle = async (articleData: CreateArticleData) => {
  try {
    const { status } = await apiWithAuth.post('/articles', articleData);
    return { status };
  } catch (error) {
    return { error };
  }
};

export const getArticleList = async () => {
  if (getTokenFromStorage()) {
    try {
      const { data } = await api.get(`/articles`, {
        headers: {
          Authorization: `Token ${getTokenFromStorage()}`,
        },
      });
      return { data };
    } catch (error) {
      return { error };
    }
  }
};

export const patchArticle = async (slug: string, updateValue: UpdataArticle) => {
  try {
    const { status, data } = await apiWithAuth.put(`articles/${slug}`, updateValue);
    return { status, data };
  } catch (error) {
    return { error };
  }
};

export const removeArticle = async (slug: string) => {
  try {
    await apiWithAuth.delete(`/articles/${slug}`);
  } catch (error) {
    return { error };
  }
};

export const fetchArticle = async (userdata: CreateArticleData) => {
  const { data, status } = await apiWithAuth.post('/articles', userdata);
  return {
    data,
    status,
  };
};

export const getUserProfile = async (userName: string | string[] | undefined) => {
  const response = await apiWithAuth.get(`/profiles/${userName}`);

  return response.data;
};

export const fetchSingleArticle = async (slug: string) => {
  const response = await api.get<SingleArticle>(`articles/${slug}`);
  const data = response.data;
  return data;
};

export const fetchFeedArticles = async ({ limit = 5, offset = 0 }: FeedOpt) => {
  try {
    const { data, config } = await apiWithAuth.get(`/articles/feed?limit=${limit}&offset=${offset}`);
    return { data, config };
  } catch (error) {
    return { error };
  }
};

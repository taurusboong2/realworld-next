import { api, apiWithAuth } from '../config/api';
import { getItem } from '../commons/localStorage';
import { CreateArticleData, SingleArticle, UpdataArticle } from '../../src/types/article';

export const Article = {};

export const createNewArticle = async (articleData: CreateArticleData) => {
  try {
    const { status } = await apiWithAuth.post('/articles', articleData);
    return { status };
  } catch (error) {
    return { error };
  }
};

export const getList = async () => {
  try {
    const { data } = await apiWithAuth.get(`/articles`);
    return { data };
  } catch (error) {
    return { error };
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

export const getFeedsArticles = async () => {
  const response = await api.get(`/articles/sad-7`);
  console.log(response);
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

import { useEffect, useState } from 'react';
import { fetchArticle, getArticleList, fetchSingleArticle } from '../network/request';
import {
  LoginInputValue,
  SignUpInput,
  CreateArticleData,
  ArticleList,
  SingleArticle,
  UpdateInput,
  UserType,
  UpdataArticle,
} from '../src/types/realWorld';
import { getItem } from '../common/localStorage';
import { Auth, Article } from '../network/request';

export const useGetLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchLogin = async (inputValue: LoginInputValue) => {
    setLoading(true);
    const { status, data, error } = await Auth.login(inputValue);
    setLoading(false);
    return { status, data, error };
  };

  return { isLoading, fetchLogin };
};

export const useSignUp = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const createSignUp = async (signUpValue: SignUpInput) => {
    setLoading(true);
    const { status, data, error } = await Auth.signUp(signUpValue);
    setLoading(false);
    return { status, data, error };
  };

  return { createSignUp, isLoading };
};

export const useUpdate = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const updateUser = async (updateData: UpdateInput) => {
    setLoading(true);
    const { status, data, error } = await Auth.update(updateData);
    setLoading(false);
    return { status, data, error };
  };

  return { isLoading, updateUser };
};

export const useFetchProfile = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await Auth.getProfile();
      setUserData(result);
      setLoading(false);
    })();
  }, []);

  return { isLoading, userData };
};

export const useCreateArticle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createArticle = async (createvalue: CreateArticleData) => {
    setIsLoading(true);
    await Article.create(createvalue);
    setIsLoading(false);
  };

  return { isLoading, createArticle };
};

export const useGetArticleList = () => {
  const [articleList, setArticleList] = useState<ArticleList | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await Article.list();
      setArticleList(data);
    })();
  }, []);

  return { articleList };
};

export const useUpdateArticle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateArticle = async (slug: string, updateValue: UpdataArticle) => {
    setIsLoading(true);
    await Article.update(slug, updateValue);
    setIsLoading(false);
  };

  return { isLoading, updateArticle };
};

export const useGetSingleArticle = (slug: string) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [articleData, setArticleData] = useState<SingleArticle | null>(null);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const response = await fetchSingleArticle(slug as string);
      setArticleData(response.article);
      setLoading(false);
    })();
  }, [slug]);

  return { isLoading, articleData };
};

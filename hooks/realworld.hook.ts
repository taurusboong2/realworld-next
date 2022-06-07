import { useEffect, useState } from 'react';
import { getLoginToken, fetchArticle, getArticleList, fetchSingleArticle } from '../network/request';
import {
  LoginInputValue,
  SignUpInput,
  CreateArticleData,
  ArticleList,
  SingleArticle,
  UpdateInput,
  UserType,
} from '../src/types/realWorld';
import { getItem } from '../common/localStorage';
import { Auth } from '../network/request';

export const useGetLoginToken = (token?: string | null) => {
  const [name, setName] = useState<string | number>('');

  useEffect(() => {
    if (!token) return;
    (async () => {
      const response = await getLoginToken(token);
      setName(response.username);
    })();
  }, []);

  return { name };
};

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
  const [isLoading, setLoading] = useState<boolean>(false);

  const createArticle = async (data: CreateArticleData, id: string) => {
    setLoading(true);
    const response = await fetchArticle(data, id);
    setLoading(false);
    console.log(response);
  };

  return { isLoading, createArticle };
};

export const useGetArticleList = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [articleList, setArticleList] = useState<ArticleList | null>(null);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUser = getItem('user');
      if (!currentUser) return;
      const parsed = JSON.parse(currentUser);
      const token = parsed.token;
      setUserName(parsed.username);
      (async () => {
        setLoading(true);
        const response = await getArticleList(token);
        await setArticleList(response.data);
        setLoading(false);
      })();
    }
  }, []);

  return { userName, articleList, isLoading };
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

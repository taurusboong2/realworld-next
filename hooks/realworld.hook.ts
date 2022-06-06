import { useEffect, useState } from 'react';
import { getLoginToken, getLogin, fetchSignUp, fetchArticle, getArticleList } from '../network/request';
import { LoginInputValue, SignUpInput, CreateArticleData } from '../src/types/realWorld';

export const useGetLoginToken = (token?: string | null) => {
  const [name, setName] = useState<string | number>('');

  useEffect(() => {
    if (!token) return;
    (async () => {
      getLoginToken(token).then(res => {
        setName(res.username);
      });
    })();
  }, []);

  return { name };
};

export const useGetLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const getTokenUserName = async (data: LoginInputValue) => {
    setLoading(true);
    const { userData } = await getLogin(data);
    setLoading(false);
    return { userData };
  };

  return { isLoading, getTokenUserName };
};

export const useFetchSignUp = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const signUp = async (data: SignUpInput) => {
    setLoading(true);
    const reponseStatus = await (await fetchSignUp(data)).status;
    setLoading(false);
    if (reponseStatus === 200) {
      confirm('회원가입이 성공적으로 진행되었습니다.');
    }
  };

  return { signUp, isLoading };
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

  const fetchArticleList = async (token?: string) => {
    setLoading(true);
    const response = await getArticleList(token);
    setLoading(false);
    return response;
  };

  return { isLoading, fetchArticleList };
};

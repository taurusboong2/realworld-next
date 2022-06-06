import { useEffect, useState } from 'react';
import { getLoginToken, getLogin, fetchSignUp, fetchArticle, getArticleList } from '../network/request';
import { LoginInputValue, SignUpInput, CreateArticleData, ArticleList } from '../src/types/realWorld';
import { getItem } from '../common/localStorage';

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

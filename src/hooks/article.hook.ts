import { useContext, useEffect, useState } from 'react';
import { fetchSingleArticle, createNewArticle, getArticleList, patchArticle } from '../networks/article';
import { CreateArticleData, ArticleList, UpdataArticle, PropArticle } from '../../src/types/article';
import { UserContext } from '../contexts/UserContext';
import { getTokenFromStorage } from '../commons/tokenStorage';

export const useCreateArticle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createArticle = async (createvalue: CreateArticleData) => {
    setIsLoading(true);
    await createNewArticle(createvalue);
    setIsLoading(false);
  };

  return { isLoading, createArticle };
};

export const useGetArticleList = () => {
  const [articleList, setArticleList] = useState<ArticleList | null>(null);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const { data, error } = await getArticleList();
      setArticleList(data);
      if (error) {
        console.log(error);
      }
    })();
  }, [setUser]);

  return { articleList };
};

export const useUpdateArticle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateArticle = async (slug: string, updateValue: UpdataArticle) => {
    setIsLoading(true);
    await patchArticle(slug, updateValue);
    setIsLoading(false);
  };

  return { isLoading, updateArticle };
};

export const useGetSingleArticle = (slug: string) => {
  const [aricleIsLoading, setLoading] = useState<boolean>(false);
  const [articleData, setArticleData] = useState<PropArticle | null>(null);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const response = await fetchSingleArticle(slug as string);
      if (response.article.constructor === Object && Object.keys(response.article).length === 0) {
        return setArticleData(response.article);
      }
      setArticleData(response.article);
      setLoading(false);
    })();
  }, [slug]);

  return { aricleIsLoading, articleData };
};

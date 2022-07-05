import { useContext, useEffect, useState } from 'react';
import { fetchSingleArticle, createNewArticle, getArticleList, patchArticle } from '../networks/article';
import { CreateArticleData, ArticleList, UpdataArticle, PropArticle, FeedType } from '../../src/types/article';
import { UserContext } from '../contexts/UserContext';

export const useCreateArticle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createArticle = async (createvalue: CreateArticleData) => {
    setIsLoading(true);
    const response = await createNewArticle(createvalue);
    setIsLoading(false);
    return response;
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
  const [isLoadingUpdate, setIsLoading] = useState<boolean>(false);

  const updateArticle = async (slug: string, updateValue: UpdataArticle) => {
    setIsLoading(true);
    await patchArticle(slug, updateValue);
    setIsLoading(false);
  };

  return { isLoadingUpdate, updateArticle };
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

export const useGetArticleFeeds = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [feeds, setFeeds] = useState<FeedType[]>([]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setIsLoading(true);
      const { data } = await getArticleList();
      setFeeds(data.articles);
      setIsLoading(false);
    })();
  }, []);

  return { isLoading, feeds, setFeeds };
};

import { useEffect, useState } from 'react';
import { fetchSingleArticle } from '../networks/article';
import { CreateArticleData, ArticleList, SingleArticle, UpdataArticle } from '../../src/types/article';
import { Article } from '../networks/article';

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
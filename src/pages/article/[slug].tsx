import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetSingleArticle } from '../../../hooks/realworld.hook';
import ArticleBanner from '../../components/Article/ArticleBanner';
import ArticleContainer from '../../components/Article/ArticleContainer';
import ArticleAction from '../../components/Article/ArticleAction';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { isLoading, articleData } = useGetSingleArticle(slug as string);

  console.log(articleData?.article);
  if (!articleData) return <>로딩중..</>;
  if (isLoading) return <>로딩중...</>;
  return (
    <>
      <div className="article-page">
        <ArticleBanner article={articleData} />

        <div className="container page">
          <ArticleContainer article={articleData} />

          <hr />

          <ArticleAction article={articleData} />

          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slug;

import React from 'react';
import { useRouter } from 'next/router';
import { useGetSingleArticle } from '../../hooks/article.hook';
import ArticleBanner from '../../components/Article/ArticleBanner';
import ArticleContainer from '../../components/Article/ArticleContainer';
import ArticleAction from '../../components/Article/ArticleAction';
import { Article } from '../../networks/article';
import LoadingSpinner from '../../commons/LoadingSpinner';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { isLoading, articleData } = useGetSingleArticle(slug as string);

  console.log(articleData);

  const submitDelete = async () => {
    const result = confirm('정말로 게시글을 삭제하시겠습니까?');
    if (!result) return;
    await Article.delete(slug as string);
    router.push(`/`);
  };

  if (typeof articleData === null) {
    alert('유효하지 않은 페이지입니다.');
    router.push('/');
  }
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <div className="article-page">
        <ArticleBanner article={articleData} submitDelete={submitDelete} />

        <div className="container page">
          <ArticleContainer article={articleData} />

          <hr />

          <ArticleAction article={articleData} submitDelete={submitDelete} />

          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slug;

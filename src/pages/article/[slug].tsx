import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetSingleArticle } from '../../hooks/article.hook';
import ArticleBanner from '../../components/Article/Banner';
import ArticleContainer from '../../components/Article/Container';
import ArticleAction from '../../components/Article/Action';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import MyHead from '../../components/myHead';
import { removeArticle } from '../../networks/article';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { isLoading, articleData } = useGetSingleArticle(slug as string);

  const submitDelete = async () => {
    const result = confirm('정말로 게시글을 삭제하시겠습니까?');
    if (!result) return;
    await removeArticle(slug as string);
    router.push(`/`);
  };

  useEffect(() => {
    if (
      articleData?.author.constructor === Object &&
      Object.keys(articleData.author).length === 0 &&
      typeof window !== 'undefined'
    ) {
      alert('유효하지 않은 페이지입니다!');
      router.push('/');
    }
  }, [articleData, router.query.slug]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <MyHead title="article" />
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

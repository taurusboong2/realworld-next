import React from 'react';
import MyLink from '../NavBar/MyLink';
import { Article } from '../../../network/request';
import { useRouter } from 'next/router';

const ArticleBanner = ({ article }) => {
  const router = useRouter();
  const slug = router.query.slug;

  const submitDelete = async () => {
    const result = confirm('정말로 게시글을 삭제하시겠습니까?');
    if (!result) return;
    await Article.delete(slug as string);
    router.push(`/`);
  };

  return (
    <>
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>

          <div className="article-meta">
            <MyLink href="">
              <img src={article.author.image} />
            </MyLink>
            <div className="info">
              <MyLink href="" className="author">
                {article.author.username}
              </MyLink>
              <span className="date"> {new Date(article.createdAt).toDateString()}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round" />
              &nbsp; {article.author.username} <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-outline-danger btn-sm" onClick={submitDelete}>
              <i className="ion-trash-a" /> Delete Article
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleBanner;

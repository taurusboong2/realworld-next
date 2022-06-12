import React, { useContext } from 'react';
import MyLink from '../NavBar/MyLink';
import { Article } from '../../networks/article';
import { useRouter } from 'next/router';
import { UserContext } from '../../contexts/UserContext';

const ArticleBanner = ({ article }) => {
  const router = useRouter();
  const slug = router.query.slug;
  const { user, setUser } = useContext(UserContext);
  console.log(user);

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
            {user ? (
              <>
                <MyLink
                  href="/editor/[pid]"
                  as={`/editor/${article.slug}`}
                  className="btn btn-outline-secondary btn-sm">
                  <i className="ion-edit" /> Edit Article
                </MyLink>
                &nbsp;&nbsp;
                <button className="btn btn-outline-danger btn-sm" onClick={submitDelete}>
                  <i className="ion-trash-a" /> Delete Article
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-plus-round" />
                  &nbsp; Follow {article.author.username} <span className="counter">(0)</span>
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-sm btn-outline-primary">
                  <i className="ion-heart" />
                  &nbsp; Favorite Post <span className="counter">({article.favoritesCount})</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleBanner;

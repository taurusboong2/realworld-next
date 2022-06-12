import React, { FC, useContext } from 'react';
import MyLink from '../NavBar/MyLink';
import { UserContext } from '../../contexts/UserContext';
import { PropArticle } from '../../types/article';

type Props = {
  article: PropArticle;
  submitDelete: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ArticleBanner: FC<Props> = ({ article, submitDelete }) => {
  const { user, setUser } = useContext(UserContext);

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

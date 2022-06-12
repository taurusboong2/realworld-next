import React, { FC, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import MyLink from '../NavBar/MyLink';
import { PropArticle } from '../../types/article';

type Props = {
  article: PropArticle | null;
  submitDelete: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ArticleAction: FC<Props> = ({ article, submitDelete }) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="article-actions">
        <div className="article-meta">
          <a href="profile.html">
            <img src={article!.author.image} />
          </a>
          <div className="info">
            <a href="" className="author">
              {article!.author.username}
            </a>
            <span className="date"> {new Date(article.createdAt).toDateString()}</span>
          </div>
          {user ? (
            <>
              <MyLink href="/editor/[pid]" as={`/editor/${article.slug}`} className="btn btn-outline-secondary btn-sm">
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
                &nbsp; Follow {article.author.username}
              </button>
              &nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart" />
                &nbsp; Favorite Post <span className="counter">(29)</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ArticleAction;

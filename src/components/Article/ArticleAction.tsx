import React from 'react';

const ArticleAction = ({ article }) => {
  return (
    <>
      <div className="article-actions">
        <div className="article-meta">
          <a href="profile.html">
            <img src="http://i.imgur.com/Qr71crq.jpg" />
          </a>
          <div className="info">
            <a href="" className="author">
              {article.author.username}
            </a>
            <span className="date"> {new Date(article.createdAt).toDateString()}</span>
          </div>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-plus-round" />
            &nbsp; Follow {article.author.username}
          </button>
          &nbsp;
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart" />
            &nbsp; Favorite Post <span className="counter">(29)</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ArticleAction;

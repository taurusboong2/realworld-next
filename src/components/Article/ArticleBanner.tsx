import React from 'react';
import MyLink from '../NavBar/MyLink';

const ArticleBanner = ({ article }) => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>

          <div className="article-meta">
            <MyLink href="">
              <img src="http://i.imgur.com/Qr71crq.jpg" />
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
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart" />
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleBanner;

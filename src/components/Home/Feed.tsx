import React, { FC } from 'react';

type Props = {
  author: string;
  date: string;
  heart: number;
  title: string;
  description: string;
};

const Feed: FC<Props> = ({ author, date, heart, title, description }) => {
  return (
    <>
      <div className="article-preview">
        <div className="article-meta">
          <a href="profile.html">
            <img src="http://i.imgur.com/Qr71crq.jpg" />
          </a>
          <div className="info">
            <a href="" className="author">
              {author}
            </a>
            <span className="date">{date}</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart" /> {heart}
          </button>
        </div>
        <a href="" className="preview-link">
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Read more...</span>
        </a>
      </div>
    </>
  );
};

export default Feed;

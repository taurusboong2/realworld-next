import React, { FC } from 'react';

type Props = {
  author: string;
  date: string;
  heart: number;
  title: string;
  description: string;
  inRef: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
  slug?: string;
  image?: string;
};

const Feed: FC<Props> = ({ slug, author, date, heart, title, description, image, inRef }) => {
  return (
    <>
      <div className="article-preview" ref={inRef}>
        <div className="article-meta">
          <a href="profile.html">
            <img src={image} />
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
        <a href={`/article/${slug}`} className="preview-link">
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Read more...</span>
        </a>
      </div>
    </>
  );
};

export default Feed;

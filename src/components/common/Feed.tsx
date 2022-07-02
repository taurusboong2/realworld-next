import React, { FC } from 'react';
import MyLink from '../NavBar/MyLink';

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
          <MyLink href="profile">
            <img src={image} />
          </MyLink>
          <div className="info">
            <a href="propfile" className="author">
              {author}
            </a>
            <span className="date">{date}</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart" /> {heart}
          </button>
        </div>
        <MyLink href={`/article/${slug}`} className="preview-link">
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Read more...</span>
        </MyLink>
      </div>
    </>
  );
};

export default Feed;

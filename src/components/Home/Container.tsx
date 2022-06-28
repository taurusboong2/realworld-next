import React, { FC } from 'react';
import Sidebar from './SIdebar';
import Feed from '../common/Feed';
import LoadingSpinner from '../common/LoadingSpinner';
import { useGetArticleFeeds } from '../../hooks/article.hook';
import { FeedType } from '../../types/article';
import { useRouter } from 'next/router';

const Container: FC = () => {
  const router = useRouter();
  const { isLoading, feeds } = useGetArticleFeeds();

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            <>
              {router.isReady &&
                feeds.map((feed: FeedType) => {
                  return (
                    <Feed
                      key={feed.slug}
                      author={feed.author.username}
                      date={feed.createdAt}
                      heart={feed.favoritesCount}
                      title={feed.title}
                      description={feed.description}
                    />
                  );
                })}
            </>
          </div>

          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Container;

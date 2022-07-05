import React, { FC, useEffect, useState } from 'react';
import Sidebar from './SIdebar';
import Feed from '../common/Feed';
import LoadingSpinner from '../common/LoadingSpinner';
import { useGetArticleFeeds } from '../../hooks/article.hook';
import { FeedType } from '../../types/article';
import { getArticleListByOption } from '../../networks/article';
import { useRouter } from 'next/router';

const Container: FC = () => {
  const router = useRouter();
  const { isLoading, feeds, setFeeds } = useGetArticleFeeds();

  const [limit, setLimit] = useState<number>(5);
  const [offset, setOffset] = useState<number>(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [lastIntersectingFeed, setLastIntersectingFeed] = useState<HTMLDivElement | null>(null);

  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setOffset(prev => prev + 5);
        observer.unobserve(entry.target);
      }
    });
  };

  const fetchNextFeed = async () => {
    try {
      setIsFetching(true);
      const { data } = await getArticleListByOption(limit, offset);
      const nextFeed = data.articles;
      setFeeds([...feeds, ...nextFeed]);
      setIsFetching(false);
    } catch {
      console.error('fetching error! (Unauthorized)');
    }
  };

  useEffect(() => {
    fetchNextFeed();
  }, [offset]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastIntersectingFeed) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1.0 });
      observer.observe(lastIntersectingFeed);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingFeed]);

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
                      slug={feed.slug}
                      key={feed.slug}
                      author={feed.author.username}
                      date={feed.createdAt}
                      heart={feed.favoritesCount}
                      title={feed.title}
                      description={feed.description}
                      inRef={setLastIntersectingFeed}
                    />
                  );
                })}
              {isFetching && <LoadingSpinner />}
            </>
          </div>

          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Container;

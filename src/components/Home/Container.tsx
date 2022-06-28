import React, { FC, useEffect, useState } from 'react';
import Sidebar from './SIdebar';
import Feed from '../common/Feed';
import LoadingSpinner from '../common/LoadingSpinner';
import { useGetArticleFeeds } from '../../hooks/article.hook';
import { FeedType } from '../../types/article';
import { useRouter } from 'next/router';
import { apiWithAuth } from '../../config/api';

const Container: FC = () => {
  const router = useRouter();
  const { isLoading, feeds, getFeedArticlesScroll, scrollOnLoading, setFeeds } = useGetArticleFeeds();

  const [newFeed, setNewfeed] = useState<FeedType[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [lastIntersectingFeed, setLastIntersectingFeed] = useState<HTMLDivElement | null>(null);

  const fetchNextFeed = async () => {
    console.log(`다음 Feed 불러오기`);
    try {
      const { data } = await apiWithAuth.get(`/articles?limit=3&offset=${offset}`);
      setNewfeed([...newFeed, data.articles]);
    } catch {
      console.error('불러오기 오류');
    }
  };

  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setOffset(prev => prev + 1);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    console.log(`패칭`);
    fetchNextFeed();
  }, []);

  useEffect(() => {
    console.log(`offset ? :`, offset);
    fetchNextFeed();
  }, [offset]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastIntersectingFeed) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
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
                newFeed.map((feed: FeedType) => {
                  return (
                    <Feed
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
            </>
          </div>

          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Container;

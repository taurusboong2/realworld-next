import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Comment from './Comment';
import { CommentType } from '../../types/comment';
import { fetchCommentList } from '../../networks/comment';

const CommentList = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    (async () => {
      const { data } = await fetchCommentList(slug as string);
      console.log(data);
    })();
  }, []);

  return <>commentlist</>;
};

export default CommentList;

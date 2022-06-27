import React from 'react';
import { useRouter } from 'next/router';
import { CommentType } from '../../types/comment';
import { useFetchCommentList } from '../../hooks/comment.hook';

import Comment from './Comment';

const CommentList = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { isLoading, commentList: comments } = useFetchCommentList(slug as string);

  if (isLoading) return <div>로딩중..</div>;
  return (
    <div>
      {comments.map((comments: CommentType) => (
        <Comment key={comments.id} comment={comments} />
      ))}
    </div>
  );
};

export default CommentList;

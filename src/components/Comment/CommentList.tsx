import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { CommentType } from '../../types/comment';
import { useFetchCommentList } from '../../hooks/comment.hook';
import Comment from './Comment';
import CommentInput from './CommentInput';
import LoadingSpinner from '../common/LoadingSpinner';

const CommentList = () => {
  const router = useRouter();
  const { slug } = router.query;
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const { isLoading, commentList, createComment, addCommentIsLoading, removeComment } = useFetchCommentList(
    slug as string
  );

  const submitCreateComment = async () => {
    await createComment(slug as string, {
      comment: {
        body: commentInputRef.current?.value as string,
      },
    });
  };

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <CommentInput
        addCommentIsLoading={addCommentIsLoading}
        submitCreateComment={submitCreateComment}
        ref={commentInputRef}
      />
      {commentList.map((comments: CommentType) => (
        <Comment key={comments.id} comment={comments} removeComment={removeComment} />
      ))}
    </div>
  );
};

export default CommentList;

import React, { useEffect, useRef } from 'react';
import { useUserContext } from '../../hooks/auth.hook';
import MyLink from '../NavBar/MyLink';
import { addComment, fetchCommentList } from '../../networks/comment';
import { useRouter } from 'next/router';
import { apiWithAuth } from '../../config/api';

const CommentInput = () => {
  const { user } = useUserContext();
  const router = useRouter();
  const { slug } = router.query;
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const submitCreateComment = async () => {
    console.log('서브밋 누름!');
    const { data, config } = await apiWithAuth.post(`/articles/${slug}/comments`, {
      comment: {
        body: commentInputRef.current?.value as string,
      },
    });
    console.log(`전송 data:`, data);
    console.log(`전송 config:`, config);
  };

  useEffect(() => {
    const checkCommentList = async () => {
      const { data } = await fetchCommentList(slug as string);
      console.log(data);
    };
    checkCommentList();
  });

  if (!user) {
    return (
      <p>
        <MyLink href="/user/login" as="/user/login">
          Sign in
        </MyLink>
        &nbsp;or&nbsp;
        <MyLink href="/user/register" as="/user/register">
          sign up
        </MyLink>
        &nbsp;to add comments on this article.
      </p>
    );
  }

  return (
    <form className="card comment-form" onSubmit={submitCreateComment}>
      <div className="card-block">
        <textarea rows={3} className="form-control" placeholder="Write a comment..." ref={commentInputRef} />
      </div>
      <div className="card-footer">
        <img className="comment-author-img" />
        <button className="btn btn-sm btn-primary" type="button" onClick={submitCreateComment}>
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;

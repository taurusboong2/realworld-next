import React, { useRef } from 'react';
import { useUserContext } from '../../hooks/auth.hook';
import MyLink from '../NavBar/MyLink';
import { addComment } from '../../networks/comment';
import { useRouter } from 'next/router';

const CommentInput = () => {
  const { user } = useUserContext();
  const router = useRouter();
  const { slug } = router.query;
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const submitCreateComment = async () => {
    const { data } = await addComment(slug as string, {
      comment: {
        body: commentInputRef.current?.value as string,
      },
    });
    console.log(`전송 data:`, data);
  };

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
        <button className="btn btn-sm btn-primary" type="submit" onClick={submitCreateComment}>
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;

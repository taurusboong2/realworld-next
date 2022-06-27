import React, { useRef } from 'react';
import { useUserContext } from '../../hooks/auth.hook';
import MyLink from '../NavBar/MyLink';
import { useRouter } from 'next/router';
import { useAddComment } from '../../hooks/comment.hook';

const CommentInput = () => {
  const { user } = useUserContext();
  const router = useRouter();
  const { slug } = router.query;
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  console.log(user);

  const { isLoading, createComment } = useAddComment();

  const submitCreateComment = async () => {
    await createComment(slug as string, {
      comment: {
        body: commentInputRef.current?.value as string,
      },
    });
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
        <img className="comment-author-img" src={user.image as string} />
        <button className="btn btn-sm btn-primary" type="button" onClick={submitCreateComment} disabled={isLoading}>
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;

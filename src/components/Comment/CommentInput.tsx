import React from 'react';
import { useUserContext } from '../../hooks/auth.hook';
import MyLink from '../NavBar/MyLink';

const CommentInput = () => {
  const { user } = useUserContext();
  console.log(user);

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
    <form className="card comment-form">
      <div className="card-block">
        <textarea rows={3} className="form-control" placeholder="Write a comment..." value="" />
      </div>
      <div className="card-footer">
        <image className="comment-author-img" />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;

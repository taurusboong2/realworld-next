import React, { LegacyRef, ForwardRefExoticComponent, forwardRef } from 'react';
import { useUserContext } from '../../hooks/auth.hook';
import MyLink from '../NavBar/MyLink';
import LoadingSpinner from '../common/LoadingSpinner';

type Props = {
  ref: LegacyRef<HTMLInputElement | HTMLTextAreaElement> | undefined;
  addCommentIsLoading: boolean;
  submitCreateComment: () => void;
};

const CommentInput: ForwardRefExoticComponent<Props> = forwardRef((props, ref) => {
  const { user } = useUserContext();

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

  if (props.addCommentIsLoading) return <LoadingSpinner />;
  return (
    <form className="card comment-form" onSubmit={props.submitCreateComment}>
      <div className="card-block">
        <textarea rows={3} className="form-control" placeholder="Write a comment..." ref={ref} />
      </div>
      <div className="card-footer">
        <img className="comment-author-img" src={user.image as string} />
        <button
          className="btn btn-sm btn-primary"
          type="button"
          onClick={props.submitCreateComment}
          disabled={props.addCommentIsLoading}>
          Post Comment
        </button>
      </div>
    </form>
  );
});

export default CommentInput;

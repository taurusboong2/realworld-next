import React, { FC } from 'react';

import MyLink from '../NavBar/MyLink';
import { CommentType } from '../../types/comment';

type Props = {
  comment: CommentType;
};

const Comment: FC<Props> = ({ comment }) => {
  console.log(comment);

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <MyLink href="/profile" className="comment-author" as={`/profile/${comment.author.username}`}>
          <img src={comment.author.image} alt="Comment author's profile image" className="comment-author-img" />
        </MyLink>
        &nbsp;
        <MyLink href="profile/[pid]" className="comment-author" as={`/profile/${comment.author.username}`}>
          {comment.author.username}
        </MyLink>
        <span className="date-posted">{new Date(comment.createdAt).toDateString()}</span>
      </div>
    </div>
  );
};

export default Comment;

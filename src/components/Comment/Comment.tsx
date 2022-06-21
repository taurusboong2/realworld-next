import React from 'react';

import MyLink from '../NavBar/MyLink';

const Comment = () => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">커멘트바디</p>
      </div>
      <div className="card-footer">
        <MyLink href="profile/[pid]" className="comment-author">
          <image src="" alt="Comment author's profile image" className="comment-author-img" />
        </MyLink>
        &nbsp;
        <MyLink href="profile/[pid]" className="comment-author">
          유저네임
        </MyLink>
        <span className="date-posted">생성시간</span>
      </div>
    </div>
  );
};

export default Comment;

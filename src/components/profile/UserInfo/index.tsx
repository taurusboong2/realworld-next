import React, { FC } from 'react';

type Props = {
  userName?: string;
  userBio?: string;
  userImage?: string;
};

const UserInfo: FC<Props> = ({ userName, userBio, userImage }) => {
  return (
    <>
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={userImage} className="user-img" />
              <h4>{userName}</h4>
              <p>{userBio}</p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round" />
                &nbsp; Follow {userName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;

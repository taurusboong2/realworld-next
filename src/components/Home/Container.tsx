import React, { FC } from 'react';
import Sidebar from './SIdebar';
import Feed from './Feed';

const Container: FC = () => {
  return (
    <>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            <Feed
              author="BOONG"
              date="July 1"
              heart={30}
              title="make realworld web"
              description="this is description"
            />

            <Feed
              author="BOONG"
              date="July 2"
              heart={17}
              title="dont lost your time plz"
              description="this is description222"
            />
          </div>

          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Container;

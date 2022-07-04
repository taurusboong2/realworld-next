import React, { useEffect } from 'react';
import Tag from './Tag';
import { fetchTags } from '../../networks/article';

const Sidebar = () => {
  useEffect(() => {
    (async () => {
      const response = await fetchTags();
      console.log(response);
    })();
  }, []);

  return (
    <>
      <div className="col-md-3">
        <div className="sidebar">
          <p>Popular Tags</p>

          <div className="tag-list">
            <Tag tagName="programming" />
            <Tag tagName="javascript" />
            <Tag tagName="HTML5" />
            <Tag tagName="CSS3" />
            <Tag tagName="typescript" />
            <Tag tagName="react" />
            <Tag tagName="next.js" />
            <Tag tagName="node.js" />
            <Tag tagName="webpack" />
            <Tag tagName="babel" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

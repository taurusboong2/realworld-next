import React from 'react';

const ArticleContainer = ({ article }) => {
  if (!article) return;
  return (
    <>
      <div className="row article-content">
        <div className="col-md-12">
          <p>{article.description}</p>
          <p>body: {article.body}</p>
          <ul className="tag-list">
            {article.tagList &&
              article.tagList.map(tag => (
                <li key={tag} className="tag-default tag-pill tag-outline">
                  {tag}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArticleContainer;

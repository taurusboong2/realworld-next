import React from 'react';

const ArticleContainer = ({ article }) => {
  if (!article) return;
  return (
    <>
      <div className="row article-content">
        <div className="col-md-12">
          <p>{article.description}</p>
          <p>body: {article.body}</p>
        </div>
      </div>
    </>
  );
};

export default ArticleContainer;

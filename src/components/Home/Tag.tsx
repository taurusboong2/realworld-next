import React, { FC } from 'react';

type Props = {
  tagName: string;
  href?: URL;
};

const Tag: FC<Props> = ({ tagName }) => {
  return (
    <>
      <a href="" className="tag-pill tag-default">
        {tagName}
      </a>
    </>
  );
};

export default Tag;

import React, { FC, useRef } from 'react';

type Props = {
  tagList: string[] | [];
  pushTag: (e: string) => void;
  deleteTags: (e: number) => void;
};

const TagInput: FC<Props> = ({ tagList, pushTag, deleteTags }) => {
  const tagRef = useRef<HTMLInputElement>(null);

  const handleTagInputkeyDown = e => {
    switch (e.keyCode) {
      case 13:
        pushTag(tagRef.current?.value as string);
        tagRef.current!.value = '';
    }
  };

  const handleremoveTags = index => {
    deleteTags(index);
  };

  return (
    <>
      <fieldset className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter tags"
          ref={tagRef}
          onKeyDown={handleTagInputkeyDown}
        />

        <div className="tag-list">
          {tagList.map((tag, index) => (
            <span className="tag-default tag-pill" key={index}>
              <i className="ion-close-round" onClick={() => handleremoveTags(tag)} />
              {tag}
            </span>
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default TagInput;

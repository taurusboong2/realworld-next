import React, { FC, useRef } from 'react';

type Props = {
  tagList: string[] | [];
  pushTag: (newTag: string) => void;
  deleteTags: (index: number) => void;
};

const EnterKeyCode = 13;

const TagInput: FC<Props> = ({ tagList, pushTag, deleteTags }) => {
  const tagRef = useRef<HTMLInputElement>(null);

  const handleTagInputkeyDown = e => {
    switch (e.keyCode) {
      case EnterKeyCode:
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
              <i className="ion-close-round" onClick={() => handleremoveTags(index)} />
              {tag}
            </span>
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default TagInput;

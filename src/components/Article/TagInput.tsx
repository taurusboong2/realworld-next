import React, { FC, useRef } from 'react';

type Props = {
  tagList: string[] | [];
  pushTag: (e: string) => void;
  setTagList: React.Dispatch<React.SetStateAction<[] | string[]>>;
};

const TagInput: FC<Props> = ({ tagList, pushTag, setTagList }) => {
  const tagRef = useRef<HTMLInputElement>(null);

  const handleTagInputkeyDown = e => {
    switch (e.keyCode) {
      case 13:
        pushTag(tagRef.current?.value as string);
        tagRef.current.value = '';
    }
  };

  const deleteTags = (i: number) => {
    setTagList(tagList.filter(e => e.i !== i));
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
          {tagList.map((tag, i) => (
            <span className="tag-default tag-pill" key={i}>
              <i className="ion-close-round" onClick={() => deleteTags(i)} />
              {tag}
            </span>
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default TagInput;

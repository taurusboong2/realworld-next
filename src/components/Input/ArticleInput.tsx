import React, { ForwardRefExoticComponent, RefAttributes, RefObject, forwardRef } from 'react';

type Props = {
  ref: RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>;
  input: boolean;
  placeholder: string;
};

const ArticleInput: ForwardRefExoticComponent<Props> = forwardRef((props, ref) => {
  return (
    <>
      {props.input ? (
        <fieldset className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder={props.placeholder} ref={ref} />
        </fieldset>
      ) : (
        <fieldset className="form-group">
          <textarea className="form-control" rows={8} placeholder={props.placeholder} ref={ref} />
        </fieldset>
      )}
    </>
  );
});

export default ArticleInput;

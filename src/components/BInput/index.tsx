import React, { forwardRef } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const BInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} className="form-control form-control-lg" {...props} />;
});

export default BInput;

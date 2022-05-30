import React, { FC } from 'react';

type Props = React.HTMLAttributes<HTMLFieldSetElement>;

const BFieldset: FC<Props> = props => {
  const { children, ...rest } = props;

  return (
    <fieldset className="form-group" {...rest}>
      {children}
    </fieldset>
  );
};

export default BFieldset;

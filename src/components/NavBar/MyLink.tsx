import React from 'react';
import Link from 'next/link';

type Props = {
  href: string | object;
  as?: string;
  className?: string;
  children?: React.ReactNode;
};

const MyLink = ({ className, href, children, as }: Props) => (
  <Link href={href} passHref as={as}>
    <a className={className}>{children}</a>
  </Link>
);

export default MyLink;

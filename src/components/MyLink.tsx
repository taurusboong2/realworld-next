import React from 'react';
import Link from 'next/link';

type Props = {
  className?: string;
  href: string;
  children?: any;
};

const MyLink = ({ className, href, children }: Props) => (
  <Link href={href} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default MyLink;

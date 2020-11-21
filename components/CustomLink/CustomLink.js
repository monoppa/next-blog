import React from 'react';
import { string } from 'prop-types';
import Link from 'next/link';

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
    </>
  );
}

CustomLink.propTypes = {
  as: string.isRequired,
  href: string.isRequired,
};

CustomLink.defaultProps = {};

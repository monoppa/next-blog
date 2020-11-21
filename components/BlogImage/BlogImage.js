import React from 'react';
import Image from 'next/image';
import { number, string } from 'prop-types';
import cx from 'classnames';

const BlogImage = ({ className, height, ...rest }) => {
  return (
    <div>
      <div className='relative w-full' style={{ height: `${height || 25}rem` }}>
        <Image
          layout='fill'
          className={cx({
            ['rounded']: true,
            ['object-cover']: !className,
            [className]: !!className,
          })}
          {...rest}
        />
      </div>
      <p
        style={{ marginTop: 2 }}
        className='text-xs italic text-center text-gray-400'
      >
        {rest.alt}
      </p>
    </div>
  );
};

BlogImage.propTypes = {
  className: string,
  height: number,
};

BlogImage.defaultProps = {
  className: '',
  height: 0,
};

export default BlogImage;

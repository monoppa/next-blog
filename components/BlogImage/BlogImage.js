/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { number, string } from 'prop-types';
import cx from 'classnames';

const BlogImage = ({ className, height, ...rest }) => {
  return (
    <div className='mb-12'>
      <div className='relative w-full' style={{ height: height || 350 }}>
        <Image
          layout='fill'
          // width={768}
          // height={height || 512}
          className={cx({
            ['rounded z-10']: true,
            ['object-cover object-center']: !className,
            [className]: !!className,
          })}
          {...rest}
        />
        <div className='absolute top-0 object-cover w-full h-full bg-gray-300 rounded animate-pulse' />
      </div>
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

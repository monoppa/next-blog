import React from 'react';
import Image from 'next/image';
import { number, string } from 'prop-types';
import cx from 'classnames';

const BlogImage = ({ className, height, ...rest }) => {
  return (
    <div className='mb-12'>
      <div className='relative w-full'>
        <Image
          width={768}
          height={height || 512}
          className={cx({
            ['rounded']: true,
            ['object-cover']: !className,
            [className]: !!className,
          })}
          {...rest}
        />
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

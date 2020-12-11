import React, { useState } from 'react';
import Image from 'next/image';
import { string } from 'prop-types';
import cx from 'classnames';
import useDebounceCallback from 'hooks/useDebounceCallback';
import useWindowSize from 'hooks/useWindowSize';

const CardBlog = (props) => {
  const { title, publishDate, timeToRead, description, coverImage } = props;
  const [hovered, hoveredSet] = useState(false);

  const [handleMouseEnter] = useDebounceCallback(
    () => {
      hoveredSet(true);
    },
    300,
    { leading: true }
  );

  const [handleMouseLeave] = useDebounceCallback(
    () => {
      hoveredSet(false);
    },
    300,
    { leading: true }
  );

  const [windowWidth] = useWindowSize();

  return (
    <div
      className='flex flex-col items-center md:flex-row'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cx({
          ['hidden relative w-auto mr-12 transition-all ease-in-out transform rounded md:w-1/2 duration-300 md:flex']: true,
          ['shadow-2xl scale-105']: hovered,
          ['shadow-xl']: !hovered,
        })}
      >
        {windowWidth >= 768 && (
          <Image
            src={`data:image/jpg;base64, ${coverImage}`}
            alt={props.title}
            className='flex-1 object-cover rounded'
            width={528}
            height={200}
          />
        )}
        {/* <img
          src={props.tImage}
          className='flex-1 object-cover rounded'
          width={528}
          height={200}
        /> */}
      </div>

      <div className='container flex flex-col justify-center w-full max-w-xl md:py-3 md:w-1/2'>
        <div>
          <div className='px-1 pt-8 mb-4 md:pt-0'>
            <h2
              className={cx({
                ['text-2xl font-bold']: true,
                ['text-violet-600']: hovered,
                ['text-gray-900 dark:text-gray-200']: !hovered,
              })}
            >
              {title}
            </h2>

            <time className='text-sm font-light text-gray-600 dark:text-gray-400'>{`${publishDate} • ${timeToRead}`}</time>

            <p className='pt-4 font-light tracking-wide text-gray-800 dark:text-gray-400'>
              {description}
            </p>
          </div>

          <button className='inline-block p-1 text-sm transition-transform duration-100 transform cursor-pointer text-primary-600 hover:bg-primary-600 hover:text-white hover:-translate-y-1 hover:shadow-lg focus:translate-y-0 focus:outline-none'>
            <span className='pb-1 border-b border-primary-600'>
              Read more &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

CardBlog.propTypes = {
  title: string.isRequired,
  publishDate: string.isRequired,
  timeToRead: string.isRequired,
  description: string.isRequired,
  coverImage: string.isRequired,
};

CardBlog.defaultProps = {};

export default CardBlog;

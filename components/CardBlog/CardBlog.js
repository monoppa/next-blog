import React, { useState } from 'react';
import Image from 'next/image';
import {} from 'prop-types';
import cx from 'classnames';
import useDebounceCallback from 'hooks/useDebounceCallback';

const BLOG = {
  title: 'How to dynamically create responsive images with NextJS',
  publishDate: 'May 2020',
  timeToRead: 5,
  description: 'Building a serverless image transformation API with NextJS',
};

const CardBlog = () => {
  const { title, publishDate, timeToRead, description } = BLOG;
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

  return (
    <div
      className='flex flex-col md:flex-row'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cx({
          ['relative w-full mr-12 transition-all ease-in-out transform rounded md:w-1/2 duration-300']: true,
          ['shadow-2xl scale-105']: hovered,
          ['shadow-xl']: !hovered,
        })}
      >
        <Image
          src='/photo-face.jpg'
          layout='fill'
          className='object-cover rounded'
        />
        {/* <Img
          className={[
            'block mr-4 rounded-tr-blog rounded-br-blog rounded-tl-blog shadow-nonde',
            'lg:hidden md:rounded-tr-sm md:rounded-br-sm md:rounded-tl-sm md:shadow-blog',
          ].join(' ')}
          fluid={smCoverImage.childImageSharp.fluid}
        /> */}

        {/* <div
          style={{
            transform: scale.interpolate((scale) => `scale(${scale})`),
          }}
        >
          <Img
            className={[
              'hidden lg:block rounded-sm',
              ...(hovered ? ['shadow-blog-sm'] : ['shadow-blog']),
            ].join(' ')}
            fluid={lgCoverImage.childImageSharp.fluid}
          />
        </div> */}
      </div>

      <div className='container flex flex-col justify-center w-full max-w-xl md:py-3 md:w-1/2'>
        <div>
          <div className='px-1 pt-8 mb-4 md:pt-0'>
            <h2
              className={cx({
                ['text-2xl font-medium']: true,
                ['text-violet-600']: hovered,
                ['text-gray-900 dark:text-gray-200']: !hovered,
              })}
            >
              {title}
            </h2>

            <time className='text-sm font-medium text-gray-600 opacity-75 dark:text-gray-400'>{`${publishDate} • ${timeToRead} min read`}</time>

            <p className='pt-4 font-light text-gray-700 dark:text-gray-400'>
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

CardBlog.propTypes = {};

CardBlog.defaultProps = {};

export default CardBlog;

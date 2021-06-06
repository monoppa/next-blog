import React, { useState } from 'react';
import { string } from 'prop-types';
import { useSpring, animated } from 'react-spring';
import useDebounceCallback from 'hooks/useDebounceCallback';
import cx from 'classnames';

const PlaylistCard = (props) => {
  const [hover, setHover] = useState(false);

  const [handleMouseEnter] = useDebounceCallback(
    () => {
      setHover(true);
    },
    300,
    { leading: true }
  );

  const [handleMouseLeave] = useDebounceCallback(
    () => {
      setHover(false);
    },
    300,
    { leading: true }
  );

  const { radius, radiusTopLeft, o } = useSpring({
    radius: hover ? 100 : 0,
    radiusTopLeft: hover ? 100 : 16,
    o: hover ? 1 : 0,
  });

  return (
    <div
      className='flex py-4'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='relative flex items-center flex-shrink-0 mr-3 lg:mr-6'>
        <animated.img
          src={props.image}
          width={100}
          height={100}
          className={cx('rounded shadow', {
            rotate: hover,
          })}
          style={{
            borderTopRightRadius: radius,
            borderTopLeftRadius: radiusTopLeft,
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius,
          }}
          loading='lazy'
        />

        <animated.span
          className={cx('absolute w-6 h-6 rounded-full dark:bg-dim bg-white')}
          style={{
            left: '50%',
            bottom: '50%',
            transform: 'translate(-50%, 50%)',
            opacity: o.to((n) => n),
          }}
        />
      </div>

      <div className='items-center'>
        <h3
          className={cx(
            'text-xl font-bold lg:text-2xl',
            { 'text-primary-600': hover },
            { 'text-gray-900 dark:text-gray-200': !hover }
          )}
        >
          {props.title}
        </h3>
        <p className='pt-1 font-light tracking-wide text-gray-800 dark:text-gray-400'>
          {props.description}
        </p>
      </div>
    </div>
  );
};

PlaylistCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
};

PlaylistCard.defaultProps = {};

export default PlaylistCard;

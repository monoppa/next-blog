import React from 'react';
import { string } from 'prop-types';
import Image from 'next/image';

const PlaylistCard = (props) => {
  return (
    <div className='flex py-4'>
      <div className='flex items-center mr-3 lg:mr-6'>
        <Image
          src={props.image}
          width={100}
          height={100}
          className='rounded shadow rounded-tl-2xl'
        />
      </div>

      <div className='items-center'>
        <h3 className='text-xl font-bold text-gray-900 lg:text-2xl dark:text-gray-200'>
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

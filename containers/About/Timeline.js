import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

const Timeline = () => {
  return (
    <section className='grid grid-cols-2 gap-4 mt-2'>
      <div className='flex flex-col space-y-4'>
        <ul>
          <li>
            <TimelineCard
              title='Joined Luxor'
              desc='Maintainer dev for one of the largest mining pool in NA.'
              link='https://luxor.tech/'
              year='2021'
            />

            <TimelineCard
              title='Piano'
              desc='Nothing to see here. Just me channelling my inner Mozart.'
              year='2020'
            />

            <TimelineCard
              title='Monoppa blog'
              desc='I started to write on Medium.com, later on the blog is re-branded to monoppa.com'
              containerClasses='bg-primary-500 text-white'
              year='2018'
            />
          </li>
        </ul>
      </div>

      <div className='flex flex-col space-y-4'>
        <ul>
          <li>
            <TimelineCard
              title='Torabel'
              desc='Building services/tools for people who loves to travel.'
              link='https://torabel.com/'
              containerClasses='bg-blue-400 text-white'
              year='2021'
            />

            <TimelineCard
              title='Joined Innovation Love'
              desc='Worked with the team behind one of the biggest online marketplace as maintainer dev for a real-estate platform.'
              year='2019'
              link='https://innovationlove.ph/ilove'
            />

            <TimelineCard
              title='Work with startup companies'
              desc={`The year I quit my job and decided to have a taste what it's like working with startups`}
              year='2018'
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;

const TimelineCard = ({ title, desc, containerClasses, link, year }) => {
  return (
    <div
      className={cx(
        {
          'p-6 my-4 space-y-2 rounded-xl': true,
          'bg-black text-white': !containerClasses,
        },
        containerClasses
      )}
    >
      <div className='flex items-center justify-between'>
        <Link href={link || '#'}>
          <a className='flex items-center space-x-2'>
            <h3 className='text-xl font-bold leading-tight'>{title}</h3>

            {!!link && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </a>
        </Link>

        {!!year && <p className='text-xs font-bold'>{`(${year})`}</p>}
      </div>

      <p className=''>{desc}</p>
    </div>
  );
};

import React from 'react';
import {} from 'prop-types';
import Image from 'next/image';

import Layout from 'components/Layout';
import CustomHead from 'components/CustomHead';
import SingleDotPattern from 'components/DotPattern/SingleDotPattern';
import LocationIconSm from 'components/Icons/LocationIconSm';
import Link from 'next/link';

const timeline2020 = [
  {
    title: 'Torabel - new project',
    desc: `I am working on something I can call my own. Excited to
see how this project will evolve.`,
  },
  {
    title: 'Bought a piano',
    desc: `I am so into Debussy's music so I decided to learn to play the piano.`,
  },
];

const timeline2019 = [
  {
    title: 'Joined Innovation Love',
    desc: `Joined the team behind OLX.ph, one of the biggest online marketplace during its time.`,
  },
];

const timeline2018 = [
  {
    title: 'Start a blog',
    desc: `I started to write on Medium.com, later on the blog is re-branded to monoppa.com`,
  },
  {
    title: 'Work with startup companies',
    desc: `The year I quit my job and decided to have a taste what it's like working with startups`,
  },
];

const About = () => {
  return (
    <Layout>
      <CustomHead pageTitle='About Me' />

      <div className='overflow-hidden bg-white dark:bg-dim'>
        <div className='relative max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
          <div className='absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 dark:bg-dim left-3/4'></div>
          <div className='mx-auto text-base max-w-prose lg:max-w-none'>
            <h2 className='text-base font-semibold tracking-wide uppercase text-primary-600'>
              About the author
            </h2>
            <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
              Meet Mon
            </h3>
          </div>

          <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:row-start-1 lg:col-start-2'>
              <SingleDotPattern />

              <div className='relative mx-auto text-base max-w-prose lg:max-w-none'>
                <figure>
                  <div className='aspect-w-12 aspect-h-7 lg:aspect-h-16'>
                    <Image
                      src='/bora-me.jpg'
                      className='block object-cover object-center rounded-lg shadow-lg'
                      alt='Mon standing on Boracay beach'
                      layout='fill'
                    />

                    {/* <Image
                      src='/bora-me.jpg'
                      className='object-cover object-center rounded-lg shadow-lg'
                      alt='Mon standing on Boracay beach'
                      width={1184}
                      height={1376}
                    /> */}
                  </div>

                  <figcaption className='flex mt-3 text-sm text-gray-500 dark:text-gray-300'>
                    <LocationIconSm className='flex-none w-5 h-5 text-gray-400 dark:text-gray-200' />

                    <span className='ml-2'>Boracay, PH</span>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className='mt-8 lg:mt-0'>
              <div className='mx-auto text-base max-w-prose lg:max-w-none'>
                <p className='text-lg tracking-wide text-gray-700 dark:text-gray-100'>
                  <span>{`Hey! My friends call me Mon. I'm a developer. Sometimes I am a UI designer and a writer. I am currently working on a project called`}</span>
                  &nbsp;
                  <span>
                    <Link href='https://torabel.com/'>
                      <a className='border-b border-gray-700 dark:border-gray-100'>
                        Torabel.
                      </a>
                    </Link>
                  </span>
                </p>
              </div>

              <div className='mx-auto mt-5 text-base tracking-wide prose text-gray-700 dark:prose-dark dark:text-gray-200 lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <p>
                  I grew up in a small town in the Philippines, and went to a
                  school called Mapua University, graduating with a degree in
                  Computer Engineering.
                </p>
                <p>
                  I spend my free time swimming and running. I am currently
                  learning to play the piano.
                </p>

                <h2>Timeline</h2>

                <h4>2020</h4>
                <ul>
                  {timeline2020.map(({ title, desc }) => (
                    <li key={title}>
                      <div className='mb-2 font-bold'>{title}</div>
                      <div className='text-gray-500 dark:text-gray-300'>
                        {desc}
                      </div>
                    </li>
                  ))}
                </ul>

                <h4>2019</h4>
                <ul>
                  {timeline2019.map(({ title, desc }) => (
                    <li key={title}>
                      <div className='mb-2 font-bold'>{title}</div>
                      <div className='text-gray-500 dark:text-gray-300'>
                        {desc}
                      </div>
                    </li>
                  ))}
                </ul>

                <h4>2018</h4>
                <ul>
                  {timeline2018.map(({ title, desc }) => (
                    <li key={title}>
                      <div className='mb-2 font-bold'>{title}</div>
                      <div className='text-gray-500 dark:text-gray-300'>
                        {desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

About.propTypes = {};

About.defaultProps = {};

export default About;

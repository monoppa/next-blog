import React, { useMemo } from 'react';
import Image from 'next/image';

import Layout from 'components/Layout';
import CustomHead from 'components/CustomHead';
import Timeline from './Timeline';

const About = () => {
  return (
    <Layout>
      <CustomHead pageTitle='About Me' />

      <main className='max-w-3xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <section className='flex items-center w-full px-10 py-5 space-x-6 bg-black rounded-xl'>
          <span className='flex grow-0 shrink-0'>
            <Image
              src='/mon_avatar.jpeg'
              alt=''
              height={80}
              width={80}
              className='rounded-full'
            />
          </span>

          <span className='text-white '>
            <h1 className='text-2xl font-bold'>{`Hey, I'm Mon 👋`}</h1>
            <p className='text-lg font-light text-gray-300'>
              Passionate about anything tech. Building for impact.
            </p>
          </span>
        </section>

        <Timeline />
      </main>
    </Layout>
  );
};

About.propTypes = {};

About.defaultProps = {};

export default About;

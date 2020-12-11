import React from 'react';
import {} from 'prop-types';
import Image from 'next/image';

import Layout from 'components/Layout';
import CustomHead from 'components/CustomHead';
import SingleDotPattern from 'components/DotPattern/SingleDotPattern';
import LocationIconSm from 'components/Icons/LocationIconSm';

const About = () => {
  return (
    <Layout>
      <CustomHead pageTitle='About' />

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
                <p className='text-lg text-gray-500 dark:text-gray-100'>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </div>

              <div className='mx-auto mt-5 prose text-gray-500 dark:text-gray-100 lg:max-w-none lg:row-start-1 lg:col-start-1 prose-primary'>
                <p>
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p>
                <p>
                  Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique
                  sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum
                  et et et sit. Faucibus sed non gravida lectus dignissim
                  imperdiet a.
                </p>
                <p>
                  Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                  lorem arcu, metus, egestas netus cursus. In.
                </p>
                <ul>
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>

                <h3>Career</h3>
                <p>
                  Tincidunt integer commodo, cursus etiam aliquam neque, et.
                  Consectetur pretium in volutpat, diam. Montes, magna cursus
                  nulla feugiat dignissim id lobortis amet. Laoreet sem est
                  phasellus eu proin massa, lectus. Diam rutrum posuere donec
                  ultricies non morbi. Mi a platea auctor mi.
                </p>
                <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
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

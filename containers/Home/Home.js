import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Link from 'next/link';
import Layout from 'components/Layout';
import CardBlog from 'components/CardBlog';
import CustomHead from 'components/CustomHead/CustomHead';
import Playlists from './sections/Playlists';

const Home = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <CustomHead />

      <main className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='mt-12'>
          <h2 className='text-xl tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl'>
            Latest from the blog
          </h2>

          <ul className='mt-0 mb-12 space-y-8 divide-y divide-gray-100 dark:divide-gray-800 md:mt-8 md:space-y-12 md:divide-transparent'>
            {posts.map((post) => (
              <li key={post.title}>
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <CardBlog {...post} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <Link href='/blog'>
            <a className='inline-flex items-center px-6 py-2 text-base leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-700 button-interactive focus:ring-primary-500'>
              See all blog post &rarr;
            </a>
            {/* <a className='inline-block p-1 text-sm transition-transform duration-100 transform cursor-pointer text-primary-600 hover:bg-primary-600 hover:text-white hover:-translate-y-1 hover:shadow-lg focus:translate-y-0 focus:outline-none'>
              <span className='pb-1 border-b border-primary-600'>
                See all blog post &rarr;
              </span>
            </a> */}
          </Link>
        </div>
      </main>

      <section className='max-w-6xl px-4 py-16 mx-auto sm:px-6'>
        <Playlists />
      </section>

      <section className='max-w-6xl px-4 py-8 mx-auto sm:px-6'>
        <div className='border border-transparent rounded-lg shadow bg-gray-50 dark:bg-transparent dark:border-gray-500'>
          <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
              <span className='block'>Get to know the story</span>
              <span className='block'>behind mon oppa</span>
            </h2>
            <div className='mt-8 lex lg:mt-0 lg:flex-shrink-0'>
              <div className='inline-flex rounded-md shadow'>
                <Link href='/about'>
                  <a className='inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-700 hover:bg-primary-800 button-interactive'>
                    Say hi!
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

Home.propTypes = {
  posts: arrayOf(
    shape({
      title: string.isRequired,
      coverImage: string.isRequired,
      timeToRead: string.isRequired,
      description: string.isRequired,
      slug: string.isRequired,
    })
  ),
};

Home.defaultProps = {};

export default Home;

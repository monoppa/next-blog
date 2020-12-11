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

          <ul className='mt-0 mb-8 space-y-8 divide-y divide-gray-100 dark:divide-gray-800 md:mt-8 md:space-y-12 md:divide-transparent'>
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
            <a className='inline-block p-1 text-sm transition-transform duration-100 transform cursor-pointer text-primary-600 hover:bg-primary-600 hover:text-white hover:-translate-y-1 hover:shadow-lg focus:translate-y-0 focus:outline-none'>
              <span className='pb-1 border-b border-primary-600'>
                See all blog post &rarr;
              </span>
            </a>
          </Link>
        </div>
      </main>

      <section className='max-w-6xl px-4 py-16 mx-auto sm:px-6'>
        <Playlists />
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

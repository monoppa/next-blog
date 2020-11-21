import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Link from 'next/link';
import Layout from 'components/Layout';
import CardBlog from 'components/CardBlog';

const Home = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <main className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='mt-12'>
          <h2 className='text-xl tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl'>
            Latest from the blog
          </h2>

          <ul className='mt-8 space-y-20'>
            {posts.map((post) => (
              <li key={post.title}>
                <Link href='/'>
                  <a>
                    <CardBlog {...post} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
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
    })
  ),
};

Home.defaultProps = {};

export default Home;

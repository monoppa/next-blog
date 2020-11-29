import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Link from 'next/link';
import Layout from 'components/Layout';
import CardBlog from 'components/CardBlog';
import CustomHead from 'components/CustomHead/CustomHead';

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

          <ul className='mt-0 space-y-8 divide-y divide-gray-100 md:mt-8 md:space-y-20 md:divide-transparent'>
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
      slug: string.isRequired,
    })
  ),
};

Home.defaultProps = {};

export default Home;

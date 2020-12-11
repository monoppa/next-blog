import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Link from 'next/link';

import Layout from 'components/Layout';
import CustomHead from 'components/CustomHead';
import CardBlog from 'components/CardBlog';

const BlogList = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <CustomHead pageTitle='Blogs' />

      <main className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='mt-12'>
          <h2 className='text-xl tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl'>
            All blog posts
          </h2>

          <ul className='mt-0 space-y-8 md:mt-8 md:space-y-12'>
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

BlogList.propTypes = {
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

BlogList.defaultProps = {};

export default BlogList;

import React from 'react';
import { shape, string } from 'prop-types';
import Head from 'next/head';
import hydrate from 'next-mdx-remote/hydrate';

import Layout from 'components/Layout';
import BlogImage from 'components/BlogImage';
import CustomLink from 'components/CustomLink';
import CustomHead from 'components/CustomHead/CustomHead';

const components = {
  a: CustomLink,
  Image: BlogImage,
  Head,
  //   TestComponent: dynamic(() => import('../../components/TestComponent')),
};

const Blog = (props) => {
  const { frontMatter } = props;
  const content = hydrate(props.source, { components });

  return (
    <Layout>
      <CustomHead
        pageTitle={frontMatter.title}
        description={frontMatter.description}
      />

      <div className='max-w-6xl px-4 mx-auto mt-20 post-header lg:px-0'>
        <main className='mx-auto mb-12 prose lg:prose-lg dark:prose-dark dark:lg:prose-lg-dark'>
          <h1 style={{ marginBottom: 16 }}>{frontMatter.title}</h1>

          <div className='flex justify-between'>
            <div className='flex'>
              <time className='tracking-wide text-gray-500'>
                {frontMatter.publishDate}
              </time>

              <p
                className='px-2 tracking-wide text-gray-500'
                style={{ margin: 0 }}
              >
                &bull;
              </p>

              <p className='tracking-wide text-gray-500' style={{ margin: 0 }}>
                {frontMatter.timeToRead}
              </p>
            </div>

            {!!props.frontMatter.views && (
              <div className='flex items-center text-gray-500'>
                <span>{props.frontMatter.views}</span>
                &nbsp;
                <span>views</span>
              </div>
            )}
          </div>

          <div className='h-6' />

          <BlogImage
            src={`data:image/jpg;base64, ${frontMatter.coverImage}`}
            alt={frontMatter.title}
            className='flex-1 object-cover rounded'
          />
        </main>

        <article className='mx-auto prose lg:prose-lg dark:prose-dark dark:lg:prose-lg-dark'>
          {content}
        </article>
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  frontMatter: shape({
    title: string.isRequired,
    publishDate: string.isRequired,
    coverImage: string.isRequired,
    timeToRead: string.isRequired,
  }).isRequired,
  source: shape({}).isRequired,
};

Blog.defaultProps = {};

export default Blog;

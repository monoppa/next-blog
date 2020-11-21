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
        <main className='mx-auto mb-12 prose lg:prose-lg'>
          <h1 style={{ marginBottom: 16 }}>{frontMatter.title}</h1>

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

          <div className='h-6' />

          <BlogImage
            src={frontMatter.coverImage}
            layout='fill'
            className='object-cover'
          />
        </main>

        <article className='mx-auto prose lg:prose-lg'>{content}</article>
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

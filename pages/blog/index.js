import React from 'react';
import {} from 'prop-types';
import BlogList from 'containers/BlogList';
import asyncFor from 'utils/asyncFor';

const BlogListPage = (props) => {
  return <BlogList {...props} />;
};

export async function getStaticProps() {
  const fs = (await import('fs')).default;
  const matter = (await import('gray-matter')).default;
  const path = (await import('path')).default;
  const readingTime = (await import('reading-time')).default;
  const dayjs = (await import('dayjs')).default;
  const sharp = (await import('sharp')).default;
  const mdxUtils = await import('utils/mdxUtils');

  // const postsMap = mdxUtils.postFilePaths.map((filePath) => {
  //   const source = fs.readFileSync(path.join(mdxUtils.POSTS_PATH, filePath));
  //   const { content, data } = matter(source);

  //   const stats = readingTime(JSON.stringify(content));

  //   const { publishDate: publishDateRaw, ...restData } = data;
  //   const publishDate = dayjs(publishDateRaw).format('MMMM YYYY');

  //   return {
  //     ...restData,
  //     timeToRead: stats.text,
  //     publishDate,
  //     publishDateString: dayjs(publishDateRaw).toISOString(),
  //     // tImage,
  //   };
  // });

  const postsMap = [];

  await asyncFor(mdxUtils.postFilePaths, async (filePath) => {
    const source = fs.readFileSync(path.join(mdxUtils.POSTS_PATH, filePath));
    const { content, data } = matter(source);

    const publicDir = path.join(process.cwd(), 'public');

    const transform = await sharp(publicDir + data.coverImage)
      .resize(528, 200, { fit: 'cover' })
      .jpeg({ progressive: true })
      .toBuffer();

    const coverImage = transform.toString('base64');

    const stats = readingTime(JSON.stringify(content));

    const { publishDate: publishDateRaw, ...restData } = data;
    const publishDate = dayjs(publishDateRaw).format('MMMM YYYY');

    postsMap.push({
      ...restData,
      timeToRead: stats.text,
      publishDate,
      publishDateString: dayjs(publishDateRaw).toISOString(),
      coverImage,
    });
  });

  const posts = postsMap.sort(
    (post1, post2) =>
      dayjs(post2.publishDateString) - dayjs(post1.publishDateString)
  );

  return { props: { posts } };
}

export default BlogListPage;

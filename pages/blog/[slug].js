import { useEffect } from 'react';
import Head from 'next/head';
import Blog from 'containers/Blog';
import BlogImage from 'components/BlogImage';
import CustomLink from 'components/CustomLink';
import { object } from 'prop-types';
import to from 'await-to-js';

export default function BlogPage(props) {
  useEffect(() => {
    const viewCache = window.localStorage.getItem(`${props.frontMatter.slug}`);

    const isViewed = viewCache === 'ok';
    if (!isViewed) {
      fetch(`/api/view/${props.frontMatter.slug}`)
        .then(() => {
          window.localStorage.setItem(`${props.frontMatter.slug}`, 'ok');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.frontMatter.slug]);

  return <Blog {...props} />;
}

BlogPage.propTypes = {
  frontMatter: object.isRequired,
};

export const getStaticProps = async ({ params }) => {
  const fs = (await import('fs')).default;
  const readingTime = (await import('reading-time')).default;
  const matter = (await import('gray-matter')).default;
  const renderToString = (await import('next-mdx-remote/render-to-string'))
    .default;
  const path = (await import('path')).default;
  const dayjs = (await import('dayjs')).default;
  const POSTS_PATH = (await import('utils/mdxUtils')).POSTS_PATH;

  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const components = {
    a: CustomLink,
    Image: BlogImage,
    Head,
  };

  const { publishDate: publishDateRaw, ...restData } = data;

  const publishDate = dayjs(publishDateRaw).format('MMMM YYYY');

  const stats = readingTime(JSON.stringify(content));

  const sharp = (await import('sharp')).default;
  const publicDir = path.join(process.cwd(), 'public');

  const transform = await sharp(publicDir + data.coverImage)
    .resize(650, 350)
    .jpeg({ progressive: true })
    .toBuffer();

  const coverImage = transform.toString('base64');

  const frontMatter = {
    ...restData,
    publishDate,
    timeToRead: stats.text,
    coverImage,
  };

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontMatter,
  });

  // get views
  const fetch = (await import('isomorphic-unfetch')).default;
  const absoluteUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://monoppa.com'
      : 'http://localhost:3000';

  const [errorGetViews, resGetViews] = await to(
    fetch(`${absoluteUrl}/api/getViews/${frontMatter.slug}`)
  );

  if (errorGetViews) {
    return {
      props: {
        source: mdxSource,
        frontMatter,
      },
    };
  }

  const [errorResGetViews, result] = await to(resGetViews.json());
  console.log(
    'file: [slug].js - line 107 - errorResGetViews',
    errorResGetViews
  );

  const views = result?.views || 0;

  return {
    props: {
      source: mdxSource,
      frontMatter: { ...frontMatter, views },
    },
  };
};

export const getStaticPaths = async () => {
  const path = (await import('path')).default;
  const matter = (await import('gray-matter')).default;
  const fs = (await import('fs')).default;
  const postFilePaths = (await import('utils/mdxUtils')).postFilePaths;
  const POSTS_PATH = (await import('utils/mdxUtils')).POSTS_PATH;

  const paths = postFilePaths
    .map((pathItem) => {
      const postFilePath = path.join(POSTS_PATH, pathItem);
      const source = fs.readFileSync(postFilePath);
      const { data } = matter(source);

      return data.slug;
    })
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

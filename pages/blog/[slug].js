import Head from 'next/head';
import Blog from 'containers/Blog';
import BlogImage from 'components/BlogImage';
import CustomLink from 'components/CustomLink';

export default function BlogPage(props) {
  return <Blog {...props} />;
}

export const getStaticProps = async ({ params }) => {
  const fs = (await import('fs')).default;
  const readingTime = (await import('reading-time')).default;
  const matter = (await import('gray-matter')).default;
  const renderToString = (await import('next-mdx-remote/render-to-string'))
    .default;
  const path = (await import('path')).default;
  const POSTS_PATH = (await import('utils/mdxUtils')).POSTS_PATH;

  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const components = {
    a: CustomLink,
    Image: BlogImage,
    Head,
  };

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const stats = readingTime(JSON.stringify(mdxSource.renderedOutput));

  return {
    props: {
      source: mdxSource,
      frontMatter: { ...data, timeToRead: stats.text },
    },
  };
};

export const getStaticPaths = async () => {
  const postFilePaths = (await import('utils/mdxUtils')).postFilePaths;

  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

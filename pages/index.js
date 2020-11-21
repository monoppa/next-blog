import Home from 'containers/Home';

export default function HomePage(props) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const fs = (await import('fs')).default;
  const matter = (await import('gray-matter')).default;
  const path = (await import('path')).default;
  const mdxUtils = await import('utils/mdxUtils');
  const readingTime = (await import('reading-time')).default;
  // const POSTS_PATH = (await import('utils/mdxUtils')).POSTS_PATH;

  const posts = mdxUtils.postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(mdxUtils.POSTS_PATH, filePath));
    const { content, data } = matter(source);

    const stats = readingTime(JSON.stringify(content));

    const { publishDate, ...restData } = data;
    console.log('getStaticProps -> publishDate', publishDate);

    return {
      ...restData,
      timeToRead: stats.text,
    };
  });

  return { props: { posts } };
}

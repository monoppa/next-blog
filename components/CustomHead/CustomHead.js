import Head from 'next/head';
import { node, string } from 'prop-types';

const CustomHead = ({ children, pageTitle, description, ogImage }) => {
  const title = `${
    pageTitle ? `${pageTitle} |` : ''
  } monoppa - Blog by Mon Quindoza`;

  const desc = `${
    description ? description : ''
  } monoppa - Blog by Mon Quindoza`;

  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.png' />
      <meta name='description' content={desc} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={desc} />
      <meta
        name='image'
        property='og:image'
        content={
          `data:image/jpg;base64, ${ogImage}` ||
          'https://firebasestorage.googleapis.com/v0/b/travy-staging.appspot.com/o/opengraph-3.png?alt=media'
        }
      />
      <meta property='og:url' content='https://monoppa.com/' />
      <meta
        name='keywords'
        content='mon, oppa, monoppa, blog, startup, manila, makati, quezon, Philippines react, react.js, reactjs, javascript, software, developer, engineer, tech, technology, code, coding, next, next.js, nextjs'
      />

      <meta property='og:site_name' content='monoppa - Blog by Mon Quindoza' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:image:alt' content='Blog by Mon Quindoza' />
      <meta name='twitter:site' content='@monoppa_' />
      <meta name='twitter:creator' content='@monoppa_' />

      {/* <meta property='fb:app_id' content='your_app_id' />
      <meta name='twitter:site' content='@website-username' /> */}

      {children}
    </Head>
  );
};

CustomHead.propTypes = {
  children: node,
  pageTitle: string,
  description: string,
  ogImage: string,
};

CustomHead.defaultProps = {
  children: null,
  pageTitle: '',
  description: '',
  ogImage: '',
};

export default CustomHead;

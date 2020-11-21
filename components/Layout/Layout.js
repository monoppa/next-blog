import Head from 'next/head';
import { node, string } from 'prop-types';

import Navbar from 'components/Layout/Navbar';
import Footer from './Footer';

const Layout = ({ children, pageTitle }) => {
  return (
    <div className='bg-white dark:bg-dim'>
      <Head>
        <title>
          {pageTitle ? `${pageTitle} | ` : ''} monoppa - Blog by Mon Quindoza
        </title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Navbar />
      <div className='pb-12'>{children}</div>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  pageTitle: string,
};

Layout.defaultProps = {
  pageTitle: '',
};

export default Layout;

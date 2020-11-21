import { node } from 'prop-types';

import Navbar from 'components/Layout/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='bg-white dark:bg-dim'>
      <Navbar />
      <div className='pb-12'>{children}</div>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

Layout.defaultProps = {};

export default Layout;

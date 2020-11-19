import { node } from 'prop-types';

import Navbar from 'components/Layout/Navbar';

const Layout = ({ children }) => {
  return (
    <div className='bg-white dark:bg-dim'>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

Layout.defaultProps = {};

export default Layout;

import React from 'react';
import {} from 'prop-types';
import Layout from 'components/Layout';
import CustomHead from 'components/CustomHead/CustomHead';

const BlogListPage = () => {
  return (
    <Layout>
      <CustomHead pageTitle='Blogs' />

      <div>BlogListPage</div>
    </Layout>
  );
};

BlogListPage.propTypes = {};

BlogListPage.defaultProps = {};

export default BlogListPage;

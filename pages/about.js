import React from 'react';
import {} from 'prop-types';
import Layout from 'components/Layout';
import CustomHead from 'components/CustomHead/CustomHead';

const AboutPage = () => {
  return (
    <Layout>
      <CustomHead pageTitle='About' />

      <div>AboutPage</div>
    </Layout>
  );
};

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;

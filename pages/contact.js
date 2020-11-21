import React from 'react';
import {} from 'prop-types';
import Layout from 'components/Layout';
import CustomHead from 'components/CustomHead/CustomHead';

const ContactPage = () => {
  return (
    <Layout>
      <CustomHead pageTitle='Contact' />

      <div>ContactPage</div>
    </Layout>
  );
};

ContactPage.propTypes = {};

ContactPage.defaultProps = {};

export default ContactPage;

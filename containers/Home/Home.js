import React from 'react';
import {} from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/Layout';
import CardBlog from 'components/CardBlog';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>monoppa - Blog by Mon Quindoza</title>
      </Head>

      <main className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='mt-12'>
          <h2 className='text-xl tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl'>
            From the blog
          </h2>

          <ul className='mt-8 space-y-20'>
            {[1, 2, 3].map((item) => (
              <li key={item}>
                <Link href='/'>
                  <a>
                    <CardBlog />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      {/* <div className='bg-red-500'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>
          <h1>Hello</h1>
        </main>
      </div> */}
    </Layout>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

import Head from 'next/head';

import Layout from 'components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>monoppa - Blog by Mon Quindoza</title>
      </Head>

      <main className='max-w-5xl px-4 mx-auto sm:px-6'>
        <div className='mt-12'>
          <h2 className='text-xl tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl'>
            From the blog
          </h2>
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
}

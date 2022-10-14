import type { NextPage } from 'next';
import Head from 'next/head';
import App from './components/App';

const Home: NextPage = () => {
  return (
    <>
      {/* site head */}
      <Head>
        <title>Test</title>
      </Head>

      <App />
    </>
  )
}

export default Home;

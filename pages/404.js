import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

function NotFound() {
  // const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     //router.go(1)..

  //     router.push('/');
  //   }, 2000);
  // }, []);

  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="keywords" content="Error page" />
      </Head>
      <div className="not-found food-data">
        <h1>404 Not-Found</h1>
        <p>
          Go back
          <br />
          <Link href="/">Home</Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
